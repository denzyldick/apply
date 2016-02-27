{% set company = vacancy.user.company %}

<div class="row" >

  <img src="/files/{{ company.getLogo() }}" class="img-thumbnail col-md-3 col-sm-3"/>
    <div class="col-md-9 col-sm-9">
        <div class="row">
            <div class="col-md-12">
                <h5>{{ company.getName() | capitalize }}</h5>
            </div>
        </div>
        <div class="row-">
            <div class="col-md-12">
                {{ company.getDescription() }}
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <h5 class="page-header">{{ lang._("skills_needed") }}
                    <br>
                    <small class="lead">
                {% for specification in vacancy.specification %}
                   {{ specification.skills.getName() }}
                {% endfor %}
                    </small>
                </h5>
            </div>
        </div>

    </div>

</div>
<div class="row">
    <a href="{{ company.getWebsite() }}">
        <i class="fa fa-globe col-md-1 fa-3x" style="color: #636565;"></i>

    </a>

    <a href="{{ company.getTwitter() }}">
        <i class="fa fa-twitter col-md-1 fa-3x" style="color:#1da1f2"></i>

    </a>
    <a href="{{ company.getFacebook() }}"  style="color:#3a5795">
        <i class="fa fa-facebook-f col-md-1 fa-3x"></i>

    </a>
    <div class=" col-md-3 pull-right">
        <a href="" class="btn btn-primary btn-small"><i class="fa fa-envelope"></i> {{ lang._("apply") | upper }}</a>
    </div>

</div>


<div class="row">
    <div class="col-md-3">
        {#{% if suggestion.getEmployerAccepted() == 'yes' and suggestion.getEmployeeAccepted() == 'yes' %}#}
            {#<a href="/contact/{{ suggestion.getId() }}" class="btn btn-small btn-primary"><span#}
                        {#class="glyphicon glyphicon-email"></span> {{ this.lang._("contact") }}</a>#}
        {#{% endif %}#}
        {#{% if suggestion.getEmployerAccepted() == 'no'and suggestion.getEmployeeAccepted() == 'yes' %}#}
            {#<a href="/suggestion/accept/{{ suggestion.getId() }}" class="btn btn-small btn-primary disabled"><span#}
                        {#class="glyphicon glyphicon-time "></span> {{ this.lang._("pending") }}</a>&nbsp;<a#}
                {#href="/suggestion/remove" class="btn btn-small btn-default"><span#}
                    {#class="glyphicon glyphicon-remove"></span> {{ this.lang._("decline") }}</a>#}
        {#{% endif %}#}
        {#{% if suggestion.getEmployerAccepted() == 'no' and suggestion.getEmployeeAccepted()== 'no' %}#}
            {#<a href="/suggestion/accept/{{ suggestion.getId() }}" class="btn btn-small btn-primary"><span#}
                        {#class="glyphicon glyphicon-ok"></span> {{ this.lang._("accept") }}</a>&nbsp;<a#}
                {#href="/suggestion/remove/" class="btn btn-small btn-default"><span#}
                    {#class="glyphicon glyphicon-remove"></span> {{ this.lang._("decline") }}</a>#}

        {#{% endif %}#}

    </div>


</div>
<p></p>


    <div class="row col-md-12">

        <h5 class="page-header">
            {{ lang._("job_description")|upper }}
            <p class="lead">{{ vacancy.getDescription() }}</p>
        </h5>


    </div>
    <div class="row col-md-12">
        <h5 class="page-header">{{ lang._("job_benefits") |upper }}
            <p class="lead">{{ vacancy.getJobBenefits() }}</p>
        </h5>

    </div>

</div>
<div class="row">
    <div id="maps" class="col-md-12 disabled"  style="height:400px" ><img src="img/ajax-loader.gif"> </div>

</div>

{% set specifications = vacancy.getSpecification() %}


<script>


    var map = new google.maps.Map(document.getElementById("maps"),
            {
                center: new google.maps.LatLng({{vacancy.location.getLatitude()}}, {{vacancy.location.getLongitude()}}),
                zoom:{{vacancy.location.getZoom()}},
                disableDefaultUI: true,
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                draggable: false
            });

    google.maps.event.addDomListener(window, 'load', map);

    var populationOptions = {
        strokeColor: '#3498DB',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#3498DB',
        fillOpacity: 0.7,
        map: map,
        center: new google.maps.LatLng({{vacancy.location.getLatitude()}}, {{vacancy.location.getLongitude()}}),
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

    var myNewChart = new Chart(ctx).Bar(data, options);


</script>
