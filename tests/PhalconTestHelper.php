<?php
use Phalcon\DI,
    Phalcon\DI\FactoryDefault;

ini_set('display_errors',1);
error_reporting(E_ALL);


// required for phalcon/incubator
include __DIR__ . "/../vendor/autoload.php";

// use the application autoloader to autoload the classes
// autoload the dependencies found in composer
$loader = new \Phalcon\Loader();

$loader->registerDirs(array(
    array(
        "../app/plugins/",
        "../app/config/",
        "../app/models/",
        "../app/library/"
    )
));

$loader->register();

$di = new FactoryDefault();
DI::reset();

// add any needed services to the DI here
/**
 * Read the configuration
 */
$config = include __DIR__ . "/../app/config/config.php";
/**
 * Read auto-loader
 */
//include __DIR__ . "/../app/config/loader.php";

/**
 * Read services
 */
include __DIR__ . "/../app/config/services.php";

DI::setDefault($di);