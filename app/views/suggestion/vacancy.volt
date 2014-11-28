{% set company = suggestion.vacancy.user.company %}
{% set vacancy = suggestion.vacancy %}

<div class="row">

    <div class="col-md-3"> <img src="/files/{{ company.getLogo() }}" style="width: 256px;
height: 203px;" class="img-thumbnail" /><br/>
        <a href="{{ company.getWebsite() }}" class="text-info">{{ lang._("visit_site") }}</a></div>
    <div class="col-md-6 text-uppercase" style="overflow-y: scroll;height:200px;"><h1 class=" page-header">{{ company.getName()|e }}&nbsp;<small>{{ vacancy.getFunction() }}</small></h1>
   <small>{{ company.getDescription() }}</small></div>
</div>
<br/>
<div class="row">
    <div class="col-md-3">
        {%  if suggestion.getEmployerAccepted() == 'yes' and suggestion.getEmployeeAccepted() == 'yes'%}
            <a href="/contact/{{suggestion.getId()}}" class="btn btn-small btn-primary"><span class="glyphicon glyphicon-email"></span> {{this.lang._("contact")}}</a
        {% endif %}
        {%  if suggestion.getEmployerAccepted() == 'no'and suggestion.getEmployeeAccepted() == 'yes' %}
            <a href="/suggestion/accept/{{suggestion.getId()}}" class="btn btn-small btn-primary"><span  class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/" class="btn btn-small btn-default"><span class="glyphicon glyphicon-remove"  ></span> {{this.lang._("decline")}}</a>
        {% else %}
            <a href="/suggestion/accept/{{suggestion.getId()}}" class="btn btn-small btn-primary disabled"><span class="glyphicon glyphicon-time "></span> {{this.lang._("pending")}}</a>&nbsp;<a href="/suggestion/remove" class="btn btn-small btn-default"><span class="glyphicon glyphicon-remove" ></span> {{this.lang._("decline")}}</a>
        {% endif %}

    </div>


</div>
<div class="row">
    <div class="col-md-5"><h4>{{ lang._("years_of_expertise") }}</h4> <canvas id="chart"   height="300"  width="500" ></canvas></div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
            <h4>{{ lang._("we_are_located_somewhere_in_this_area") }}</h4>
            <div id="maps" style='width:100%;height:300px;' ></div>
        </div>
</div>

{% set specifications = vacancy.getSpecification() %}



<script>


    var map = new google.maps.Map(document.getElementById("maps"),
            {
                center: new google.maps.LatLng({{vacancy.location.getLatitude()}},{{vacancy.location.getLongitude()}}),
                zoom:{{vacancy.location.getZoom()}} ,
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
        center:  new google.maps.LatLng({{vacancy.location.getLatitude()}},{{vacancy.location.getLongitude()}}),
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
                label: "{{ lang._("vacancy_skills") }}",
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
