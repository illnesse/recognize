<?php
/*
 * Copyright (c) 2021. The Nextcloud Recognize contributors.
 *
 * This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
 */

namespace OCA\Recognize\Classifiers\Images;

use OCA\Recognize\Classifiers\Classifier;
use OCA\Recognize\Service\Logger;
use OCA\Recognize\Service\QueueService;
use OCA\Recognize\Service\TagManager;
use OCP\Files\IRootFolder;
use OCP\IConfig;
use OCP\ITempManager;

class LandmarksClassifier extends Classifier {
	public const IMAGE_TIMEOUT = 480; // seconds
	public const IMAGE_PUREJS_TIMEOUT = 600; // seconds
	public const MODEL_NAME = 'landmarks';
	public const PRECONDITION_TAGS = ['Architecture', 'Tower', 'Monument', 'Bridge', 'Historic'];

	private Logger $logger;
	private TagManager $tagManager;
	private IConfig $config;

	public function __construct(Logger $logger, IConfig $config, TagManager $tagManager, QueueService $queue, IRootFolder $rootFolder, ITempManager $tempManager) {
		parent::__construct($logger, $config, $rootFolder, $queue, $tempManager);
		$this->logger = $logger;
		$this->config = $config;
		$this->tagManager = $tagManager;
	}

	/**
	 * @param \OCA\Recognize\Db\QueueFile[] $queueFiles
	 * @return void
	 */
	public function classify(array $queueFiles): void {
		if ($this->config->getAppValue('recognize', 'tensorflow.purejs', 'false') === 'true') {
			$timeout = self::IMAGE_PUREJS_TIMEOUT;
		} else {
			$timeout = self::IMAGE_TIMEOUT;
		}
		$classifierProcess = $this->classifyFiles(self::MODEL_NAME, $queueFiles, $timeout);

		foreach ($classifierProcess as $queueFile => $results) {
			$this->tagManager->assignTags($queueFile->getFileId(), $results);
			$this->config->setAppValue('recognize', self::MODEL_NAME.'.status', 'true');
			$this->config->setAppValue('recognize', self::MODEL_NAME.'.lastFile', time());
		}
	}
}
