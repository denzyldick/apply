{% extends "templates/base.volt" %}
{% block title %}Vacancy{% endblock %}

{% block content %}
{% include "menu/menu.volt" %}
    <div class="col-sm-9 col-md-10 main" id="main">

Vacancy
{{ content () }}
</div>
{% endblock %} 