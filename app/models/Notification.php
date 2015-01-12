<?php

class Notification extends \Phalcon\Mvc\Model
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
    protected $message_key;

    /**
     *
     * @var string
     */
    protected $date;

    /**
     *
     * @var string
     */
    protected $viewed;

    /**
     *
     * @var integer
     */
    protected $receiver;

    /**
     *
     * @var integer
     */
    protected $sender;

    /**
     *
     * @var integer
     */
    protected $matches;

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
     * Method to set the value of field message_key
     *
     * @param string $message_key
     * @return $this
     */
    public function setMessageKey($message_key)
    {
        $this->message_key = $message_key;

        return $this;
    }

    /**
     * Method to set the value of field date
     *
     * @param string $date
     * @return $this
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Method to set the value of field viewed
     *
     * @param string $viewed
     * @return $this
     */
    public function setViewed($viewed)
    {
        $this->viewed = $viewed;

        return $this;
    }

    /**
     * Method to set the value of field receiver
     *
     * @param integer $receiver
     * @return $this
     */
    public function setReceiver($receiver)
    {
        $this->receiver = $receiver;

        return $this;
    }

    /**
     * Method to set the value of field sender
     *
     * @param integer $sender
     * @return $this
     */
    public function setSender($sender)
    {
        $this->sender = $sender;

        return $this;
    }

    /**
     * Method to set the value of field matches
     *
     * @param integer $matches
     * @return $this
     */
    public function setMatches($matches)
    {
        $this->matches = $matches;

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
     * Returns the value of field message_key
     *
     * @return string
     */
    public function getMessageKey()
    {
        return $this->message_key;
    }

    /**
     * Returns the value of field date
     *
     * @return string
     */
    public function getDate()
    {
        return $this->date;
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
     * Returns the value of field receiver
     *
     * @return integer
     */
    public function getReceiver()
    {
        return $this->receiver;
    }

    /**
     * Returns the value of field sender
     *
     * @return integer
     */
    public function getSender()
    {
        return $this->sender;
    }

    /**
     * Returns the value of field matches
     *
     * @return integer
     */
    public function getMatches()
    {
        return $this->matches;
    }

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'id' => 'id', 
            'message_key' => 'message_key', 
            'date' => 'date', 
            'viewed' => 'viewed', 
            'receiver' => 'receiver', 
            'sender' => 'sender', 
            'matches' => 'matches'
        );
    }

    public function initialize()
    {
        $this->hasOne('matches','Matches','id');
    }

}
