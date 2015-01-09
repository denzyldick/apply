{% extends "templates/base.volt" %}
{% block title %}{{ lang._("change_password") }}{% endblock %}
{% block content %}
    <h4 class="page-header">
        {{ lang._("change_your_password") }}
        <p class="lead">{{ lang._("enter_your_new_password") }}</p>
    </h4>
    <form action="/settings/password" method="post">
        <div class="form-group">
            <label for="current_password" class="col-md-2">{{ lang._("current_password") |upper }}</label>

            <div class="col-md-10">
                <input type="password" id="current_password" value="" name="current_password" class="form-control"/>
            </div>
        </div>

        <div class="form-group">
            <label for="new_password" class="col-md-2">{{ lang._("new_password") |upper }}</label>

            <div class="col-md-10">
                <input type="password" id="new_password" name="new_password" class="form-control"/>
            </div>
        </div>

        <div class="form-group">
            <label for="retype_password" class="col-md-2">{{ lang._("retype_password")|upper }}</label>

            <div class="col-md-10">
                <input type="password" id="retype_password" name="retype_password" class="form-control"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 col-offset-1">
                <input type="submit" value="{{ lang._("save") }}" class="btn btn-lg btn-primary"/>
            </div>
        </div>

    </form>
{% endblock %}
