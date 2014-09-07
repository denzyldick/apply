       <div class="table-responsive" style="height:500px;">
            <table class="table table-striped" >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Skills</th>
                  <th>Location</th>
                  <th>Matches</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                                {% for vacancies in vacancies %}
 <tr>
                  <td>{{ vacancies.getFunction() }}</td>

                  <td>{{vacancies.countSkills()}}</td>
                  <td>{{vacancies.location.getLocation()}}</td>
                  <td>{{vacancies.countMatches()}}</td>
                  <td><a href="/suggestion/view/{{vacancies.getId()}}/{{tokenKey}}/{{tokenValue}}" class='btn btn-sm btn-success'><span class="glyphicon glyphicon-search"> Matches</span></a>&nbsp;<a href="/vacancy/remove/{{vacancies.getId()}}" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-remove"> remove</span></a></td>
                </tr>

{% endfor %}
              </tbody>
            </table>
</div>
{% if remaining_vacancy > 0 %}

<a href="/vacancy/new" class="btn btn-small btn-primary"><span class="glyphicon glyphicon-plus" style="color:#fff"></span> add vacancy</a><br/><small>remaining vacancy {{remaining_vacancy}}</small>

{% endif %}

{% if remaining_vacancy == 0 %}

<a href="/premium" class='btn btn-small btn-default'> buy more</a>

{% endif %}
