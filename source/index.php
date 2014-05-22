<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(array(
	'debug' => true
	)
);

//Create a route for the home page

$app->get('/',	function() use ($app)
{	$app->view()->setData(array('loggin' => false));
	$app->render('home.php');
	});

$app->run();
