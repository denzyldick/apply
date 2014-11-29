<?php

class Premium extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    protected $idpremium;

    /**
     *
     * @var integer
     */
    protected $used_amount;

    /**
     *
     * @var integer
     */
    protected $user_id;

    /**
     *
     * @var integer
     */
    protected $bundle_idbundle;

    /**
     *
     * @var string
     */
    protected $buy_date;

    /**
     * Returns the value of field idpremium
     *
     * @return integer
     */
    public function getIdpremium()
    {
        return $this->idpremium;
    }

    /**
     * Method to set the value of field idpremium
     *
     * @param  integer $idpremium
     * @return $this
     */
    public function setIdpremium($idpremium)
    {
        $this->idpremium = $idpremium;

        return $this;
    }

    /**
     * Returns the value of field used_amount
     *
     * @return integer
     */
    public function getUsedAmount()
    {
        return $this->used_amount;
    }

    /**
     * Method to set the value of field used_amount
     *
     * @param  integer $used_amount
     * @return $this
     */
    public function setUsedAmount($used_amount)
    {
        $this->used_amount = $used_amount;

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

    /**
     * Returns the value of field bundle_idbundle
     *
     * @return integer
     */
    public function getBundleIdbundle()
    {
        return $this->bundle_idbundle;
    }

    /**
     * Method to set the value of field bundle_idbundle
     *
     * @param  integer $bundle_idbundle
     * @return $this
     */
    public function setBundleIdbundle($bundle_idbundle)
    {
        $this->bundle_idbundle = $bundle_idbundle;

        return $this;
    }

    /**
     * Returns the value of field buy_date
     *
     * @return string
     */
    public function getBuyDate()
    {
        return $this->buy_date;
    }

    /**
     * Method to set the value of field buy_date
     *
     * @param  string $buy_date
     * @return $this
     */
    public function setBuyDate($buy_date)
    {
        $this->buy_date = $buy_date;

        return $this;
    }

    public function columnMap()
    {
        return array(
            'idpremium' => 'idpremium',
            'used_amount' => 'used_amount',
            'user_id' => 'user_id',
            'bundle_idbundle' => 'bundle_idbundle',
            'buy_date' => 'buy_date'
        );
    }

    public function intialize()
    {
        $this->belongsTo("user_id", "User", "id");
        $this->hasOne("bundle_idbundle", "Bundle", "idbundle");
    }

}
