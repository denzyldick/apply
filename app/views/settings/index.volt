<div class="well">


    <h4 class="page-header">{{ lang._("account_information") | upper }}
        <p class="lead">{{ lang._("change_your_account_information") }}</p>
    </h4>


    <form method="post" action="settings/save">
        <div class="row">
            <div class="form-group">

                <label for="firstname"
                       class="control-label col-md-2">{{ lang._("firstname") |upper }}</label>

                <div class="col-md-8 col-md-push-2">
                    <input class="form-control" value="{{ firstname }}" id="firstname" name="firstname">
                </div>

            </div>
        </div>
        <div class="row">


            <div class="form-group">
                <label for="lastname"
                       class="col-md-2 control-label">{{ lang._("lastname")|upper }}</label>

                <div class="col-md-8 col-md-push-2">
                    <input class="form-control" value="{{ lastname }}" id="lastname" name="lastname">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="form-group">
                <label for="email" class="col-md-2">{{ lang._("email") |upper }}</label>

                <div class="col-md-8 col-md-push-2">
                    <input class="form-control" value="{{ email }}" id="email" name="email">
                </div>
            </div>
        </div>

        <div class="row">

            <input type="submit" value="{{ lang._("save") }}" class="col-sm-1  col-sm-1  col-lg-1 col-lg-1 btn btn-sm btn-primary"/>


            <a href="/settings/password"
               class="col-sm-2   col-sm-1 col-lg-2 btn btn-sm btn-default">{{ lang._("change_password") }}</a>


            <!-- Trigger the modal with a button -->
            <button type="button" class="col-sm-2   col-sm-1 col-lg-2 btn btn-warning btn-sm" data-toggle="modal"
                    data-target="#deactivate">{{ lang._("deactivate_account") }}</button>
        </div>
    </form>
</div>


<!-- Modal -->
<div id="deactivate" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">{{ lang._("are_you_sure") }} ?</h4>
            </div>
            <div class="modal-body">
                <form action="/settings/deactivate" method="post">
                    <div class="row">
                        <div class="col-md-12">
                            <label for="password">{{ lang._("enter_password") }}</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="formgroup">

                                <input type="password" id="password" name="password" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <input type="submit" class="btn btn-large btn-primary"
                                   value="{{ lang._("deactivate") |upper }}"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">{{ lang._("cancel") }}</button>
            </div>
        </div>

    </div>
</div>