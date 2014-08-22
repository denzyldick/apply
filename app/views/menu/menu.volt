<div class="navbar-collapse collapse navbar-inverse-collapse">
            <ul class="nav navbar-nav">
          <?php

            foreach($this->elements->getMenu() as $key => $value)
            {
              echo("<li><a href=".$value.">".$key."</a></li>");
            }

          ?>
            </ul>
    <ul class="nav navbar-nav navbar-right">

      <li class="dropdown">
        <?php $settings =  $this->elements->getSettingsDropDown();

        ?>
       <a href="#" class="dropdown-toggle" data-toggle="dropdown"><?php echo $this->lang->_("settings"); ?><b class="caret"></b></a>
        <ul class="dropdown-menu">
        <?php

          foreach($settings as $key => $value)
          {
            echo("<li><a href=".$value.">".$key."</a></li>");
          }

        ?>
          <li class="divider"></li>
          <li><a href="logout"><?php echo $this->lang->_("logout");?></a></li>
        </ul>
      </li>
    </ul>
  </div>
