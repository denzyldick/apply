<h1 class="page-header">
      {{ amount }}
        <p class="lead">{{ lang._("job")}} {{ lang._("job_matching")}}</p>
      </h1>

      <div class="row placeholders">
{% for match in matches %}

 {% set company = match.vacancy.user.company %}


<div class="col-xs-6 col-sm-3 placeholder text-center match well" style="margin: 10px;"  data-toggle="modal" data-target="#{{match.getId()}}" >
          <img src="/files/{{company.logo}}" class="center-block  img-thumbnail" alt="Generic placeholder thumbnail" style="
width: 200px!important;
height: 200px;
cursor:pointer;
"> <h4>{{match.vacancy.getFunction() }}</h4>
          <span class="text-muted">{{match.getPercent()}}% match</span>
          <br/>
          <a href="" class="btn btn-small btn-primary"><span class="glyphicon glyphicon-send" style="color:#fff"></span> {{ lang._("contact_company")}}</a>
       

        <!-- Modal -->
        <div class="modal fade" id="{{match.getId()}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="text-align:left">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
               
                <span class="modal-title" id="myModalLabel"> <img src="/files/{{company.logo}}" style="
width: 32px!important;
height: 32px;
" /> {{ company.getName() }}</span>
              </div>
              <div class="modal-body">

                <a href="" class="btn btn-small btn-primary"> {{lang._("contact_company")}}</a>&nbsp;<a href="" class="btn btn-small btn-primary">{{lang._('vacancy information')}}</a><p></p>
               
                {{lang._('website')|upper}}<br/>
                <div class="well">
                <a href='{{company.website}}' target='new'>{{company.website}}</a>
              </div>
                 {{ lang._("description")|upper}}<br/>
                <div class="well">
                {{ company.getDescription()|e}}
                </div>

                <label>Where is the company located</label>



  <div class="gllpMap well"><center><img src="/img/ajax-loader.gif" alt="{{lang._('loading')}}"></center></div>
  {{hidden_field("longitude","class":"gllpLongitude","value":company.getLongitude())}}
  {{hidden_field("latitude","class":"gllpLatitude","value":company.getLatitude())}}
  {{hidden_field("zoom","class":"gllpZoom","value":company.getZoom())}}
            </div>
            
              <div class="modal-footer">

</div>
              </div>
            </div>
          </div>
        </div>
{% endfor %}


    

