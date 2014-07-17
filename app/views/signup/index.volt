{% extends "templates/base.volt" %}
{% block content %}
<div class="jumbotron" id="jumbotron">	<div id="login"><h4>Create an account</h4>
	<i class="icon-2x icon-facebook-sign"></i>&nbsp;<i class="icon-2x icon-linkedin-sign"></i>&nbsp;<i class="icon-2x icon-googleplus-sign"></i>&nbsp;<i class="icon-2x icon-twitter-sign"></i>

<form action="/signup/start" method=post>
	<div class="well">
<input class=form-control type=text placeholder="Firstname" name='firstname'/>
</div>
<div class="well">
<input class=form-control type=text placeholder="lastname" name='lastname'/>
</div>

<div class="well">
<input class=form-control type=text placeholder="E-mail" name='email'/>
</div>

<p>
	<div class="well">

<input class=form-control type=password placeholder="Password" name='password'/>

</div>
	<div class="well">

<input class=form-control type=password placeholder="Re-Password" name='re_password'/>

</div>
<h4> I'm a business owner <input type="checkbox" name="type" value="employer"/></h4>
<input type="submit" class="btn btn-small btn-primary" style="float:right" value="Sign up"></div>
</form>
</div><p>&nbsp;</p>
{% endblock %}
