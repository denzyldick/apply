{% extends "employer/index.volt" %}
{% block title %} Your vacancies {% endblock %}
{% block content %}
    {% include "menu/menu.volt" %}
        <div class="col-sm-9 col-md-10 main" id="main">
<h1> Your vacancies <h1>


          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Function</th>
                  <th>Hour/week</th>
                  <th>Experience</th>
                  <th>Location</th>
                  <th>Matches</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PHP Developer</td>
                  <td>40</td>
                  <td>3 years</td>
                  <td>Amsterdam</td>
                  <td>30</td>
                  <td><a href=# class='btn btn-sm btn-success'><span class="glyphicon glyphicon-search"> SEARCH</span></a>&nbsp;<a href=# class='btn btn-sm btn-default'><span class="glyphicon glyphicon-edit"> EDIT</span></a>&nbsp;<a href="#" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-remove"> REMOVE</span></a></td>
                </tr>  <tr>
                  <td>Java Developer</td>
                  <td>30</td>
                  <td>1 year</td>
                  <td>Amsterdam</td>
                  <td>10</td>
              <td><a href=# class='btn btn-sm btn-success'  title="Search for people."><span class="glyphicon glyphicon-search"> SEARCH</span></a>&nbsp;<a href=# class='btn btn-sm btn-default'><span class="glyphicon glyphicon-edit"> EDIT</span></a>&nbsp;<a href="#" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-remove"> REMOVE</span></a></td>
                   </tr>
              </tbody>
            </table>
</div>
{% endblock %}


