{% extends "templates/base.volt" %}
{% block title %}{{ config.company.name }}{% endblock %}

{% block content %}

{{ content () }}

{% endblock %}
