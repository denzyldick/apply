<?php

class PremiumController extends ControllerBase
{

    public function indexAction()
    {
        $this->view->user = $this->user;
    }

    public function chargeAction()
    {
        if ($this->request->isPost()) {

            Stripe::setApiKey($this->config->stripe->secret_key);
            $token = $this->request->getPost('stripeToken');
            if (empty($this->user->getIdStripe())) {
                $customer = Stripe_Customer::create(array('email' => $this->user->getEmail(), 'card' => $token));
                $this->user->setIdStripe($customer->id)->save();
            } else {
                $customer = Stripe_Customer::retrieve($this->user->getIdStripe());
            }

            try {
                $charge = Stripe_Charge::create(array('customer' => $customer->id, 'amount' => 9999, 'currency' => 'usd'));

            } catch (Stripe_CardError $e) {
                $this->flash->notice($this->lang->_('transaction_has_been_declined'));
                $this->dispatcher->forward(array('controller' => 'premium', 'action' => 'index'));
            }
            $location = "/";
            switch ($this->request->getPost('type')) {
                case 'emailer':
                    $this->user->setEmailer(true);
                    break;
                case 'vacancy':
                    $this->user->setVacancyCount($this->user->getVacancyCount() + 1);
                    $this->flash->success($this->lang->_("you_can_now_add_a_vacancy"));
                    $location = "/vacancy/new";
                    break;
                case 'location_diameter':
                    $this->user->setLocationDiameter($this->getLocationDiamater() - 10);
                    break;
                case 'cv_database':
                    $this->user->setSearchEnable(1);
                    $this->flash->success($this->lang->_("you_have_now_access_to_our_cv_database"));
                    $location = "/";
                    break;
            }
            if($this->user->save())
            {
                $this->flash->success($this->lang->_("thank_you_for_your_purchase"));
                $this->response->redirect($location);
            }
//            $this->dispatcher->forward(array('controller' => 'vacancy', 'action' => 'index'));
//            $mail_html = $this->view->render('receipt',
//                array(
//                    'welcome_message' => $this->lang->_('receipt_introduction'),
//                    'body' => $this->lang->_('receipt_body'),
//                    'footer' => $this->lang->_('footer')
//                )
//            );
//            $this->view->pick('mailer/receipt');
//            $mail_html = $this->view->getContent();
//            $this->view->welcome_message = $this->lang->_("recepit_introduction");
//            $this->view->body = $this->lang->_("receipt_body");
//            $this->view->footer = $this->lang->_("footer");
//            $this->mailer->setBody($mail_html);
//            $this->mailer->setSubject($this->lang->_('receipt_subject'));
//            $this->mailer->setType('text/html');
//            $this->mailer->setRecipments(array($this->user->getEmail() => "{$this->user->getFirstname()}{$this->user->getLastname()}"));
//            $this->mailer->send();

        }

    }

}
