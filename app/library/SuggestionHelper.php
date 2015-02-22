<?php

use Phalcon\Mvc\User\Component as Components;

class SuggestionHelper extends Components
{
    private $match;
    private $DONUTS_CANVAS_WIDTH = '200';
    private $DONUTS_CANVAS_HEIGHT = '200';
    private $GLYPHICON_ACCEPT = 'glyphicon glyphicon-ok';
    private $GLYPHICON_DECLINE = 'glyphicon glyphicon-remove';
    private $GLYPHICON_PENDING = 'glyphicon glyphicon-time';
    private $GLYPHICON_CONTACT = 'glyphicon glyphicon-phone';
    private $ACCEPT_CLASS = 'btn btn-sm btn-primary';
    private $PENDING_CLASS = 'btn btn-sm btn-primary disabled';
    private $DECLINE_CLASS = 'btn btn-sm btn-warning';
    private $CONTACT_CLASS = 'btn btn-sm btn-primary';

    public function showMatchControlBox(Matches $match, User $user)
    {
        $this->match = $match;

        if ($user->getUsertype() == 'employer') {
            return <<<HTML
            <a href="/suggestion/profile/{$this->match->getUserId()}/{$this->match->getId()}">
             <div class="col-xs-6 col-sm-3 placeholder text-center  well" style="margin: 10px;width: 259px;">
             <!--height="{self::DONUTS_CANVAS_HEIGHT}" width="{self::DONUTS_CANVAS_WIDTH}"-->
                    <canvas id="donuts{$this->match->getId()}"  height="200" width="200"></canvas>
                    {$this->renderUser()}

            </div>
            </a>
             {$this->javascript()}
HTML;
        } else if ($user->getUsertype() == 'employee') {
            return <<<HTML
            <a href="/suggestion/vacancy/ {$this->match->Vacancy->getId()}/{$this->match->getId()}">
             <div class="col-xs-6 col-sm-3 placeholder text-center  well" style="margin: 10px;width: 259px;">
             <!--height="{self::DONUTS_CANVAS_HEIGHT}" width="{self::DONUTS_CANVAS_WIDTH}"-->
                    <canvas id="donuts{$this->match->getId()}"  height="200" width="200"></canvas>
                    {$this->renderVacancy()}

            </div>
            </a>
            {$this->javascript()}
HTML;
        }
    }

    private function renderVacancy()
    {
        return <<<SHOW
        <span class="percent-indicator">{$this->match->getPercent()}%</span>
        <h5 class="text-uppercase">
                {$this->match->vacancy->getFunction()}
        </h5>
        <small>{$this->match->Vacancy->Company->name}</small><p>
        {$this->controlButtonsForEmployee()}

SHOW;
    }

    private function renderUser()
    {
       return <<<HTML
        <span class="percent-indicator">{$this->match->getPercent()}%</span>
        <h5 class="text-uppercase">
                {$this->match->User->getFirstname()}
        </h5>
        {$this->controlButtonsForEmployer()}
HTML;
    }


    private function controlButtonsForEmployer()
    {
        if ($this->match->getEmployerAccepted() == 'yes' && $this->match->getEmployeeAccepted() == 'yes') {
            return <<<HTML
<a href="/contact/{$this->match->getUserId()}" class="{$this->CONTACT_CLASS}"><span class="{$this->GLYPHICON_CONTACT}"></span> {$this->lang->_("contact")}</a>
HTML;

        } else if ($this->match->getEmployerAccepted() == 'yes' && $this->match->getEmployeeAccepted() == 'no') {
            return <<<HTML
<a class="{$this->PENDING_CLASS}"><span class="{$this->GLYPHICON_PENDING}"></span> {$this->lang->_("pending")}</a>
<a href="/suggestion/decline/{$this->match->getId()}" class="{$this->DECLINE_CLASS}"><span class="{$this->GLYPHICON_DECLINE}"></span> {$this->lang->_("decline")}</a>
HTML;
        } else if ($this->match->getEmployerAccepted() == 'no' && $this->match->getEmployeeAccepted() == 'no' || $this->match->getEmployerAccepted() == "no" && $this->match->getEmployeeAccepted() == 'yes') {
            return <<<HTML
<a href="/suggestion/accept/{$this->match->getId()}" class="{$this->ACCEPT_CLASS}"><span class="{$this->GLYPHICON_ACCEPT}"></span> {$this->lang->_("accept")}</a>
<a href="/suggestion/decline/{$this->match->getId()}" class="{$this->DECLINE_CLASS}"><span class="{$this->GLYPHICON_DECLINE}"></span> {$this->lang->_("decline")}</a>
HTML;

        }

    }

    private function controlButtonsForEmployee()
    {
        if ($this->match->getEmployerAccepted() == 'yes' && $this->match->getEmployeeAccepted() == 'yes') {
            return <<<HTML
<a href="/contact/{$this->match->getUserId()}" class="{$this->CONTACT_CLASS}"><span class="{$this->GLYPHICON_CONTACT}"></span> {$this->lang->_("contact")}</a>
HTML;

        } else if ($this->match->getEmployerAccepted() == 'no' && $this->match->getEmployeeAccepted() == 'yes') {
            return <<<HTML
<a class="{$this->PENDING_CLASS}"><span class="{$this->GLYPHICON_PENDING}"></span> {$this->lang->_("pending")}</a>
<a href="/suggestion/decline/{$this->match->getId()}" class="{$this->DECLINE_CLASS}"><span class="{$this->GLYPHICON_DECLINE}"></span> {$this->lang->_("decline")}</a>
HTML;
        } else if ($this->match->getEmployerAccepted() == 'no' && $this->match->getEmployeeAccepted() == 'no' || $this->match->getEmployerAccepted() == 'yes' && $this->match->getEmployeeAccepted() == 'no') {
            return <<<HTML
<a href="/suggestion/accept/{$this->match->getId()}" class="{$this->ACCEPT_CLASS}"><span class="{$this->GLYPHICON_ACCEPT}"></span> {$this->lang->_("accept")}</a>
<a href="/suggestion/decline/{$this->match->getId()}" class="{$this->DECLINE_CLASS}"><span class="{$this->GLYPHICON_DECLINE}"></span> {$this->lang->_("decline")}</a>
HTML;
        }
    }

    private function javascript()
    {
        return <<<JAVASCRIPT
  <script>
            var pieData = [
                {
                    value: {$this->match->getPercent()},
                    color: "rgb(49, 151, 199)"
                },
                {
                    value: 100 -{$this->match->getPercent()},
                    color: "#fff"
                }
            ];

            var ctx = document.getElementById("donuts{$this->match->getId()}").getContext("2d");
            ctx.fillText({$this->match->getPercent()} +"%", null, null);


            var myPie = new Chart(ctx).Doughnut(pieData, {percentageInnerCutout: 60});
</script>
JAVASCRIPT;

    }


}


