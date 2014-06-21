<?php

class Specification extends \Phalcon\Mvc\Model
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
    public $percent;

    /**
     *
     * @var integer
     */
    public $vacancy_id;

    /**
     *
     * @var integer
     */
    public $skills_id;

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'id' => 'id',
            'percent' => 'percent',
            'vacancy_id' => 'vacancy_id',
            'skills_id' => 'skills_id'
        );
    }

    public functioin initialize()
    {
      $this->hasMany("skills_id","Skills","id");
    }

}
