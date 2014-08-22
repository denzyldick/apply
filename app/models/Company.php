<?php

class Company extends \Phalcon\Mvc\Model
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
    public $name;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var integer
     */
    public $longitude;

    /**
     *
     * @var integer
     */
    public $latitude;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var integer
     */
    public $zoom;

    /**
     *
     * @var string
     */
    public $location;

    /**
     *
     * @var string
     */
    public $logo;

    /**
     *
     * @var string
     */
    public $website;
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }
    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;

        return $this;
    }
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;

        return $this;
    }
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;

        return $this;
    }
    public function setZoom($zoom)
    {
        $this->zoom = $zoom;

        return $this;
    }
    public function setLocation($location)
    {
        $this->location = $location;

        return $this;
    }
    public function getId()
    {
        return $this->id;
    }
    public function getName()
    {
        return $this->name;
    }
    public function getDescription()
    {
        return $this->description;
    }
    public function getLongitude()
    {
        return $this->longitude;
    }
    public function getLatitude()
    {
        return $this->latitude;
    }
    public function getUserId()
    {
        return $this->user_id;
    }
    public function getZoom()
    {
        return $this->zoom;
    }
    public function getLocation()
    {
        return $this->location;
    }
    public function columnMap()
    {
        return array('id' => 'id', 'name' => 'name', 'description' => 'description', 'longitude' => 'longitude', 'latitude' => 'latitude', 'user_id' => 'user_id', 'location' => 'location', 'zoom' => 'zoom','logo'=>'logo','website'=>'website');
    }
    public function initialize()
    {
        $this->hasOne("user_id", "User", "id");
        $this->hasOne("location_id","Location","id");
    }

}
