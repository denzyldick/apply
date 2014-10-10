{% set specifications = vacancy.getSpecification() %}

<div class="row">
  <div class='col-md-3'>
  <img src="/img/default-user-icon-profile.png" class="img img-thumbnail" style="width:100%;height:174px;"/>
</div>
<div class='col-md-3'>

  </div>
  {% if suggestion.getEmployerAccepted() == 'yes' and suggestion.getEmployeeAccepted() == 'yes' %}

  <div class='col-md-3'>
    <h5>Contact information</h5>
    <small>{{user.geteMail()}}</small>
  </div>
  <div class='col-md-3'>
    <h5>Member since</h5>
    <small>19 august 2013</small>
  </div>
  {% endif %}

</div>
<div class="row">
    <div class="col-md-3">
<p></p>
      {% if suggestion.getEmployerAccepted() == 'no'  %}


      <a href="/suggestion/accept/{{suggestion.getId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{user.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>

      {% elseif suggestion.getEmployerAccepted() == 'yes' and suggestion.getEmployeeAccepted() == 'yes' %}
      <a href="/contact/{{suggestion.getId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-email"></span> {{this.lang._("contact")}}</a>

      {% else %}


                  <a href="/suggestion/accept/{{suggestion.getId()}}" class="btn btn-small btn-primary disabled"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("pending")}}</a>&nbsp;<a href="/suggestion/remove/{{user.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>

      {% endif %}
    </div>
<div class='col-md-9'>
<h5>My individual skills on a scale from 1 to 5</h5>
<canvas id='chart' height="300" width="700 " class=''></canvas>
</div>
</div>

<div class='row'>
<div class="col-md-3">
</div>

<div class='col-md-9'>
<h5>I'm located somewhere in this area</h5>
<div id="location" style='height:300px;' class='well' ></div>
</div>
</div>





<script>


    var map = new google.maps.Map(document.getElementById("location"),
        {
          center: new google.maps.LatLng({{user.location.getLatitude()}},{{user.location.getLongitude()}}),
          zoom:{{user.location.getZoom()}} ,
          disableDefaultUI: true
        });

           google.maps.event.addDomListener(window, 'load',map);

               var populationOptions = {
                strokeColor: 'red',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF7B7B',
                fillOpacity: 0.35,
                map: map,
                center:  new google.maps.LatLng({{user.location.getLatitude()}},{{user.location.getLongitude()}}),
                radius: 2000
              };
              // Add the circle for this city to the map.
              cityCircle = new google.maps.Circle(populationOptions);



// Get the context of the canvas element we want to select
var ctx = document.getElementById("chart").getContext("2d");

var skills = [
{% for specification in specifications %}

"{{specification.skills.getName()}}",
{% endfor %}
];
var vacancy_values = [
{% for specification in specifications %}
{{specification.getPercent() }},

{% endfor %}
];

var data = {
labels: skills,
datasets: [
{
label: "My First dataset",
fillColor: "#FF7B7B",
strokeColor: "red",
highlightFill: "red",
highlightStroke: "red",
data: vacancy_values
}

]
};

var myNewChart = new Chart(ctx).Bar(data,options);


</script>
