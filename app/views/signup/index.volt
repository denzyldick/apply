<style>


    input {
        max-width: 300px;
    }

    .well {
        max-width: 600px;
        margin: 0px auto;
    }

</style>
<body class="intro" style="width:100%;height:100%;position:relative;">
    <div class="well">
        <form action="/signup/start" method=post>

            <div class='row '>
                <fieldset>

                    <legend> {{ lang._("signup")|upper }}</legend>

                    <div class="form-group">
                        <label for="account_type"
                               class="col-lg-4 control-label">{{ lang._("what_are_you_looking_for")|upper }}</label>

                        <div class="col-10-lg">
                            <div class="btn-group btn-next" id="account_type" data-toggle="buttons">
                                <label class="btn btn-sm btn-primary">
                                    <input type="radio" name="type"
                                           value='employer'>{{ lang._("searching_for_employees")|upper }}
                                </label>
                                <label class="btn btn-sm btn-primary    ">
                                    <input type="radio" name="type" checked
                                           value="employee">{{ lang._("searching_for_jobs")|upper }}
                                </label>

                            </div>
                        </div>
                    </div>


                    <div class="form-group">
                        <label for="firstname" class="col-lg-4 control-label">{{ lang._("firstname") |upper }}</label>

                        <div class="col-10-lg"><input type='text' class='form-control input-lg' name=firstname
                                                      placeholder='' value="{{ trying_to_reg_user.getFirstname() }}"/>
                        </div>
                    </div>
                    <div class="form-group"><label class="col-lg-4 control-label"
                                                   for="lastname">{{ lang._("lastname") |upper }}</label>

                        <div class="col-10-lg"><input type='text' class='form-control input-lg' name='lastname'
                                                      placeholder='' value="{{ trying_to_reg_user.getLastname() }}"/>
                        </div>
                    </div>

                    <div class="form-group"><label class="col-lg-4 control-label"
                                                   for="email">{{ lang._("email")|upper }}</label>

                        <div class="col-10-lg"><input type='text' class='form-control input-lg' name='email'
                                                      placeholder='' value="{{ trying_to_reg_user.getEmail() }}"/></div>
                    </div>

                    <div class="form-group"><label class="col-lg-4 control-label"
                                                   for="password">{{ lang._("password") |upper }}</label>

                        <div class="col-10-lg"><input type='password' class='form-control input-lg' name='password'/>
                        </div>
                    </div>

                    <div class="form-group"><label class="col-lg-4 control-label"
                                                   for="password">{{ lang._("re_password")|upper }}</label>

                        <div class="col-10-lg"><input type='password' class='form-control input-lg' name='re_password'/>
                        </div>
                    </div>

                </fieldset>

                <div class="row">

                    <div class="col-md-8">
                        <button class='btn btn-primary btn-lg' type="submit">{{ lang._("signup") }}</button>
                    </div>
                </div>


            </div>


        </form>
    </div>
</body>