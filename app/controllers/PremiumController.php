<?php

class PremiumController extends ControllerBase
{

    public function indexAction()
    {

    }

    public function chargeAction()
    {
      if($this->request->isPost())
      {
          Stripe::setApiKey('sk_test_ToJLlE6nJzqaVDB21cXAXSco');
          $token =  $this->request->getPost('stripeToken');
          $customer = Stripe_Customer::create(array('email'=>$this->user->getEmail(),'card'=>$token ));
          try{
          $charge = Stripe_Charge::create(array('customer'=>$customer->id,'amount'=>999,'currency'=>'usd'));

          }catch(Stripe_CardError $e)
          {
            $this->flash->notice('This card has been declined please try again with a valid card.');
            $this->dispatcher->forward(array('controller'=>'premium','action'=>'index'));
        }
          $this->premium->setVacancyAmount(3);
          $this->premium->setMoney(new Money(3,'usd'));
          $this->premium->setUser($this->user);

          $this->premium->upgrade();

          $this->flash->success($this->lang->_('transaction_completed'));
          $this->dispatcher->forward(array('controller'=>'vacancy','action'=>'index'));

      }

    }

}
