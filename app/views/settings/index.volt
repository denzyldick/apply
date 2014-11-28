{% extends "templates/base.volt" %}
{% block title %} {{ lang._("accounts_settings") }}{% endblock %}
{% block content %}
    <form method="post" action="settings/save">
<h1>{{ lang._("account_settings") }}</h1>
<label>{{ lang._("firstname") }}</label>
<input class="form-control" value="{{ firstname }}" name="firstname">
<br/>
<label>{{ lang._("lastname") }}</label>
<input class="form-control"  value="{{ lastname }}" name="lastname">
<br/>
<label>{{ lang._("email") }}</label>
<input class="form-control"  value="{{ email }}" name="email">
<br/>
<label>{{ lang._("account_type") }}</label>
<input class="form-control" disabled value={{ type }} />
<br/>
<input type="submit" value="save" class="btn btn-sm btn-primary" /> &nbsp; <a href="/settings/password" class="btn btn-sm btn-default"> change password</a>
</form>

{% endblock %}
