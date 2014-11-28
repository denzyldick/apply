	  <h1 class="page-header">
          {{ amount_text }}
            <p class="lead">Individuals matching your criteria</p>
          </h1>

          <div class="row placeholders">
{% for match in matches %}
		<div class="col-xs-6 col-sm-3 placeholder text-center" style="margin: 10px;">
							<img src="/img/default-user-icon-profile.png" class="center-block img-responsive img-circle" alt="Generic placeholder thumbnail" style="
		width: 200px!important;
		height: 200px;
"> <h4>{{match.vacancy.getFunction() }}</h4>
							<span class="text-muted">{{match.getPercent()}}% match</span>
							<br/>
							<a href="/user/{{match.getUserId()}}" class="btn btn-small btn-primary"><span  class="glyphicon glyphicon-ok"></span> accept</a>&nbsp;<a href="/matches/remove/{{match.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove"  ></span> decline</a>
						</div>
{% endfor %}


          </div>

<center>
<img src="/img/ajax-loader.gif" alt="Collecting matches"/>
<h5> Collecting matches..</h5>
</center>
