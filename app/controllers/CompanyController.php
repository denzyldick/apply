<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Company
 *
 * @author denzyl
 */
class CompanyController extends ControllerBase
{
    private $company;

    public function initialize()
    {
        parent::initialize();
        $this->company = Company::findFirst($this->user);
        if ($this->company == false) {
            $this->company = new Company();

        }


    }

    public function indexAction()
    {
        if ($this->company != false) {
            $this->view->name = $this->company->getName();
            $this->view->description = $this->company->getDescription();
            $this->view->longitude = $this->company->getLongitude();
            $this->view->latitude = $this->company->getLatitude();
            $this->view->location = $this->company->getLocation();
            $this->view->zoom = $this->company->getZoom();
            $this->view->company_foto = $this->company->getLogo();
            $this->view->website = $this->company->getWebsite();
            $this->view->work_enviroment = $this->company->getWorkEnviromentType();
        }
    }

    public function saveAction()
    {

        $this->company->name = $this->request->getPost("name", "string");
        $this->company->description = $this->request->getPost("description", "string");
        $this->company->latitude = $this->request->getPost("latitude", "int");
        $this->company->longitude = $this->request->getPost("longitude", "int");
        $this->company->location = $this->request->getPost("location", "string");
        $this->company->zoom = $this->request->getPost("zoom", "int");
        $this->company->website = $this->request->getPost('website', 'string');
        $this->company->setUserId($this->user->getId());
        $this->company->setWorkEnviromentType($this->request->getPost("work_enviroment", "string"));
        if ($this->request->hasFiles()) {
            $this->company->setLogo($this->moveUploadedFile($this->request->getUploadedFiles()));
            $this->view->disable();
        }
        if (!$this->company->validation()) {
            $this->flash->error($this->lang->_((string)$this->company->getMessages()[0]));
        }
        if ($this->company->save()) {
            $this->flash->success($this->lang->_("company_has_been_successfully_saved"));
        }

//        $this->company->save();
//        var_dump($this->company);
        $this->dispatcher->forward(array("controller" => "company", "action" => "index"));

    }

    private function moveUploadedFile($file)
    {
        try {

            $photo = $file[0];
            $photo->name = md5($this->user->id . $this->security->hash(rand()));
            $photo->moveTo('files/' . $photo->name);
            return $photo->name;
        } catch (\Exception $e) {
            $this->di->logger->error("Can't upload company logo.");
        }

    }

}
