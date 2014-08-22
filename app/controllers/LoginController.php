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
}
