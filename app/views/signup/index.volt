{% extends "templates/base.volt" %}
{% block content %}
<div class="jumbotron" id="jumbotron">	<div id="login"><h4>Create an account</h4>
	<i class="icon-2x icon-facebook-sign"></i>&nbsp;<i class="icon-2x icon-linkedin-sign"></i>&nbsp;<i class="icon-2x icon-googleplus-sign"></i>


	<div class="well">
<input class=form-control type=text placeholder="Firstname" id='firstname'/>
</div>
<div class="well">
<input class=form-control type=text placeholder="lastname" id='lastname'/>
</div>

<div class="well">
<input class=form-control type=text placeholder="E-mail" id='email'/>
</div>

<p>
	<div class="well">

<input class=form-control type=password placeholder="Password" id='password'/>

</div>
	<div class="well">

<input class=form-control type=password placeholder="Re-Password" id='re_password'/>

</div>
<h4> I'm a business owner <input type="checkbox" id="type" value="employer"/></h4>
<a class="btn btn-small btn-primary" style="float:right" onclick=submitSignUp()> Sign up</a></div>
</form>
</div><p>&nbsp;</p>
{% endblock %}
