<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(array(
	'debug' => true
	)
);

//Create a route for the home page

$app->get('/',	function() use ($app)
{	$app->view()->setData(array('foo' => 'bar'));
	$app->render('home.php');
	});

$app->run();
