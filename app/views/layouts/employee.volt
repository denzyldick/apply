{% extends "templates/base.volt" %}
{% block title %}Firstname lastname {% endblock %}

{% block content %}
{% include "menu/menu.volt" %}
This is the page for the employee
{{ content () }}
{% endblock %} 