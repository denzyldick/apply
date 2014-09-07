	  <h1 class="page-header">
          {{ amount_text }}
            <p class="lead">Individuals matching your criteria</p>
          </h1>

          <div class="row placeholders">
{% for suggestion in suggestions %}
		<div class="col-xs-6 col-sm-3 placeholder text-center suggestion" style="margin: 10px;" >
<a href="/suggestion/profile/{{suggestion.getUserId()}}">
			<canvas id="donuts{{suggestion.getId()}}"  style="
width: 200px!important;
height: 200px;
cursor:pointer;
" ></canvas>

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

		var myPie = new Chart(document.getElementById("donuts{{suggestion.getId()}}").getContext("2d")).Doughnut(pieData,null);</script>

	</a> <h4>{{suggestion.vacancy.getFunction() }}</h4>
	<span class="text-muted">{{suggestion.getPercent()}}% suggestion</span>
	<br/>

					<a href="/suggestion/accept/{{suggestion.getId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{suggestion.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>


{% endfor %}


          </div>
