{% extends "templates/base.volt" %}
{% block content %}
<h1>Welcome {{fullname}}</h2>
  <pre>
  You need to create activate your account.
  <br/>
  This is your verification code.
  <strong>{{verification_code}}</strong>
  </pre>
  {% endblock %}
