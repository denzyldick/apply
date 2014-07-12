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

                  <td>3</td>
                  <td>{{vacancies.getLocation()}}</td>
                  <td>30</td>
                  <td><a href="matches/view/{{vacancies.getId()}}/{{tokenKey}}/{{tokenValue}}" class='btn btn-sm btn-success'><span class="glyphicon glyphicon-search"> Matches</span></a>&nbsp;<a href="/vacancy/remove/{{vacancies.getId()}}" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-remove"> REMOVE</span></a></td>
                </tr>

{% endfor %}
              </tbody>
            </table>
</div>


<a href="vacancy/new" class="btn btn-small btn-default"> new</a> &nbsp;<a href="premium" class="btn btn-small btn-primary"> more</a>
