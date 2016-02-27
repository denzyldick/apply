<div class="collapse navbar-collapse navbar-main-collapse ">
    {#<ul id="nav navbar-nav navbar-left">#}
        {#<li>#}
            {#<input type="text" class="form-control" style="width:300px;">#}
            {#<input type="text" class="form-control input-sm col-md-2" placeholder="&nbsp;{{ lang._("search ") }}"/>#}
                    {#<span class="input-group-btn">#}
                        {#<button class="btn btn-fab-default btn-sm" type="button">#}
                            {#<i class="glyphicon glyphicon-search"></i>#}
                        {#</button>#}
                    {#</span>#}
        {#</li>#}
    {#</ul>#}
    <ul class="nav navbar-nav navbar-right">

        <li class="dropdown">
            <?php $settings =  $this->elements->getSettingsDropDown();

            ?>
            <a href="#" class="dropdown-toggle bootstro" data-toggle="dropdown" data-toggle="dropdown"
               data-bootstro-title='Second popover'
               data-bootstro-content="Because bootstrap rocks. Life before bootstrap was sooo miserable"
               data-bootstro-width="400px"
               data-bootstro-placement='bottom' data-bootstro-step='0'><?php echo $this->
                lang->_("settings"); ?><b
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
