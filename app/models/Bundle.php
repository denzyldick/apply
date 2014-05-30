<?php

class Bundle extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $idbundle;

    /**
     *
     * @var integer
     */
    public $amount;

    /**
     *
     * @var double
     */
    public $price;

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'idbundle' => 'idbundle', 
            'amount' => 'amount', 
            'price' => 'price'
        );
    }

}
