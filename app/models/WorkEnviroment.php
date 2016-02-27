<?php

class WorkEnviroment extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    protected $type;

    /**
     * Returns the value of field type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Method to set the value of field type
     *
     * @param  string $type
     * @return $this
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

}
