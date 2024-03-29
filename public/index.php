<?php

error_reporting(E_ERROR);
ini_set('display_errors',true);

$debug = new \Phalcon\Debug();
$debug->listen();
/**
 * Include composer
 */
include(__DIR__ . '/../vendor/autoload.php');
/**
 * Read the configuration
 */
$config = include __DIR__ . "/../app/config/config.php";


/**
 * Personalities
 */
$personalities = include __DIR__ . "/../app/config/personalities.php";

/**
 * Read auto-loader
 */
include __DIR__ . "/../app/config/loader.php";

/**
 * Read services
 */
include __DIR__ . "/../app/config/services.php";

/**
 * Handle the request
 */
$application = new \Phalcon\Mvc\Application($di);

echo $application->handle()->getContent();
