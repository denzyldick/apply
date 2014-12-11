<?php

class Vacancy extends \Phalcon\Mvc\Model
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
    protected $function;

    /**
     *
     * @var string
     */
    protected $posted_date;

    /**
     *
     * @var integer
     */
    protected $user_id;

    /**
     *
     * @var integer
     */
    protected $location_id;

    protected $work_enviroment_type;
    /**
     * Returns the value of field function
     *
     * @return string
     */
    public function getFunction()
    {
        return $this->function;
    }

    /**
     * Method to set the value of field function
     *
     * @param string $function
     * @return $this
     */
    public function setFunction($function)
    {
        $this->function = $function;

        return $this;
    }

    /**
     * Returns the value of field posted_date
     *
     * @return string
     */
    public function getPostedDate()
    {
        return $this->posted_date;
    }

    /**
     * Method to set the value of field posted_date
     *
     * @param string $posted_date
     * @return $this
     */
    public function setPostedDate($posted_date)
    {
        $this->posted_date = $posted_date;

        return $this;
    }

    /**
     * Returns the value of field user_id
     *
     * @return integer
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Method to set the value of field user_id
     *
     * @param integer $user_id
     * @return $this
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;

        return $this;
    }

    /**
     * Returns the value of field location_id
     *
     * @return integer
     */
    public function getLocationId()
    {
        return $this->location_id;
    }

    /**
     * Method to set the value of field location_id
     *
     * @param integer $location_id
     * @return $this
     */
    public function setLocationId($location_id)
    {
        $this->location_id = $location_id;

        return $this;
    }

    public function countSkills()
    {
        return (Specification::count(array("vacancy_id=" . $this->getId())));

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

    public function countMatches()
    {
        return (Matches::count(array("vacancy_id=" . $this->getId())));

    }
    public function setWorkEnviromentType($work_enviroment_type)
    {
        $this->work_enviroment_type = $work_enviroment_type;
    }
    public function getWorkEnviromentType()
    {
        return $this->work_enviroment_type;
    }

    public function initialize()
    {
        $this->hasMany("id", "matches", "id");
        $this->hasOne("location_id", "Location", "id");
        $this->hasOne("user_id", "User", "id");
        $this->hasMany("id", "Specification", "vacancy_id");
    }

}
