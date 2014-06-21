{% for match in matches %}
    <div class="col-xs-6 col-sm-3 placeholder text-center" style="margin: 10px;">
              <img src="/img/default-user-icon-profile.png" class="center-block img-responsive img-circle" alt="Generic placeholder thumbnail" style="
    width: 200px!important;
    height: 200px;
"> <h4>{{match.Vacancy.function }}</h4>
              <span class="text-muted">{{match.percent}}% match</span>
              <br/>
               <a href="user/{{ matches.User.id}}" class="btn btn-small btn-primary"> view</a>
            </div>
{% endfor %}
