<?php
/**
 * Created by PhpStorm.
 * User: denzyl
 * Date: 17-11-14
 * Time: 22:24
 */

class NotificationHandler {

    private $userid;
    private $message;
    private $mailer;

    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    public function add(User $receiver, User $sender, $message,$sendMail = true)
    {


    }

} 