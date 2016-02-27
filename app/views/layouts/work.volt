{% extends "templates/base.volt" %}
{% block title %}{{ lang._("work") | capitalize }}{% endblock %}

{% block content %}
    {{ content () }}
{% endblock %}
