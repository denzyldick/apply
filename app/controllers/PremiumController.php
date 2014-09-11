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
          $token =  $this->request->getPost('stripeToken');
          $costumer = Stripe_Customer::create(array('email'=>$this->user->getEmail(),'card'=>$token ));
          $charge = Stripe_Charge::create(array('customer',$customer->id,'amount'=>999,'currence'=>'usd'));
          $this->flash->success($this->lang->_('transaction_completed'));
      }

    }

}
