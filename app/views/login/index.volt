{% extends "templates/base.volt" %}
{% block title %} Login {% endblock %}
{% block content %}
<div id=jumbotron class=jumbotron>	<div id="login"><h4>Login to your Account</h4>
	<form action="/login/login" method="post">
<div class="well">
<input class=form-control type=text placeholder="E-mail" name='email'/>
</div>
<p>
	<div class="well">

<input class=form-control type=password placeholder="Password" name='password'/>

</div>
<input type="checkbox" id="remember" value="yes" /> Remember me&nbsp;&nbsp;&nbsp;&nbsp;
<input type="submit" value="Login" class="btn btn-small btn-primary" style="float:right"><i class="icon-2x icon-facebook-sign"></i>&nbsp;<i class="icon-2x icon-linkedin-sign"></i>&nbsp;<i class="icon-2x icon-googleplus-sign"></i>
</div>
</form>
<div class="alert alert-danger" id="alert"></div>
</div>
{% endblock %}
