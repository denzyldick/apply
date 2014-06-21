<?php

class Matches extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var integer
     */
    public $percent;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var integer
     */
    public $vacancy_id;

    /**
     *
     * @var string
     */
    public $viewed;

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'id' => 'id',
            'percent' => 'percent',
            'user_id' => 'user_id',
            'vacancy_id' => 'vacancy_id',
            'viewed' => 'viewed'
        );
    }
    public function initialize()
    {
      $this->belongsTo("user_id","User","id");
      $this->hasOne("vacancy_id","Vacancy","id");
    }

}
