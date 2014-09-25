{% extends "templates/base.volt" %}
{% block content %}

<h1>Please enter your activation code</h2>
<form action="/signup/activate" method='post'>
<input type='text' class="form-control" name='code'/><p></p>
<input type='submit' value='submit' class='btn btn-small btn-primary'/>
</form>
{% endblock %}
