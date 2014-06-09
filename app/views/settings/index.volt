{% extends "templates/base.volt" %}
{% block title %} Account settings {% endblock %}
{% block content %}
    
<h1> Account Settings </h1>
<label>Firstname</label>
<input class="form-control" value="{{ firstname }}">
<br/>
<label>Lastname</label>
<input class="form-control"  value="{{ lastname }}">
<br/>
<label>Email</label>
<input class="form-control"  value="{{ email }}">
<br/>
<label>Account type</label>
<input class="form-control" disabled value={{ type }} />
<br/>
<a href="#" class="btn btn-sm btn-primary"> save</a> &nbsp; <a href="#" class="btn btn-sm btn-default"> change password</a>

{% endblock %}
