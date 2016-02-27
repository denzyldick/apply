<body class="intro" style="width:100%;height:100%;position:relative;">
    <div class="well">
        <form action="/signup/start" method="post">
            {% if type is "employer" %}
                <input type="hidden" name="type"
                       value='employer'>

            {% else %}
                <input type="hidden" name="type"
                       value='employee'>
            {% endif %}



                    <div class="form-group">
                        <label for="firstname" class="col-lg-4 control-label">{{ lang._("firstname") |upper }}</label>

                        <div class="col-10-lg"><input type='text' class='form-control input-sm' name=firstname
                                                      placeholder='' value=""/>
                        </div>
                    </div>
                    <div class="form-group"><label class="col-lg-4 control-label"
                                                   for="lastname">{{ lang._("lastname") |upper }}</label>

                        <div class="col-10-lg"><input type='text' class='form-control input-sm' name='lastname'
                                                      placeholder='' value=""/>
                        </div>
                    </div>

                    <div class="form-group"><label class="col-lg-4 control-label"
                                                   for="email">{{ lang._("email")|upper }}</label>

                        <div class="col-10-lg"><input type='text' class='form-control input-sm' name='email'
                                                      placeholder='' value=""/></div>
                    </div>

                    <div class="form-group"><label class="col-lg-4 control-label"
                                                   for="password">{{ lang._("password") |upper }}</label>

                        <div class="col-10-lg"><input type='password' class='form-control input-sm' name='password'/>
                        </div>
                    </div>

                    <div class="form-group"><label class="col-lg-4 control-label"
                                                   for="password">{{ lang._("re_password")|upper }}</label>

                        <div class="col-10-lg"><input type='password' class='form-control input-sm' name='re_password'/>
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