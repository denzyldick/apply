<?php

class Vacancy extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var string
     */
    public $function;

    /**
     *
     * @var string
     */
    public $posted_date;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'id' => 'id', 
            'function' => 'function', 
            'posted_date' => 'posted_date', 
            'user_id' => 'user_id'
        );
    }

}
