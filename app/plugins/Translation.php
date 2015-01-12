<?php

use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\User\Plugin;

/**
 *Multi language support for the system.
 * @author Denzyl Dick<denzyl.live.nl>
 */
class Translation extends Plugin
{
    private $language;
    private $messages;

    /**
     * Set the desired language
     * @param $language
     */
    public function setLanguage($language)
    {

        if (file_exists("../app/messages/" . $language . ".php")) {
            $this->messages = require "../app/messages/" . $language . ".php";
        } else {
            // fallback to some default
            $this->messages = require "../app/messages/en-US.php";
        }

        $this->language = $language;
    }

    public function __construct($di)
    {
        $this->di = $di;
        $this->setLanguage($this->request->getBestLanguage());

    }

    /**
     *Get the translation of the string.
     * @return NativeArray
     * @param void
     */
    public function getText()
    {


        //Return a translation object
        return new \Phalcon\Translate\Adapter\NativeArray(array(
            "content" => $this->messages
        ));
    }

}
