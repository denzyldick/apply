{% extends "templates/base.volt" %}
{% block title %} {{ lang._("account_settings") }}{% endblock %}
{% block content %}

    <h4 class="page-header">{{ lang._("account_information") | upper }}
        <p class="lead">{{ lang._("change_your_account_information") }}</p>
    </h4>


    <form method="post" action="settings/save">
        <div class="form-group">

            <label for="firstname" class="control-label col-md-2">{{ lang._("firstname") |upper }}</label>

            <div class="col-md-10">
                <input class="form-control" value="{{ firstname }}" id="firstname" name="firstname">
            </div>

        </div>

        <div class="form-group">
            <label for="lastname" class="col-md-2 control-label">{{ lang._("lastname")|upper }}</label>

            <div class="col-md-10">
                <input class="form-control" value="{{ lastname }}" id="lastname" name="lastname">
            </div>
        </div>
        <div class="form-group">
            <label for="email" class="col-md-2">{{ lang._("email") |upper }}</label>

            <div class="col-md-10">
                <input class="form-control" value="{{ email }}" id="email" name="email">
            </div>
        </div>

        <div class="form-group">
            <label for="account-type" class="col-md-2">{{ lang._("account_type") |upper }}</label>

            <div class="col-md-10">
                <input class="form-control" disabled value={{ type }}/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-1">
                <input type="submit" value="{{ lang._("save") }}" class="btn btn-sm btn-primary"/>
            </div>
            <div class="col-sm-1">
                <a href="/settings/password" class="btn btn-sm btn-warning">{{ lang._("change_password") }}</a>
            </div>
        </div>


    </form>
{% endblock %}
