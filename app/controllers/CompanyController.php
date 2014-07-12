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
class CompanyController extends ControllerBase{

    private $company;
    public function initialize()
    {
      $this->company =  Company::findFirstByUser_id($this->session->Get("user-id"));
    }
    public function indexAction()
    {
      $this->view->name = $this->company->name;
      $this->view->description = $this->company->description;
      $this->view->longitude  =  $this->company->longitude;
      $this->view->latitude  =  $this->company->latitude;
      $this->view->location = $this->company->location;
      $this->view->zoom   = $this->company->zoom;

    }
    public function saveAction()
    {
      if($this->request->isPost())
      {

        $this->company->name = $this->request->getPost("name","string");
        $this->company->description = $this->request->getPost("description","string");
        $this->company->latitude = $this->request->getPost("latitude","int");
        $this->company->longitude = $this->request->getPost("longitude","int");
        $this->company->location = $this->request->getPost("location","int");
        $this->company->zoom = $this->request->getPost("zoom","int");
        if($this->company->save())
        {
          $this->flash->success("Saved succesfully");
          return $this->dispatcher->forward(array("action" => "index"));
        }

      }
    }

}
