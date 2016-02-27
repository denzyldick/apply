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
     * @var integer
     */
    protected $percent;

    /**
     *
     * @var integer
     */
    protected $skills_id;

    /**
     *
     * @var integer
     */
    protected $vacancy_id;

    /**
     *
     * @var integer
     */
    protected $user_id;

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
     * @param  integer $id
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
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
     * Returns the value of field skills_id
     *
     * @return integer
     */
    public function getSkillsId()
    {
        return $this->skills_id;
    }

    /**
     * Method to set the value of field skills_id
     *
     * @param  integer $skills_id
     * @return $this
     */
    public function setSkillsId($skills_id)
    {
        $this->skills_id = $skills_id;

        return $this;
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
     * @param  integer $user_id
     * @return $this
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function columnMap()
    {
        return array(
            'id' => 'id',
            'percent' => 'percent',
            'vacancy_id' => 'vacancy_id',
            'user_id' => 'user_id',
            'skills_id' => 'skills_id'
        );
    }

    public function initialize()
    {
        $this->hasOne("skills_id", Skills::class, "id");
        $this->hasOne("vacancy_id", Vacancy::class, "id");
    }
    public function afterSave()
    {
        /** @var Elasticsearch\Client $elasticsearch */
        $elasticsearch =  \Phalcon\Di::getDefault()->get("elasticsearch");
        if($this->getVacancyId() ==  null) {
            $elasticsearch->index($this->buildUserIndex());
        }else{

            $elasticsearch->index($this->buildVacancyIndex());
        }
    }

    private function buildUserIndex()
    {
        return [
            "index"=>"apply",
            "type"=>"skills",
            "body"=>[
            "name"=>$this->skills->getName(),
            "user_id"=>$this->getUserId()
            ]
        ];
    }
    private function buildVacancyIndex()
    {
        return [
            "index"=>"apply",
            "type"=>"vacancy_skill",
            "body"=>[
                "skill"=>$this->skills->getName(),
                "vacancy_id"=>$this->getVacancyId()
            ]
        ];
    }

}
