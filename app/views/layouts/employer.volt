{% extends "templates/base.volt" %}
{% block title %}Firstname lastname {% endblock %}

{% block content %}
{% include "menu/menu.volt" %}
    <div class="col-sm-9 col-md-10 main" id="main">
<h1>This is the page for the employer</h1>
{{ content () }}
</div>
{% endblock %} 