<?php

class Specification extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    protected $id;

    /**
     *
     * @var string
     */
    protected $percent;

    /**
     *
     * @var integer
     */
    protected $vacancy_id;

    /**
     *
     * @var integer
     */
    protected $skills_id;

    /**
     * Method to set the value of field id
     *
     * @param integer $id
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Method to set the value of field percent
     *
     * @param string $percent
     * @return $this
     */
    public function setPercent($percent)
    {
        $this->percent = $percent;

        return $this;
    }

    /**
     * Method to set the value of field vacancy_id
     *
     * @param integer $vacancy_id
     * @return $this
     */
    public function setVacancyId($vacancy_id)
    {
        $this->vacancy_id = $vacancy_id;

        return $this;
    }

    /**
     * Method to set the value of field skills_id
     *
     * @param integer $skills_id
     * @return $this
     */
    public function setSkillsId($skills_id)
    {
        $this->skills_id = $skills_id;

        return $this;
    }

    /**
     * Returns the value of field id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Returns the value of field percent
     *
     * @return string
     */
    public function getPercent()
    {
        return $this->percent;
    }

    /**
     * Returns the value of field vacancy_id
     *
     * @return integer
     */
    public function getVacancyId()
    {
        return $this->vacancy_id;
    }

    /**
     * Returns the value of field skills_id
     *
     * @return integer
     */
    public function getSkillsId()
    {
        return $this->skills_id;
    }
    public function columnMap()
    {
        return array(
            'id' => 'id',
            'percent' => 'percent',
            'vacancy_id' => 'vacancy_id',
            'skills_id' => 'skills_id'
        );
    }
  

}
