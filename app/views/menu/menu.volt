<div class="collapse navbar-collapse navbar-main-collapse ">
    <ul class="nav navbar-nav navbar-left ">
        <li class='dropdown'><a href="#" class="dropdown-toggle" data-toggle="dropdown"><span
                        class="glyphicon glyphicon-bell"></span>

                <div class='label label-arrow label-arrow-left'
                     style='background-color: #FE0001'><?php echo count($user->Notification);?>
                </div>
            </a>

            <ul class="dropdown-menu" id="notification-dropdown">

                {% for notification in user.Notification %}
                    <li>
                        <a href=#>{{ lang._(notification.getMessageKey())| format(user.getFirstname(),notification) }}</a>
                    </li>
                {% endfor %}

            </ul>
        </li>


        <?php

            foreach($this->elements->getMenu() as $key => $value)
        {
        echo("
        <li><a href=".$value.">".$key."</a></li>
        ");
        }

        ?>
    </ul>
    <ul class="nav navbar-nav navbar-right">

        <li class="dropdown">
            <?php $settings =  $this->elements->getSettingsDropDown();

            ?>
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><?php echo $this->lang->_("settings"); ?><b
                        class="caret"></b></a>
            <ul class="dropdown-menu">
                <?php

          foreach($settings as $key => $value)
                {
                echo("
                <li><a href=".$value.">".$key."</a></li>
                ");
                }

                ?>
                <li class="divider"></li>
                <li><a href="/logout"><?php echo $this->lang->_("logout");?></a></li>
            </ul>
        </li>
    </ul>
</div>
