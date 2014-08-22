<?php

class Matches extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    protected $id;

    /**
     *
     * @var integer
     */
    protected $percent;

    /**
     *
     * @var integer
     */
    protected $user_id;

    /**
     *
     * @var integer
     */
    protected $vacancy_id;

    /**
     *
     * @var string
     */
    protected $viewed;

    /**
     *
     * @var string
     */
    protected $employer_accepted;

    /**
     *
     * @var string
     */
    protected $employee_accepted;

    /**
     * Method to set the value of field id
     *
     * @param  integer $id
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
     * @param  integer $percent
     * @return $this
     */
    public function setPercent($percent)
    {
        $this->percent = $percent;

        return $this;
    }

    /**
     * Method to set the value of field user_id
     *
     * @param  integer $user_id
     * @return $this
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;

        return $this;
    }

    /**
     * Method to set the value of field vacancy_id
     *
     * @param  integer $vacancy_id
     * @return $this
     */
    public function setVacancyId($vacancy_id)
    {
        $this->vacancy_id = $vacancy_id;

        return $this;
    }

    /**
     * Method to set the value of field viewed
     *
     * @param  string $viewed
     * @return $this
     */
    public function setViewed($viewed)
    {
        $this->viewed = $viewed;

        return $this;
    }

    /**
     * Method to set the value of field employer_accepted
     *
     * @param  string $employer_accepted
     * @return $this
     */
    public function setEmployerAccepted($employer_accepted)
    {
        $this->employer_accepted = $employer_accepted;

        return $this;
    }

    /**
     * Method to set the value of field employee_accepted
     *
     * @param  string $employee_accepted
     * @return $this
     */
    public function setEmployeeAccepted($employee_accepted)
    {
        $this->employee_accepted = $employee_accepted;

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
     * @return integer
     */
    public function getPercent()
    {
        return $this->percent;
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
     * Returns the value of field vacancy_id
     *
     * @return integer
     */
    public function getVacancyId()
    {
        return $this->vacancy_id;
    }

    /**
     * Returns the value of field viewed
     *
     * @return string
     */
    public function getViewed()
    {
        return $this->viewed;
    }

    /**
     * Returns the value of field employer_accepted
     *
     * @return string
     */
    public function getEmployerAccepted()
    {
        return $this->employer_accepted;
    }

    /**
     * Returns the value of field employee_accepted
     *
     * @return string
     */
    public function getEmployeeAccepted()
    {
        return $this->employee_accepted;
    }
    public function columnMap()
    {
        return array(
            'id' => 'id',
            'percent' => 'percent',
            'user_id' => 'user_id',
            'vacancy_id' => 'vacancy_id',
            'viewed' => 'viewed',
            'employer_accepted'=>'employer_accepted',
            'employee_accepted'=>'employee_accepted'
        );
    }
    public function initialize()
    {
      $this->hasOne("user_id","User","id");
      $this->hasOne("vacancy_id","Vacancy","id");
    }

}
