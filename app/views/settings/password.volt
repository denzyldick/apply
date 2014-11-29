{% extends "templates/base.volt" %}
{% block title %}Change password{% endblock %}
{% block content %}
    <form action="/settings/password" method="post">
        <label>Current password</label>
        <input type="password" name="current_password" class="form-control"/>
        <label>New password</label>
        <input type="password" name="new_password" class="form-control"/>
        <label>Retype new password</label>
        <input type="password" name="retype_password" class="form-control"/>

        <p>&nbsp;</p>
        <input type="submit" value="save" class="btn btn-sm btn-primary"/>
    </form>
{% endblock %}
