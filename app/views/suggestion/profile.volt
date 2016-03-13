{% set specifications = user.getSpecification() %}

<div class="row">
    <div class='col-md-3'>
        {% if user.getPhoto() is not empty %}
            <img src="/files/{{ user.getPhoto() }}" class="img img-thumbnail" style="width:100%;height:174px;"/>
        {% else %}
        <img src="/img/default-user-icon-profile.png" class="img img-thumbnail" style="width:100%;height:174px;"/>
        {% endif %}
        <a href="/suggestion/accept/{{ suggestion.getId() }}" class="btn btn-large btn-primary">
            <i class="fa fa-mail-forward"></i>
            {{ this.lang._("contact_me")|upper }}</a>

    </div>
    <div class='col-md-8'>

            <h5>{{ lang._("years_of_experience") }}</h5>
            <canvas id='chart' height="300"  class='col-md-12'></canvas>

    </div>
    {% if suggestion.getEmployerAccepted() == 'yes' and suggestion.getEmployeeAccepted() == 'yes' %}

        <div class='col-md-3'>
            <h5>Contact information</h5>
            <small>{{ user.geteMail() }}</small>
        </div>
        <div class='col-md-3'>
            <h5>Member since</h5>
            <small>19 august 2013</small>
        </div>
    {% endif %}

</div>
<div class="row">



</div>
<div class="row">
    <div class="col-md-12">
        <h4>{{ lang._("im_located_at") | format(user.location.getLocation())}} <i class="icon-map-marker"></i></h4>
    </div>
</div>
        <div id="location" class="row" style='height:300px;' class='well'></div>

<script>


    var map = new google.maps.Map(document.getElementById("location"),
            {
                center: new google.maps.LatLng({{user.location.getLatitude()}}, {{user.location.getLongitude()}}),
                zoom:{{user.location.getZoom()}},
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
        center: new google.maps.LatLng({{user.location.getLatitude()}}, {{user.location.getLongitude()}}),
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

    var myNewChart = new Chart(ctx).Bar(data, options);


</script>
