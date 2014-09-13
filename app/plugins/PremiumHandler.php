<?php
use Phalcon\Events\Event,
        Phalcon\Mvc\User\Plugin,
        Phalcon\Mvc\Dispatcher,
        Phalcon\Acl;

class PremiumHandler extends Plugin
{

    private $di;
    private $user;
    private $money;
    private $vacancy_amount;

    public function __construct($di)
    {
      $this->di =  $di;
    }
    public function upgrade()
    {
        $now = new DateTime();

        $premium =  new Premium();
        $premium->setUserId($this->user->getId());
        $premium->setBuyDate($now->format('d-m-Y H:i:s'));
        $bundle = new Bundle();
        $bundle->setAmount($this->vacancy_amount);
        $bundle->setPrice($this->money->getAmount());
        $bundle->save();
        $premium->setBundleIdbundle($bundle->getIdbundle());
        $premium->save();


    }


    public function setVacancyAmount($vacancy_amount)
    {
      $this->vacancy_amount = $vacancy_amount;
    }
    public function setMoney(Money $money)
    {
      $this->money = $money;
    }
    public function setUser(User $user)
    {
      if($user->getUserType() == 'employer')
      {
        $this->user =  $user;
      }else
      {
        throw new Exception('This is user is not an employer.');
      }
    }

}
