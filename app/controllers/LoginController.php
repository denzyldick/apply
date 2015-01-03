<?php

class LoginController extends ControllerBase
{


    public function indexAction()
    {

        if ($this->request->isPost()) {
            $email = $this->request->getPost("email");
            $password = $this->request->getPost("password");
            $remember = $this->request->getPost("remember");


            if ($this->check($email, $password, $remember)) {

                if ($this->isFirstTime($this->user)) {
                    $this->firstTimeRedirect();
                }
                $this->user->setLoginDate($this->date);

                $this->dispatcher->forward(array("controller" => "suggestion"));
            } else {
                $this->flash->error($this->lang->_('wrong_credentials'));

            }
        }
    }

    private function firstTimeRedirect()
    {
        if ($this->user->getUserType() == "employer") {
            $this->dispatcher->forward(array("controller" => "company"));

        } else {
            $this->dispatcher->forward(array("controller" => "employee", "action" => "options"));
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
                $this->flash->notice($this->lang->_("email_doesn't_exsits"));

            } else {
                $this->flash->success($this->lang->_('email_with_password_has_been_send'));
            }
            $verification = new Verification();
            $verification->setUserId($user->getId());
            $verification->setDate($this->date);
            $verification->setType('forgotpassword');
            $verification->save();

            $key = $verification->getKey();

            $this->mailer->setSubject($this->lang->_("forgot_password_subject"));
            $this->mailer->setRecipments(array($this->request->getPost('email')));
            $this->mailer->setSender($this->config->smpt->email);
            $this->mailer->send();
            $this->dispatcher->forward(array('controller' => 'login'));

        }
    }
}
