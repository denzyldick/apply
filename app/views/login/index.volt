{% extends "templates/base.volt" %}
{% block title %} Login {% endblock %}
{% block content %}
<div id=jumbotron class=jumbotron>	<div id="login"><h4>Login to your Account</h4>
<div class="well">
<input class=form-control type=text placeholder="E-mail" id='email'/>
</div>
<p>
	<div class="well">
		
<input class=form-control type=password placeholder="Password" id='password'/>

</div>
<input type="checkbox" id="remember" value="yes" /> Remember me&nbsp;&nbsp;&nbsp;&nbsp;
<a class="btn btn-small btn-primary" style="float:right" onclick=submitLogin()> Login</a>
</div>
</form>
<div class="alert alert-danger" id="alert"></div>
</div>
{% endblock %}