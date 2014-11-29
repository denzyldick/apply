<?php

class Location extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    protected $id;

    /**
     *
     * @var double
     */
    protected $longitude;

    /**
     *
     * @var double
     */
    protected $latitude;

    /**
     *
     * @var integer
     */
    protected $travel_distance;

    /**
     *
     * @var string
     */
    protected $location;

    /**
     *
     * @var integer
     */
    protected $zoom;

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
     * Returns the value of field longitude
     *
     * @return double
     */
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * Method to set the value of field longitude
     *
     * @param  double $longitude
     * @return $this
     */
    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;

        return $this;
    }

    /**
     * Returns the value of field latitude
     *
     * @return double
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * Method to set the value of field latitude
     *
     * @param  double $latitude
     * @return $this
     */
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;

        return $this;
    }

    /**
     * Returns the value of field travel_distance
     *
     * @return integer
     */
    public function getTravelDistance()
    {
        return $this->travel_distance;
    }

    /**
     * Method to set the value of field travel_distance
     *
     * @param  integer $travel_distance
     * @return $this
     */
    public function setTravelDistance($travel_distance)
    {
        $this->travel_distance = $travel_distance;

        return $this;
    }

    /**
     * Returns the value of field location
     *
     * @return string
     */
    public function getLocation()
    {
        return $this->location;
    }

    /**
     * Method to set the value of field location
     *
     * @param  string $location
     * @return $this
     */
    public function setLocation($location)
    {
        $this->location = $location;

        return $this;
    }

    /**
     * Returns the value of field zoom
     *
     * @return integer
     */
    public function getZoom()
    {
        return $this->zoom;
    }

    /**
     * Method to set the value of field zoom
     *
     * @param  integer $zoom
     * @return $this
     */
    public function setZoom($zoom)
    {
        $this->zoom = $zoom;

        return $this;
    }

}
