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
                $this->dispatcher->forward(array("controller" => "matches", "action" => "index"));
            } else {
                $this->flash->notice($this->lang->_('wrong_credentials'));
                $this->dispatcher->forward(array("action" => "index"));
            }
        }
    }


    public function forgotpasswordAction()
    {
      if($this->request->isPost())
      {
        $user =   User::findFirst(array("email = {$this->request->getPost('email')}"));
        if(count($user) == 0)
        {
          $this->flash->error($this->lang->_('this_doesnt_exsist'));
          $this->dispatcher->forward(array('controller'=>'login'));
          return 0;
        }
        $verification_code = $this->crypt->encrypt($user->getEmail());

        $this->mailer->setSubject('');
        $this->mailer->setRecipments(array($this->request->getPost('email')));
        $this->mailer->setSender($this->config->smpt->email);
        $this->mailer->send();
      }
    }
}
