<?php
/**
*Stripe loader
*/
require_once('../app/plugins/Stripe/lib/Stripe.php');

#===#
use Phalcon\DI\FactoryDefault;
use Phalcon\Mvc\View;
use Phalcon\Mvc\Url as UrlResolver;
use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;
use Phalcon\Mvc\View\Engine\Volt as VoltEngine;
use Phalcon\Mvc\Model\Metadata\Memory as MetaDataAdapter;
use Phalcon\Session\Adapter\Files as SessionAdapter;
use Phalcon\Flash\Session as Flash;
use Phalcon\Mvc\Model\Manager as Manager;
use Phalcon\Http\Request as Request;


/**
 * The FactoryDefault Dependency Injector automatically register the right services providing a full stack framework
 */
$di = new FactoryDefault();
//Register the flash service with custom CSS classes
$di->set('flash', function () {
    $flash = new Flash(array('error' => 'alert alert-error', 'success' => 'alert alert-success', 'notice' => 'alert alert-info',));

    return $flash;
});
/*
*HttP Request
 */
$di->set('request',function () {
    return new Request();
});
/*
*Storage
 */
$di->set('storage', function () {
    return new Storage('/uploads');
}, true);
$di->set('dispatcher', function () use ($di) {
    //Obtain the standard eventsManager from the DI
    $eventsManager = $di->getShared('eventsManager');
    //Instantiate the Security plugin
    $security = new Security($di);
    //Listen for events produced in the dispatcher using the Security plugin
    $eventsManager->attach('dispatch', $security);
    $dispatcher = new Phalcon\Mvc\Dispatcher();
    //Bind the EventsManager to the Dispatcher
    $dispatcher->setEventsManager($eventsManager);

    return $dispatcher;
});
/**
 * The matching system
 */
$di->set('matcher', function () use ($di) {
    $matcher = new Matcher($di);

    return $matcher;
});
/**
 * The URL component is used to generate all kind of urls in the application
 */
$di->set('url', function () use ($config) {
    $url = new UrlResolver();
    $url->setBaseUri($config->application->baseUri);

    return $url;
}, true);
/**
 * Setting up the view component
 */
$di->set('view', function () use ($config) {
    $view = new View();
    $view->setViewsDir($config->application->viewsDir);
    $view->registerEngines(array('.volt' => function ($view, $di) use ($config) {
        $volt = new VoltEngine($view, $di);
        $volt->setOptions(array('compiledPath' => $config->application->cacheDir, 'compiledSeparator' => '_', 'compileAlways' => true));

        return $volt;
    }, '.phtml' => 'Phalcon\Mvc\View\Engine\Php'));

    return $view;
}, true);
/**
 * Database connection is created based in the parameters defined in the configuration file
 */
$di->set('db', function () use ($config) {
    return new DbAdapter(array('host' => $config->database->host, 'username' => $config->database->username, 'password' => $config->database->password, 'dbname' => $config->database->dbname));
});
/**
 * If the configuration specify the use of metadata adapter use it or use memory otherwise
 */
$di->set('modelsMetadata', function () {
    return new MetaDataAdapter();
});
/**
 * Start the session the first time some component request the session service
 */
$di->set('session', function () {
    $session = new SessionAdapter();
    $session->start();

    return $session;
});
$di->setShared('session', function () {
    $session = new Phalcon\Session\Adapter\Files();
    $session->start();

    return $session;
});
/**
 * Cookie encryption key
 *
 */
$di->set('crypt', function () {
    $crypt = new Phalcon\Crypt();
    $crypt->setKey('JFE#(#18139u5#!');

    return $crypt;
});
/**
 *
 *Register an user component
 *
 */
$di->set('elements', function () use ($di) {
    return new Elements($di);
});
/**
*MultiLanguage plugin
*/
$di->set('lang',function () use ($di) {

    $lang =  new Translation($di);

    return $lang->getText();
});
/**
*Skills to percent 5 = 100%;
*/
$di->set('convert',function () {
    return new Converter();
});
/**
*Model manager
*/
 $di->set('modelsManager', function () {
      return new Manager();
 });
 /**
 *Percent Calculator
 */
 $di->set('calculator',function() use ($di)
 {
   return new PercentCalculator();
 });
/**
 * Matcher
 */
$di->set("matcher", function () use ($di) {
    return new Matcher($di);
});
/**
*Stripe a payment gateway
*/
$di->set("stripe", function() use ($config)
{



    Stripe::setApiKey($config->stripe->secret_key,$config->stripe->publishable_key);
    return Stripe;

  });
  /**
  *Config
  */
$di->set("config",function() use ($config)
{
    return $config;
});

/**
*Premium handler
*/
$di->set("premium",function() use($di)
{
    return new PremiumHandler($di);
});
