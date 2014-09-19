<?php

class PremiumController extends ControllerBase
{

    public function indexAction()
    {
      $this->view->user = $this->user;
    }

    public function chargeAction()
    {
      if($this->request->isPost())
      {
          Stripe::setApiKey($this->config->stripe->secret_key);
          $token =  $this->request->getPost('stripeToken');
          if(empty($this->user->getIdStripe()))
          {
          $customer = Stripe_Customer::create(array('email'=>$this->user->getEmail(),'card'=>$token ));
          $this->user->setIdStripe($customer->id)->save();
        }else{
          $customer = Stripe_Customer::retrieve($this->user->getIdStripe());
        }

          try{
          $charge = Stripe_Charge::create(array('customer'=>$customer->id,'amount'=>999,'currency'=>'usd'));

          }catch(Stripe_CardError $e)
          {
            $this->flash->notice($this->lang->_('transaction_has_been_declined'));
            $this->dispatcher->forward(array('controller'=>'premium','action'=>'index'));
        }
          $this->premium->setVacancyAmount(3);
          $this->premium->setMoney(new Money(3,'usd'));
          $this->premium->setUser($this->user);
          $this->premium->upgrade();
          $this->flash->success($this->lang->_('transaction_completed'));
          $this->dispatcher->forward(array('controller'=>'vacancy','action'=>'index'));
          $mail_html = $this->view->render('/mailer/receipt',
              array(
                'welcome_message'=>$this->lang->_('receipt_introduction'),
                'body'=>$this->lang->_('receipt_body'),
                'footer'=>$this->lang->_('footer')
                )
          );
          $this->mailer->setBody($mail_html);
          $this->mailer->setSubject($this->lang->_('receipt_subject'));
          $this->mailer->setType('text/html');
          $this->mailer->setRecipments( array($this->user->getEmail()=>"{$this->user->getFirstname()}{$this->user->getLastname()}"));
          $this->mailer->send();

      }

    }

}
