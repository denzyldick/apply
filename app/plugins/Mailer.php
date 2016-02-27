<?php
use Phalcon\Acl;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\User\Plugin;

class Mailer extends Plugin
{

    private $body;
    private $subject;
    private $type;
    private $recipients = array();
    private $sender = array();
    private $swift_Message;
    private $swift_mailer;

    public function __construct(Swift_SmtpTransport $transport)
    {
        $this->swift_Message = Swift_Message::newInstance();
        $this->swift_Mailer = Swift_Mailer::newInstance($transport);
    }

    public function setAttachment($file)
    {
        if (file_exists($file)) {
            $this->swift_Message->attach(Swift_Attachment::fromPath($file));
            return $this;
        } else {
            throw new Exception("$file doesn't exists.");
        }
    }

    public function setRecipments(array $recipients)
    {
        $this->recipients = $recipients;
        return $this;
    }

    public function send()
    {
        $this->buildMessage();
        try {
            return $this->swift_Mailer->send($this->swift_Message);
        } catch (Exception $e) {
            /*
            *Logger
            */
            var_dump($e);

        }
    }

    private function buildMessage()
    {
        $this->swift_Message
            ->setSubject($this->getSubject())
            ->setFrom($this->getSender())
            ->setTo($this->getRecipments())
            ->setBody($this->getBody(), $this->getType());
        return $this;
    }

    public function getSubject()
    {
        return $this->subject;
    }

    public function setSubject($subject)
    {
        $this->subject = $subject;
        return $this;
    }

    public function getSender()
    {
        return $this->sender;
    }

    public function setSender(array $sender)
    {
        $this->sender = $sender;
        return $this;
    }

    public function getRecipments()
    {
        return $this->recipients;
    }

    public function getBody()
    {
        return $this->body;
    }

    public function setBody($body)
    {
        $this->body = $body;
        return $this;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type)
    {
        $this->type = $type;
        return $this;
    }

}
