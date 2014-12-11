<body class="intro" style="width:100%;height:100%;position:relative;">

<div class="well" style="width:500px;margin:0px auto;">
    {{ form('login/forgotpassword','method':'post') }}

    <div class="row">
        <div class="form-group">
            <label class="col-md-4" for="email_password_retrieve"> {{ lang._('please_enter_your_email') }}</label>

            <div class="col-md-6">  {{ text_field('email','class':'form-control','placeholder':'jhon@example.com',"id":"email_password_retrieve") }}
            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <input type="submit" value={{ lang._("retrieve") }} class="btn btn-primary btn-small"/>


        </div>

    </div>
    </form>
</div>
</body>