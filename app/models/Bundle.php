<?php
namespace Models;

class Bundle extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    protected $idbundle;

    /**
     *
     * @var integer
     */
    protected $amount;

    /**
     *
     * @var double
     */
    protected $price;

    /**
     * Returns the value of field idbundle
     *
     * @return integer
     */
    public function getIdbundle()
    {
        return $this->idbundle;
    }

    /**
     * Method to set the value of field idbundle
     *
     * @param  integer $idbundle
     * @return $this
     */
    public function setIdbundle($idbundle)
    {
        $this->idbundle = $idbundle;

        return $this;
    }

    /**
     * Returns the value of field amount
     *
     * @return integer
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * Method to set the value of field amount
     *
     * @param  integer $amount
     * @return $this
     */
    public function setAmount($amount)
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * Returns the value of field price
     *
     * @return double
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Method to set the value of field price
     *
     * @param  double $price
     * @return $this
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    public function columnMap()
    {
        return array(
            'idbundle' => 'idbundle',
            'amount' => 'amount',
            'price' => 'price'
        );
    }

}
