{% extends "templates/base.volt" %}
{% block title %} Account settings {% endblock %}
{% block content %}
            {% include "menu/menu.volt" %}
        <!--main-->
        <div class="col-sm-9 col-md-10 main" id="main">
<h1> Account Settings </h1>
<input class="form-control" placeholder="Firtname" value="{{ firstname }}">
<br/>
<input class="form-control" placeholder="Lastname" value="{{ lastname }}">
<br/>
<input class="form-control" placeholder="Email" value="{{ email }}">
<br/>
<a href="#" class="btn btn-sm btn-primary"> save</a> &nbsp; <a href="#" class="btn btn-sm btn-default"> change password</a>
<div>
{% endblock %}
