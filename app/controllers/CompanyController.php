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
    /** @var Company $company */
    private $company;
    /** @var Location $location ; * */
    private $location;

    public function initialize()
    {
        parent::initialize();
        $this->company = $this->user->company;
        if ($this->company == false) {
            $this->company = new Company();
            $this->location = new Location();
        } else {
            $this->location = Location::findFirst($this->company->getLocationId());
        }
    }

    public function indexAction()
    {
        if ($this->company != false) {
            $this->view->name = $this->company->getName();
            $this->view->description = $this->company->getDescription();
            $this->view->longitude = $this->location->getLongitude();
            $this->view->latitude = $this->location->getLatitude();
            $this->view->location = $this->location->getLocation();
            $this->view->zoom = $this->location->getZoom();
            $this->view->company_foto = $this->company->getLogo();
            $this->view->website = $this->company->getWebsite();
            $this->view->work_enviroment = $this->company->getWorkEnviromentType();
            $this->view->description  = $this->company->getDescription();
            $this->view->twitter = $this->company->getTwitter();
            $this->view->facebook = $this->company->getFacebook();
        }
    }

    public function saveAction()
    {
        $this->company->setName($this->request->getPost("name", "string"));
        $this->company->setDescription($this->request->getPost("description", "string"));
        $this->company->setWebsite($this->request->getPost("website", "string"));
        $this->location->setLatitude($this->request->getPost("latitude", "int"));
        $this->location->setLongitude($this->request->getPost("longitude", "int"));
        $this->location->setLocation($this->request->getPost('location', 'string'));
        $this->location->setZoom($this->request->getPost("zoom", "int"));
        $this->location->save();
        $this->company->setLocationId($this->location->getId());
        $this->company->setUserId($this->user->getId());
        $this->company->setWorkEnviromentType($this->request->getPost("work_enviroment", "string"));
        $this->company->setTwitter($this->request->getPost("twitter","string"));
        $this->company->setFacebook($this->request->getPost("facebook","string"));
        $this->company->setDescription($this->request->getPost("description","string"));
        $this->company->setLogo($this->request->getPost("file_name","string"));
        if (!$this->company->validation()) {
            $this->flash->error($this->lang->_((string)$this->company->getMessages()[0]));
        }
        if ($this->company->save()) {
            $this->flash->success($this->lang->_("company_has_been_successfully_saved"));
        }
        $this->response->redirect("/company");
    }

    private function moveUploadedFile($file)
    {
        try {

            $photo = $file[0];
            $photo->name = md5($this->user->getId() . $this->security->hash(rand()));
            $photo->moveTo('files/' . $photo->name);
            return $photo->name;
        } catch (\Exception $e) {
            echo $e->getMessage();
            exit();
        }

    }

}
