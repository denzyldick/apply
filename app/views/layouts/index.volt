{% extends "templates/base.volt" %}
{% block content %}
<div class="jumbotron " id="jumbotron">

{{ content() }}
        <div class="alert alert-danger" id="alert"></div>
  </div>
</div>
</div>
</div>
{% endblock %}