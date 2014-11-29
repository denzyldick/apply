<?php

use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\User\Plugin;

/**
 *Multi language support for the system.
 * @author Denzyl Dick<denzyl.live.nl>
 */
class Translation extends Plugin
{

    public function __construct($di)
    {
        $this->di = $di;
        $this->language = $this->request->getBestLanguage();
    }

    /**
     *Get the translatio of the string.
     * @return NativeArray
     * @param void
     */
    public function getText()
    {

        if (file_exists("../app/messages/" . $this->language . ".php")) {
            require "../app/messages/" . $this->language . ".php";
        } else {
            // fallback to some default
            require "../app/messages/en-US.php";
        }

        //Return a translation object
        return new \Phalcon\Translate\Adapter\NativeArray(array(
            "content" => $messages
        ));
    }

}
