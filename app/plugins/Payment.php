<?php

use Phalcon\Acl;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\User\Plugin;

class StripePayment extends Plugin
{
    public function get()
    {
        return true;

}

}
