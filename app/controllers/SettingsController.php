<?php

class SettingsController extends ControllerBase{



    public function indexAction()
    {
        $user   =   User::findFirstById($this->session->get("user-id"));

        $this->view->firstname  =   ucfirst($user->firstname);
        $this->view->lastname   =   ucfirst($user->lastname);
        $this->view->email      =   $user->email;
        $this->view->type       = ucfirst($user->usertype);
    }

    public function saveAction()
    {
      if($this->request->isPost())
      {
        $user = User::findFirstById($this->session->get("user-id"));
        $user->firstname = $this->request->getPost("firstname");
        $user->lastname = $this->request->getPost("lastname");
        $user->email = $this->request->getPost("email");
    if($user->save())
    {
      $this->flash->success("Your settings has been saved.");
    }else
    {
      $this->flash->error("Something went wrong please try again.");
    }
           $this->dispatcher->forward(array(
            "action" => "index"
        ));

    }
    }

}
