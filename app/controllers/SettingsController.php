<?php

class SettingsController extends ControllerBase
{
    public function indexAction()
    {

        $this->view->firstname  =   ucfirst($this->user->getFirstname());
        $this->view->lastname   =   ucfirst($this->user->getLastname());
        $this->view->email      =   $this->user->getEmail();
        $this->view->type       = ucfirst($this->user->getUsertype());
    }

    public function saveAction()
    {
      if ($this->request->isPost()) {

        $this->user->firstname = $this->request->getPost("firstname");
        $this->user->lastname = $this->request->getPost("lastname");
        $this->user->email = $this->request->getPost("email");
    if ($this->user->save()) {
      $this->flash->success($this->lang->_("changes_has_been_saved"));
    } else {
      $this->flash->error($this->lang->_("something_went_wrong"));
    }
           $this->dispatcher->forward(array(
            "action" => "index"
        ));

    }
    }

    public function passwordAction()
    {
      if ($this->request->isPost()) {
        $current_password = $this->request->getPost("current_password");
        $new_password      =  $this->request->getPost("new_password");
        $retype_password  =  $this->request->getPost("retype_password");
        if ($new_password != $retype_password) {
          $this->flash->notice($this->lang->_("password_does_not_match"));

          return false;
        }

        if ($this->security->checkHash($current_password,$this->user->getPassword())) {
          $this->user->setPassword($new_password);
          $this->user->save();
          $this->flash->success($this->lang->_("your_password_has_been_saved"));
          $this->dispatcher->forward(array("controller"=>"settings"));

        }
      }
    }

}
