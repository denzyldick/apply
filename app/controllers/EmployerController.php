<?php
class EmployerController extends ControllerBase
{
    public function indexAction()
    {
    }
    public function settingsAction()
    {
        $this->response->redirect("/settings");
    }
    public function skillsAction()
    {
        if ($this->request->isPost()) {
            $skills = $this->request->getPost("skills");
            $work_enviroment = $this->request->getPost("work_enviroment");
            $longtitude = $this->request->getPost("longtitude");
            $latitidue = $this->request->getPost("latitude");
            $character = $this->request->getPost("character");
            $travel_time = $this->request->getPost("travel_time");
        }
    }
}
