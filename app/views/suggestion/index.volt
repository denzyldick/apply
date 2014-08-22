	  <h1 class="page-header">
          {{ amount_text }}
            <p class="lead">Individuals matching your criteria</p>
          </h1>

          <div class="row placeholders">
{% for suggestion in suggestions %}
		<div class="col-xs-6 col-sm-3 placeholder text-center suggestion" style="margin: 10px;" >
							<img src="/img/default-user-icon-profile.png" class="center-block  img-thumbnail" alt="Generic placeholder thumbnail" style="
		width: 200px!important;
		height: 200px;
"  data-toggle="modal" data-target="#{{suggestion.getId()}}"> <h4>{{suggestion.vacancy.getFunction() }}</h4>
							<span class="text-muted">{{suggestion.getPercent()}}% suggestion</span>
							<br/>
							<a href="/user/{{suggestion.getUserId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{suggestion.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>
						</div>


						<!-- Modal -->
						<div class="modal fade" id="{{suggestion.getId()}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
										<h4 class="modal-title" id="myModalLabel">{{suggestion.vacancy.getFunction() }}</h4>
									</div>
									<div class="modal-body">
					
									</div>
									<div class="modal-footer">


										<a href="/user/{{suggestion.getUserId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{suggestion.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>

									</div>
								</div>
							</div>
						</div>

{% endfor %}


          </div>

<center>
<img src="/img/ajax-loader.gif" alt="Collecting suggestion"/>
<h5> Collecting suggestions..</h5>
</center>
