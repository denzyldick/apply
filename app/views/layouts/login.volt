{% extends "templates/base.volt" %}
{% block title %}{{ lang._("login") | capitalize   }}{% endblock %}
{% block content %}

<div class="col-md-8 col-md-offset-2" id="main">
    {{ content () }}
</div>
{% endblock %}
