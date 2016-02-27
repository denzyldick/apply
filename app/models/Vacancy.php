<?php


use Phalcon\Mvc\Model\Validator\PresenceOf;
use Phalcon\Mvc\Model\Validator\StringLength;

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

    protected $fulltime;
    protected $parttime;
    protected $freelance;
    protected $work_enviroment_type;
    protected $description;
    protected $job_benefits;
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
        $this->hasMany("id", "Personality", "vacancy_id");
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

//        $elasticsearch->de($this->buildIndex());
    }

    private function buildIndex()
    {
        return [
            "index"=>"apply",
            "type"=>"vacancy",
            "body"=>[
                "function"=>$this->getFunction(),
                "vacancy_id"=>$this->getId(),
                "description"=>$this->getDescription(),
                "contract_type"=>$this->getContractTypes(),
                "job_benefits"=>$this->getJobBenefits()
            ]
        ];
    }
    /**
     * @return mixed
     */
    public function getFreelance()
    {
        return $this->freelance;
    }

    /**
     * @param mixed $freelance
     */
    public function setFreelance($freelance)
    {
        $this->freelance = $freelance;
    }

    /**
     * @return mixed
     */
    public function getParttime()
    {
        return $this->parttime;
    }

    /**
     * @param mixed $parttime
     */
    public function setParttime($parttime)
    {
        $this->parttime = $parttime;
    }

    /**
     * @return mixed
     */
    public function getFulltime()
    {
        return $this->fulltime;
    }

    /**
     * @param mixed $fulltime
     */
    public function setFulltime($fulltime)
    {
        $this->fulltime = $fulltime;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }
    public function getDescription($short = false,$lentgh = null)
    {
        $translator = Phalcon\DI::getDefault()->getShared("lang");
        $readmore = $translator->_("read_more_about_this_job");

        if($short)
        {
            $a = explode(".",$this->description);
            if(strlen($a[0]) > $lentgh)
            {
                $sub = $lentgh - strlen($readmore);
                if(strlen($a[0]) > $sub)
                {
                    $short_text = $this->truncate_str($a[0],$sub);
                }else{
                    $short_text = $a[0];
                }
                $this->description = $short_text;
            }else{
                $this->description = $a[0].".";
            }
        }
        return $this->description;
    }

    private  function truncate_str($str, $maxlen) {
        if ( strlen($str) <= $maxlen ) return $str;

        $s = substr($str, 0, $maxlen);
        if ( substr($s,-1,1) != ' ' ) $s = substr($s, 0, strrpos($s, " "));

        return $s;
    }

    public function getContractTypes()
    {
        $contracts = [];
        if($this->getParttime() == 1)
        {
            $contracts[] ="parttime";
        }

        if($this->getFulltime() == 1)
        {
            $contracts[] = "fulltime";
        }

        if($this->getFreelance())
        {
            $contracts[] = "freelance";
        }
        return $contracts;
    }

    /**
     * @return mixed
     */
    public function getJobBenefits()
    {
        return $this->job_benefits;
    }

    /**
     * @param mixed $job_benefits
     */
    public function setJobBenefits($job_benefits)
    {
        $this->job_benefits = $job_benefits;
    }


    public function validation()
    {

        $this->validate(new StringLength(
                [
                    'field' => 'description',
                    'max' => 1500,
                    'maximumMessage' => 'your_vacancy_description_is_too_long'
                ]
            )
        );
        $this->validate(new StringLength(
                [
                    'field' => 'job_benefits',
                    'max' => 1500,
                    'maximumMessage' => 'your_job_benefits_description_is_too_long'
                ]
            )
        );
        $this->validate(new PresenceOf(
            [
                "field"=>"function",
                "message"=>"please_fill_in_job_function"
            ]
        ));

        if ($this->validationHasFailed() == true) {
            return false;
        }
        return true;

    }

}
