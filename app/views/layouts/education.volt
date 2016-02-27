{% extends "templates/base.volt" %}
{% block title %}{{ lang._("education") | capitalize }}{% endblock %}

{% block content %}
    {{ content () }}
{% endblock %}
