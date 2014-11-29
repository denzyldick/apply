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
        $this->company = Company::findFirst(array("user_id = {$this->session->get('user-id')}"));
    }

    public function indexAction()
    {
        $this->view->name = $this->company->getName();
        $this->view->description = $this->company->getDescription();
        $this->view->longitude = $this->company->getLongitude();
        $this->view->latitude = $this->company->getLatitude();
        $this->view->location = $this->company->getLocation();
        $this->view->zoom = $this->company->getZoom();
        $this->view->company_foto = $this->company->getLogo();
        $this->view->website = $this->company->getWebsite();
    }

    public function saveAction()
    {
        if ($this->request->isPost()) {
            $this->company->name = $this->request->getPost("name", "string");
            $this->company->description = $this->request->getPost("description", "string");
            $this->company->latitude = $this->request->getPost("latitude", "int");
            $this->company->longitude = $this->request->getPost("longitude", "int");
            $this->company->location = $this->request->getPost("location", "string");
            $this->company->zoom = $this->request->getPost("zoom", "int");
            $this->company->website = $this->request->getPost('website', 'string');

            if ($this->request->hasFiles()) {
                $file = $this->request->getUploadedFiles();

                $photo = $file[0];
                $photo->name = md5($this->user->id . '' . $this->security->hash(rand()));
                $this->company->logo = $photo->name;

                $photo->moveTo('files/' . $photo->name);
                $this->view->company_foto = $photo->name;
            }
            if ($this->company->save()) {
                $this->flash->success("Saved succesfully");

                return $this->dispatcher->forward(array("action" => "index"));
            }
        } else {
            $this->dispatcher->forward(array('controller' => 'company', 'action' => 'index'));
        }
    }

}
