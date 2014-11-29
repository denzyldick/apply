<?php

class LoginController extends ControllerBase
{
    public function indexAction()
    {
    }

    public function loginAction()
    {
        if ($this->request->isPost()) {
            $email = $this->request->getPost("email");
            $password = $this->request->getPost("password");
            $remember = $this->request->getPost("remember");
            if ($this->check($email, $password, $remember)) {
                $this->dispatcher->forward(array("controller" => "index"));
            } else {
                $this->flash->error($this->lang->_('wrong_credentials'));
                $this->dispatcher->forward(array("action" => "index"));
            }
        }
    }

    public function activateAction()
    {

    }

    public function forgotpasswordAction()
    {

        if ($this->request->isPost()) {

            $user = User::findFirstByEmail($this->request->getPost('email'));
            if (count($user) == 0) {
                $this->flash->notice($this->lang->_('U email adres bestaat niet in onze database'));

            } else {
                $this->flash->notice($this->lang->_('U email adres bestaat niet in onze database'));
            }
            $verification_code = $this->crypt->encrypt($user->getEmail());

            $this->mailer->setSubject('');
            $this->mailer->setRecipments(array($this->request->getPost('email')));
            $this->mailer->setSender($this->config->smpt->email);
            $this->mailer->send();
            $this->dispatcher->forward(array('controller' => 'login'));

        }
    }
}
