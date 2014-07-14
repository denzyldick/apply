<?php
class LoginController extends ControllerBase {
    public function indexAction() {
    }
    public function loginAction() {
        if ($this->request->isPost()) {
            $email = $this->request->getPost("email");
            $password = $this->request->getPost("password");
            $remember = $this->request->getPost("remember");
            if ($this->check($email, $password, $remember)) {
                $this->dispatcher->forward(array("controller" => "matches", "action" => "index"));
            } else {
                echo json_encode(array("status" => "false", "message" => "Wrong email or password"));
                $this->flash->error("Wrong password or email");
                $this->dispatcher->forward(array("action" => "index"));
            }
        }
    }
}
