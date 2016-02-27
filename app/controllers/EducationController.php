<?php

/**
 * Created by PhpStorm.
 * User: denzyl
 * Date: 2/6/16
 * Time: 1:15 PM
 */
class EducationController extends ControllerBase
{
    public function indexAction()
    {
        $id = $this->request->get("id","int",null);
        if(is_null($id) == true) {
            $education = new Education();
        }else{
            $education = Education::findFirst(["id = :id: AND user_id = :user_id: ","bind"=>
            [
                "id"=>$id,
                "user_id"=>$this->user->getId()
            ]]);
        }
        if($this->request->isPost())
        {
            $education->setStudy($this->request->get("study","string"));
            $education->setOrganisation($this->request->get("organisation","string"));
            $education->setStart($this->request->get("start","string"));
            $education->setEnd($this->request->get("end","string"));
            $education->setDescription($this->request->get("description","string"));
            if($education->save())
            {
                $this->user->education = $education;
                $this->user->save();
                $this->flash->success($this->lang->_("your_education_has_been_successfully_saved"));
                $this->response->redirect("employee/education");
            }else{

                $this->view->disable();
                foreach($education->getMessages() as $message)
                {
                    $this->flash->error($message->getMessage());
                }
                if($id == null) {
                    $this->response->redirect("/education");
                }else{
                    $this->response->redirect("/education?id={$id}");
                }
            }

        }

        $this->view->education = $education;
    }
    public function deleteAction()
    {
        $id = $this->request->get("id","int");
        $this->user->education->filter(function($education) use ($id)
        {
            if($education->getId() === $id)
            {
               $education->delete();

            }
        });
        $this->flash->success($this->lang->_("your_education_has_been_successfully_deleted"));
        $this->response->redirect("/employee/education");

    }
}