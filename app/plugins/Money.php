<?php
use Phalcon\Mvc\User\Plugin;

/**
 * This is a kind of money holder
 * @author Denzyl Dick<denzyl@live.nl>
 *
 */
class Money extends Plugin
{
    private $amount, $currency;

    public function __construct($amount, $currency)
    {
        $this->amount = $amount;
        $this->currency = $currency;
    }

    public function getAmount()
    {
        return $this->amount;
    }

    public function getCurrency()
    {
        return $this->currency;
    }
}
