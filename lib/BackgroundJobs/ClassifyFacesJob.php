<?php

namespace OCA\Recognize\BackgroundJobs;

use OCA\Recognize\Classifiers\Images\ClusteringFaceClassifier;
use OCA\Recognize\Service\QueueService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\IJobList;
use OCP\Files\Config\IUserMountCache;
use OCP\IConfig;
use Psr\Log\LoggerInterface;

class ClassifyFacesJob extends ClassifierJob {
	public const MODEL_NAME = 'faces';
	public const BATCH_SIZE = 500; // 500 images
	public const BATCH_SIZE_PUREJS = 25; // 25 images

	private IConfig $config;
	private ClusteringFaceClassifier $faces;

	public function __construct(ITimeFactory $time, LoggerInterface $logger, QueueService $queue, IConfig $config, ClusteringFaceClassifier $faceClassifier, IUserMountCache $mountCache, IJobList $jobList) {
		parent::__construct($time, $logger, $queue, $mountCache, $jobList, $config);
		$this->config = $config;
		$this->logger = $logger;
		$this->faces = $faceClassifier;
	}

	/**
	 * @inheritDoc
	 */
	protected function run($argument) {
		$this->logger->debug('ClassifyFacesJob run', ['argument' => $argument]);
		$this->runClassifier(self::MODEL_NAME, $argument);
	}

	protected function classify(array $files) : void {
		$this->logger->debug('ClassifyFacesJob classify', ['files' => $files]);
		$this->faces->classify($files);
	}

	/**
	 * @return int
	 */
	protected function getBatchSize() :int {
		return $this->config->getAppValue('recognize', 'tensorflow.purejs', 'false') === 'false' ? self::BATCH_SIZE : self::BATCH_SIZE_PUREJS;
	}
}
