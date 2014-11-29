<?php

use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;

class BundleController extends ControllerBase
{

    /**
     * Index action
     */
    public function indexAction()
    {
        $this->persistent->parameters = null;
    }

    /**
     * Searches for bundle
     */
    public function searchAction()
    {

        $numberPage = 1;
        if ($this->request->isPost()) {
            $query = Criteria::fromInput($this->di, "Bundle", $_POST);
            $this->persistent->parameters = $query->getParams();
        } else {
            $numberPage = $this->request->getQuery("page", "int");
        }

        $parameters = $this->persistent->parameters;
        if (!is_array($parameters)) {
            $parameters = array();
        }
        $parameters["order"] = "idbundle";

        $bundle = Bundle::find($parameters);
        if (count($bundle) == 0) {
            $this->flash->notice("The search did not find any bundle");

            return $this->dispatcher->forward(array(
                "controller" => "bundle",
                "action" => "index"
            ));
        }

        $paginator = new Paginator(array(
            "data" => $bundle,
            "limit" => 10,
            "page" => $numberPage
        ));

        $this->view->page = $paginator->getPaginate();
    }

    /**
     * Displayes the creation form
     */
    public function newAction()
    {

    }

    /**
     * Edits a bundle
     *
     * @param string $idbundle
     */
    public function editAction($idbundle)
    {

        if (!$this->request->isPost()) {

            $bundle = Bundle::findFirstByidbundle($idbundle);
            if (!$bundle) {
                $this->flash->error("bundle was not found");

                return $this->dispatcher->forward(array(
                    "controller" => "bundle",
                    "action" => "index"
                ));
            }

            $this->view->idbundle = $bundle->idbundle;

            $this->tag->setDefault("idbundle", $bundle->getIdbundle());
            $this->tag->setDefault("amount", $bundle->getAmount());
            $this->tag->setDefault("price", $bundle->getPrice());

        }
    }

    /**
     * Creates a new bundle
     */
    public function createAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "bundle",
                "action" => "index"
            ));
        }

        $bundle = new Bundle();

        $bundle->setAmount($this->request->getPost("amount"));
        $bundle->setPrice($this->request->getPost("price"));

        if (!$bundle->save()) {
            foreach ($bundle->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "bundle",
                "action" => "new"
            ));
        }

        $this->flash->success("bundle was created successfully");

        return $this->dispatcher->forward(array(
            "controller" => "bundle",
            "action" => "index"
        ));

    }

    /**
     * Saves a bundle edited
     *
     */
    public function saveAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "bundle",
                "action" => "index"
            ));
        }

        $idbundle = $this->request->getPost("idbundle");

        $bundle = Bundle::findFirstByidbundle($idbundle);
        if (!$bundle) {
            $this->flash->error("bundle does not exist " . $idbundle);

            return $this->dispatcher->forward(array(
                "controller" => "bundle",
                "action" => "index"
            ));
        }

        $bundle->setAmount($this->request->getPost("amount"));
        $bundle->setPrice($this->request->getPost("price"));

        if (!$bundle->save()) {

            foreach ($bundle->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "bundle",
                "action" => "edit",
                "params" => array($bundle->idbundle)
            ));
        }

        $this->flash->success("bundle was updated successfully");

        return $this->dispatcher->forward(array(
            "controller" => "bundle",
            "action" => "index"
        ));

    }

    /**
     * Deletes a bundle
     *
     * @param string $idbundle
     */
    public function deleteAction($idbundle)
    {

        $bundle = Bundle::findFirstByidbundle($idbundle);
        if (!$bundle) {
            $this->flash->error("bundle was not found");

            return $this->dispatcher->forward(array(
                "controller" => "bundle",
                "action" => "index"
            ));
        }

        if (!$bundle->delete()) {

            foreach ($bundle->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "bundle",
                "action" => "search"
            ));
        }

        $this->flash->success("bundle was deleted successfully");

        return $this->dispatcher->forward(array(
            "controller" => "bundle",
            "action" => "index"
        ));
    }

}
