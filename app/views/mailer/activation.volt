{% extends "templates/email.volt" %}
{% block content %}
    <h4>{{ lang._("thank_you") }}</h4>
    <small class="lead" >{{ lang._("you_need_to_activate") }}</small><p></p>

    <a href="{{ verification_url }}">{{ lang._("activate") }}</a>
{% endblock %}
