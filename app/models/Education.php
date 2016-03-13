<?php

use Phalcon\Mvc\Model\Validator\PresenceOf;

class Education extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    private $id;

    /**
     *
     * @var string
     */
    private $start;

    /**
     *
     * @var string
     */
    private $end;

    /**
     *
     * @var string
     */
    private $description;


    private $organisation;

    private $user_id;

    private $study;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'education';
    }

    /**
     * @return string
     */
    public function getStart()
    {
        return $this->start;
    }

    /**
     * @param string $start
     */
    public function setStart($start)
    {
        $this->start = $start;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return string
     */
    public function getEnd()
    {
        return $this->end;
    }

    /**
     * @param string $end
     */
    public function setEnd($end)
    {
        $this->end = $end;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getOrganisation()
    {
        return $this->organisation;
    }

    /**
     * @param mixed $organisation
     */
    public function setOrganisation($organisation)
    {
        $this->organisation = $organisation;
    }

    /**
     * @return mixed
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * @param mixed $user_id
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;
    }

    /**
     * @return mixed
     */
    public function getStudy()
    {
        return $this->study;
    }

    /**
     * @param mixed $study
     */
    public function setStudy($study)
    {
        $this->study = $study;
    }

    public function validation()
    {
        $this->validate(new PresenceOf(
            [
                "field" => "study",
                "message" => "what_did_you_study"
            ]
        ));

        $this->validate(new PresenceOf(
            [
                "field" => "organisation",
                "message" => "where_did_you_get_your_education"
            ]
        ));

        $this->validate(new PresenceOf(
            [
                "field"=>"start",
                "message"=>"when_did_you_start"
            ]
        ));
        if ($this->validationHasFailed() == true) {
            return false;
        }
        return true;
    }

    public function afterSave()
    {
        /** @var Elasticsearch\Client $elasticsearch */
        $elasticsearch =  \Phalcon\Di::getDefault()->get("elasticsearch");

        $elasticsearch->index($this->buildIndex());
    }

    public function afterDelete()
    {
        /** @var Elasticsearch\Client $elasticsearch */
        $elasticsearch =  \Phalcon\Di::getDefault()->get("elasticsearch");

        $elasticsearch->delete([
            'index'=>'apply',
            'type'=>'education',
            'id'=>$this->getId()
        ]);
    }
    private function buildIndex()
    {
        return  [
            "index"=>"apply",
            "type"=>"education",
            "id"=>$this->getId(),
            "body"=>[
                "study"=>$this->getStudy(),
                "description"=>$this->getDescription(),
                "organisation"=>$this->getOrganisation(),
                "user_id"=>$this->getUserId()
            ]
        ];
    }
}
