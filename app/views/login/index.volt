<body class="intro" style="width:100%;height:100%;position:relative;">
<div class=well style="width:500px;margin:0px auto;">
    <fieldset>


        <legend>{{ lang._("welcome_message") }}</legend>
        <form action="/login/login" method="post">

            <div class="form-group">
                <label for="inputEmail" class="col-lg-2 control-label">{{ lang._("email") }}</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputEmail" placeholder="{{ lang._("email") }}" name="email">
                </div>
            </div>

            <div class="form-group">
                <label for="inputPassword" class="col-lg-2 control-label">{{ lang._("password") }}</label>
                <div class="col-lg-10">
                    <input type="password" class="form-control" id="inputPassword"  name="password" placeholder="{{ lang._("password") }}">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> {{ lang._("remember_me") }}
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <button class="btn btn-default">{{ lang._("forgot_password") }}</button>
                    <button type="submit" class="btn btn-primary">{{ lang._("login") }}</button>
                </div>
            </div>
        </form>
    </fieldset>
</div>
<div class="alert alert-danger" id="alert"></div>
</body>
