<h3>{{ amount_text }}</h3>
{% for match in matches %}
    <div class="col-xs-6 col-sm-3 placeholder text-center" style="margin: 10px;">
              <img src="/img/default-user-icon-profile.png" class="center-block img-responsive img-circle" alt="Generic placeholder thumbnail" style="
    width: 200px!important;
    height: 200px;
"> <h4>{{match.vacancy.getFunction() }}</h4>
              <span class="text-muted">{{match.getPercent()}}% match</span>
              <br/>
               <a href="/user/{{match.getUserId()}}" class="btn btn-small btn-primary"> view</a>
            </div>
{% endfor %}
