<?php

use Phalcon\Mvc\Model\Validator\PresenceOf;

class WorkExperience extends \Phalcon\Mvc\Model
{

    private $user_id;
    /**

     * @var integer
     */
    public $id;

    /**
     *
     * @var string
     */
    public $start;

    /**
     *
     * @var string
     */
    public $end;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var string
     */
    public $organisation;

    /**
     *
     * @var string
     */
    public $job_title;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'work_experience';
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
    public function getOrganisation()
    {
        return $this->organisation;
    }

    /**
     * @param string $organisation
     */
    public function setOrganisation($organisation)
    {
        $this->organisation = $organisation;
    }

    /**
     * @return string
     */
    public function getJobTitle()
    {
        return $this->job_title;
    }

    /**
     * @param string $job_title
     */
    public function setJobTitle($job_title)
    {
        $this->job_title = $job_title;
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
    public function validation()
    {
        $this->validate(new PresenceOf(
            [
                "field"=>"organisation",
                "message"=>"organisation_is_missing"
            ]
        ));
        $this->validate(new PresenceOf(
            [
                "field"=>"job_title",
                "message"=>"title_is_missing"
            ]
        ));
        if ($this->validationHasFailed() == true) {
            return false;
        }
    return true;
    }

    public function setUser(User $user)
    {
        $this->user_id = $user->getId();
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    public function afterSave()
    {
                /** @var Elasticsearch\Client $elasticsearch */
        $elasticsearch =  \Phalcon\Di::getDefault()->get("elasticsearch");
        $elasticsearch->index($this->buildIndex());
    }

    private function buildIndex()
    {
        return [
            "index"=>"apply",
            "type"=>"work_experience",
            "body"=>[
                "organisation"=>$this->getOrganisation(),
                "job_title"=>$this->getJobTitle(),
                "description"=>$this->getDescription(),
                "user_id" => $this->user_id
            ]
        ];
    }
}
