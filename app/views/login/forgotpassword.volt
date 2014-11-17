{% extends "templates/base.volt" %}
{% block content %}
{{form('login/forgotpassword','method':'post')}}
  <h2>{{lang._('please_enter_your_email')}}</h2>
  {{text_field('email','class':'form-control','placeholder':'jhon@example.com')}}<p></p>
  <input type="submit" value={{lang._("submit")}} class='btn btn-primary btn-small'/>
</form>
{% endblock %}
