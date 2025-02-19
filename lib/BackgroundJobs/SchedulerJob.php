<?php
/*
 * Copyright (c) 2021. The Nextcloud Recognize contributors.
 *
 * This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
 */

namespace OCA\Recognize\BackgroundJobs;

use OC\Files\Cache\CacheQueryBuilder;
use OC\SystemConfig;
use OCA\Recognize\Classifiers\Audio\MusicnnClassifier;
use OCA\Recognize\Classifiers\Images\ClusteringFaceClassifier;
use OCA\Recognize\Classifiers\Images\ImagenetClassifier;
use OCA\Recognize\Classifiers\Images\LandmarksClassifier;
use OCA\Recognize\Classifiers\Video\MovinetClassifier;
use OCA\Recognize\Service\Logger;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\IJobList;
use OCP\BackgroundJob\QueuedJob;
use OCP\DB\Exception;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use Psr\Log\LoggerInterface;

class SchedulerJob extends QueuedJob {
	public const INTERVAL = 30 * 60; // 30 minutes
	public const ALLOWED_MOUNT_TYPES = [
		'OC\Files\Mount\LocalHomeMountProvider',
		'OC\Files\Mount\ObjectHomeMountProvider',
		'OCA\Files_External\Config\ConfigAdapter',
		'OCA\GroupFolders\Mount\MountProvider'
	];

	public const HOME_MOUNT_TYPES = [
		'OC\Files\Mount\LocalHomeMountProvider',
		'OC\Files\Mount\ObjectHomeMountProvider',
	];

	private LoggerInterface $logger;
	private IDBConnection $db;
	private IJobList $jobList;
	/**
	 * @var \OC\SystemConfig
	 */
	private SystemConfig $systemConfig;

	public function __construct(ITimeFactory $timeFactory, Logger $logger, IDBConnection $db, IJobList $jobList, SystemConfig $systemConfig) {
		parent::__construct($timeFactory);
		$this->logger = $logger;
		$this->db = $db;
		$this->jobList = $jobList;
		$this->systemConfig = $systemConfig;
	}

	protected function run($argument): void {
		$models = $argument['models'] ?? [
			ClusteringFaceClassifier::MODEL_NAME,
			ImagenetClassifier::MODEL_NAME,
			LandmarksClassifier::MODEL_NAME,
			MovinetClassifier::MODEL_NAME,
			MusicnnClassifier::MODEL_NAME,
		];

		$qb = $this->db->getQueryBuilder();
		$qb->select('root_id', 'storage_id', 'mount_provider_class')
			->from('mounts')
			->where($qb->expr()->in('mount_provider_class', $qb->createPositionalParameter(self::ALLOWED_MOUNT_TYPES, IQueryBuilder::PARAM_STR_ARRAY)));
		$result = $qb->executeQuery();

		while ($row = $result->fetch()) {
			$storageId = (int)$row['storage_id'];
			$rootId = (int)$row['root_id'];
			$overrideRoot = $rootId;
			if (in_array($row['mount_provider_class'], self::HOME_MOUNT_TYPES)) {
				// Only crawl files, not cache or trashbin
				$qb = new CacheQueryBuilder($this->db, $this->systemConfig, $this->logger);
				try {
					$root = $qb->selectFileCache()
						->andWhere($qb->expr()->eq('filecache.storage', $qb->createNamedParameter($storageId, IQueryBuilder::PARAM_INT)))
						->andWhere($qb->expr()->eq('filecache.path', $qb->createNamedParameter('files')))
						->executeQuery()->fetch();
					if ($root !== false) {
						$overrideRoot = (int)$root['fileid'];
					}
				} catch (Exception $e) {
					$this->logger->error('Could not fetch home storage files root', ['exception' => $e]);
					return;
				}
			}
			$this->jobList->add(StorageCrawlJob::class, [
				'storage_id' => $storageId,
				'root_id' => $rootId,
				'override_root' => $overrideRoot,
				'last_file_id' => 0,
				'models' => $models,
			]);
		}

		$this->jobList->remove(self::class);
	}
}
