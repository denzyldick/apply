<?php

return new \Phalcon\Config([
        'company' => [
            'name' => 'website  ',
            'email' => 'mail@amirah.com',
            'baseUrl' => '/'
        ],
        'database' => [
            'adapter' => 'Mysql',
            'host' => 'localhost',
            'username' => 'root',
            'password' => '239bUxw7J3',
            'dbname' => 'appply',
        ],
        'elasticsearch' => [
            "hosts" => [
                "178.62.193.122"
            ],
        ],
        'application' => [
            'controllersDir' => __DIR__ . '/../../app/controllers/',
            'modelsDir' => __DIR__ . '/../../app/models/',
            'viewsDir' => __DIR__ . '/../../app/views/',
            'pluginsDir' => __DIR__ . '/../../app/plugins/',
            'libraryDir' => __DIR__ . '/../../app/library/',
            'cacheDir' => __DIR__ . '/../../app/cache/',
            'testsDir' => __DIR__ . '/../../tests',
            'baseUri' => ''
        ],
        'stripe' => [
            "secret_key" => "",
            "publishable_key" => ""
        ],
        'smtp' => [
            'username' => '',
            'password' => '',
            'port' => 465,
            'host' => '',
            'email' => '',
            'authentication' => 'yes',
            'tls' => 'yes'
        ],
        'memcached' => [
            'host' => '127.0.0.1',
            'port' => 11211,
            "weight" => "1",
            'persistent' => false],
        'flash' => [
            'error' => 'alert alert-danger',
            'success' => 'alert alert-success',
            'notice' => 'alert alert-warning'],
        'jsFooter' => [
            ""
        ]

    ]
);
