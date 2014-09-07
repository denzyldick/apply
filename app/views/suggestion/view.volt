<h1 class="page-header">
      {{ amount_text }}
        <p class="lead">Individuals matching your criteria</p>
      </h1>

      <div class="row placeholders">
{% for suggestion in suggestions %}
<div class="col-xs-6 col-sm-3 placeholder text-center suggestion" style="margin: 10px;" >
          <a href="/suggestion/profile/{{suggestion.getUserId()}}"><img src="/img/default-user-icon-profile.png" class="center-block  img-thumbnail" alt="Generic placeholder thumbnail" style="
width: 200px!important;
height: 200px;
"  data-toggle="modal" data-target="#{{suggestion.getId()}}"></a> <h4>{{suggestion.vacancy.getFunction() }}</h4>
          <span class="text-muted">{{suggestion.getPercent()}}% suggestion</span>
          <br/>
          <a href="/user/{{suggestion.getUserId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{suggestion.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>
        </div>


{% endfor %}


      </div>
