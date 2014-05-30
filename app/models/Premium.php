<?php

class Premium extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $idpremium;

    /**
     *
     * @var integer
     */
    public $used_amount;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var integer
     */
    public $bundle_idbundle;

    /**
     *
     * @var string
     */
    public $buy_date;

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'idpremium' => 'idpremium', 
            'used_amount' => 'used_amount', 
            'user_id' => 'user_id', 
            'bundle_idbundle' => 'bundle_idbundle', 
            'buy_date' => 'buy_date'
        );
    }

}
