
<body class="intro" style="width:100%;height:100%;position:relative;">
<div class=awesome_well style="width:500px;margin:0px auto;">
    <div class="header" style="margin-bottom: 5px;">Login to your Account</div>
	<form action="/login/login" method="post">
        <div class="row">
            <div class="col-md-6 text-uppercase " ><h2 style="color:#fff">email</h2></div><div class="col-md-6"><input class=form-control type=text placeholder="E-mail" name='email'/>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 text-uppercase"><h2 style="color:#fff">password</h2></div><div class="col-md-6"><input class=form-control type=password placeholder="Password" name='password'/
            </div>
        </div>
<div class="row">
    <div class="md-col-11 pull-left">
        <input type="checkbox" id="remember" value="yes" /> Remember me</div>
</div>
        <div class="row">
            <div class="col-md-6"><a href="/login/forgotpassword" class="btn btn-default">{{lang._('forgot_password')}}</a>
                <input type="submit" value="Login" class="btn btn-small btn-primary" ></div>
            {#<div class="col-md-6"><i class="icon-2x icon-facebook-sign"></i>&nbsp;<i class="icon-2x icon-linkedin-sign"></i>&nbsp;<i class="icon-2x icon-googleplus-sign"></i>#}
            </div>




</form>
</div>

    <div class="alert alert-danger" id="alert"></div>
</body>
