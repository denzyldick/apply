	  <h1 class="page-header">
            30 Matches
            <p class="lead">Individuals matching your criteria</p>
          </h1>

          <div class="row placeholders">
          {% for match in matches %}
              <div class="col-xs-6 col-sm-3 placeholder text-center" style="margin: 10px;">
                        <img src="/img/default-user-icon-profile.png" class="center-block img-responsive img-circle" alt="Generic placeholder thumbnail" style="
              width: 200px!important;
              height: 200px;
          "> <h4>{{matches.Vacancy.function }}</h4>
                        <span class="text-muted">{{matches.percent}}% match</span>
                        <br/>
                         <a href="user/{{ matches.User.id}}" class="btn btn-small btn-primary"> view</a>
                      </div>
          {% endfor %}

          </div>
