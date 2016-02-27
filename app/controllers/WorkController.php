<?php

class WorkController extends ControllerBase
{

    public function indexAction()
    {
        if ($this->request->isPost()) {
            if ($this->request->get("update_id", "int", null) != null) {
                $work = WorkExperience::findFirst(["user_id = :user_id: AND id = :id:", "bind" => [
                    "user_id" => $this->user->getId(), "id" => $this->request->get("update_id", "int")
                ]]);
            } else {
                $work = new WorkExperience();
            }

            $work->setDescription($this->request->get("description", "string"));
            $work->setJobTitle($this->request->get("job_title", "string"));
            $work->setOrganisation($this->request->get("organisation", "string"));
            $work->setStart($this->request->get("start"));
            $work->setEnd($this->request->get("end"));
            $work->setUser($this->user);
            if ($work->save() == false) {
                $this->view->disable();
                foreach ($work->getMessages() as $message) {
                    $this->flash->error($this->lang->_((string)$message));
                }
                $this->view->work = $work;
            } else {
                $this->flash->success($this->lang->_("your_work_has_been_saved"));
                $this->response->redirect("/employee/work");
            }
        } else {
            $id = $this->request->get("id", "int", null);
            if (is_null($id) == false) {
                $work = WorkExperience::findFirst(["user_id = :user_id: AND id = :id:", "bind" => [
                    "user_id" => $this->user->getId(), "id" => $id
                ]]);
                if ($work) {
                    $this->view->work = $work;
                } else {
                    $this->flash->error("something_went_wrong");
                    $this->response->redirect("/employee/work");
                }
            } else {
                $this->view->work = new WorkExperience();
            }
        }
    }

    public function deleteAction()
    {
        $id = $this->request->get("id", "int", null);
        $work = WorkExperience::findFirst(["id = :id: AND user_id = :user_id: ", "bind" => ["id" => $id, "user_id" => $this->user->getId()]]);
        if ($work->delete()) {
            $this->flash->success($this->lang->_("work_has_been_successfully_removed"));

        } else {
            $this->flash->error($this->lang . _("something_went_wrong"));
        }
        $this->response->redirect("/employee/work");
    }
}