<?php

class SettingsController extends ControllerBase
{
    public function indexAction()
    {

        $this->view->firstname = ucfirst($this->user->getFirstname());
        $this->view->lastname = ucfirst($this->user->getLastname());
        $this->view->email = $this->user->getEmail();
        $this->view->type = ucfirst($this->user->getUsertype());
    }

    public function saveAction()
    {
        if ($this->request->isPost()) {

            $this->user->setFirstname($this->request->getPost("firstname", "string"));
            $this->user->setLastname($this->request->getPost("lastname", "string"));
            $this->user->setEmail($this->request->getPost("email", "string"));
            if ($this->user->save()) {
                $this->flash->success($this->lang->_("changes_has_been_saved"));
            } else {
                foreach ($this->user->getMessages() as $message) {
                    $this->flash->error($message);
                }
            }
            $this->dispatcher->forward(array(
                "action" => "index"
            ));

            $this->response->redirect("/settings");

        }
    }

    public function passwordAction()
    {
        if ($this->request->isPost()) {
            $current_password = $this->request->getPost("current_password");
            $new_password = $this->request->getPost("new_password");
            $retype_password = $this->request->getPost("retype_password");
            if ($new_password != $retype_password) {
                $this->flash->error($this->lang->_("password_does_not_match"));
            }

            if ($this->security->checkHash($current_password, $this->user->getPassword())) {
                $this->user->setPassword($new_password);
                $this->user->save();
                $this->flash->success($this->lang->_("your_password_has_been_saved"));
            } else {
                $this->flash->error($this->lang->_("this_is_not_your_current_password"));
            }
        }
    }

    public function deactivateAction()
    {
        if ($this->request->isPost()) {
            $password = $this->request->getPost("password", "string");
            if ($this->security->checkHash($password, $this->user->getPassword())) {
                $this->user->delete();
                $this->flash->success($this->lang->_("your_account_has_been_successfully_deactivated"));
                $this->session->remove("user-id");
                $this->session->remove("user-type");
                $this->cookies->get("email")->delete();
                $this->cookies->get('password')->delete();
                $this->cookies->get('remember')->delete();
                $this->response->redirect("/");
            }else{
                $this->flash->error($this->lang->_("not_your_current_password"));
            }
        }
    }

}
