
<h1 class="page-header">
      {{ amount}}
        <p class="lead">{{lang._('you_can_now_connect')}}</p>
      </h1>

      <div class="row placeholders">
{% for suggestion in matches %}
    <div class="col-xs-6 col-sm-3 placeholder text-center suggestion well" style="margin: 10px;" >
<a href="/suggestion/profile/{{suggestion.getUserId()}}/{{suggestion.getId()}}">
      <canvas id="donuts{{suggestion.getId()}}"  height="200" width="200" ></canvas>



  </a> <h4>{{suggestion.vacancy.getFunction() }}</h4>

  <br/>{% if suggestion.getEmployerAccepted() == 'yes' and suggestion.getEmployeeAccepted() == 'yes' %}
          <a href='' class='btn btn-small btn-primary'>Contact me</a>
        {% endif %}
        {% if suggestion.getEmployerAccepted() == 'no' and suggestion.getEmployeeAccepted() == 'yes' %}

          <a href="#" class="btn btn-small btn-primary disabled"><span class="glyphicon glyphicon-ok"></span> {{this.lang._("pending")}}</a>&nbsp;<a href="/suggestion/decline/{{suggestion.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>
        {% endif %}

</div>

<script>
  var pieData = [
        {
          value: {{suggestion.getPercent()}},
          color:"rgb(49, 151, 199)"
        },
        {
          value : 100-{{suggestion.getPercent()}},
          color : "#fff"
        }
      ];

  var ctx = document.getElementById("donuts{{suggestion.getId()}}").getContext("2d");
  ctx.fillText({{suggestion.getPercent()}} + "%",null,null);


    var myPie = new Chart(ctx).Doughnut(pieData,{percentageInnerCutout : 60});</script>
{% endfor %}




      </div>
