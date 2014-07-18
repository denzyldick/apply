{% extends "templates/base.volt" %}
{% block title %} Account settings {% endblock %}
{% block content %}
    <form method="post" action="settings/save">
<h1> Account Settings </h1>
<label>Firstname</label>
<input class="form-control" value="{{ firstname }}" name="firstname">
<br/>
<label>Lastname</label>
<input class="form-control"  value="{{ lastname }}" name="lastname">
<br/>
<label>Email</label>
<input class="form-control"  value="{{ email }}" name="email">
<br/>
<label>Account type</label>
<input class="form-control" disabled value={{ type }} />
<br/>
<input type="submit" value="save" class="btn btn-sm btn-primary" /> &nbsp; <a href="/settings/password" class="btn btn-sm btn-warning"> change password</a>
</form>

{% endblock %}
