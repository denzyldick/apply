{% extends "templates/email.volt" %}
{% block content %}
<h1>Welcome {{ fullname }}</h2>
  <pre>
  This is your verification code.
  <br/>
  <strong>{{ verification_code }}</strong>
  <p>
      <a href=''>enter here</a>
  </pre>
    {% endblock %}
