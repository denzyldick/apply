{% set specifications = user.getSpecification() %}
<div class='row'>
  <div class='col-md-6'>
<h4>My individual skills on a scale from 1 to 5</h4>
<canvas id='chart' height="300" class=''></canvas>
</div>
<div class='col-md-6'>
<h4>I'm located somewhere in this area</h4>
<div id="location" style='height:300px;' class='well' ></div>
</div>
</div>
<div class='row'>
  <div class='col-md-3'>
    <h5>My preferred workenviroment</h5><small>{{user.getWorkEnviromentType()
    }}</small>
  </div>
  {% if suggestion.getEmployerAccepted() == 'yes' and suggestion.getEmployeeAccepted() == 'yes' %}

  <div class='col-md-3'>
    <h5>Contact information</h5>
    <small>{{user.geteMail()}}</small>
  </div>
  <div class='col-md-3'>

  </div>
  {% endif %}
{% if suggestion.getEmployerAccepted() == 'no' and suggestion.getEmployeeAccepted() == 'no' %}
  <div class='col-md-3'>

<a href="/suggestion/accept/{{user.getId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{user.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>
</div>
{% endif %}

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
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
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
fillColor: "rgba(220,220,220,0.5)",
strokeColor: "rgba(220,220,220,0.8)",
highlightFill: "rgba(220,220,220,0.75)",
highlightStroke: "rgba(220,220,220,1)",
data: vacancy_values
}

]
};

var options = {
// Boolean - Whether to animate the chart
animation: true,


// Number - Number of animation steps
animationSteps: 60,

// String - Animation easing effect
animationEasing: "easeOutQuart",

// Boolean - If we should show the scale at all
showScale: true,

// Boolean - If we want to override with a hard coded scale
scaleOverride: false,

// ** Required if scaleOverride is true **
// Number - The number of steps in a hard coded scale
scaleSteps: null,
// Number - The value jump in the hard coded scale
scaleStepWidth: null,
// Number - The scale starting value
scaleStartValue: null,

// String - Colour of the scale line
scaleLineColor: "rgba(0,0,0,.1)",

// Number - Pixel width of the scale line
scaleLineWidth: 1,

// Boolean - Whether to show labels on the scale
scaleShowLabels: true,

// Interpolated JS string - can access value
scaleLabel: "<%=value%>",

// Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
scaleIntegersOnly: true,

// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
scaleBeginAtZero: false,

// String - Scale label font declaration for the scale label
scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

// Number - Scale label font size in pixels
scaleFontSize: 12,

// String - Scale label font weight style
scaleFontStyle: "normal",

// String - Scale label font colour
scaleFontColor: "#666",

// Boolean - whether or not the chart should be responsive and resize when the browser does.
responsive: false,

// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
maintainAspectRatio: true,

// Boolean - Determines whether to draw tooltips on the canvas or not
showTooltips: true,

// Array - Array of string names to attach tooltip events
tooltipEvents: ["mousemove", "touchstart", "touchmove"],

// String - Tooltip background colour
tooltipFillColor: "rgba(0,0,0,0.8)",

// String - Tooltip label font declaration for the scale label
tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

// Number - Tooltip label font size in pixels
tooltipFontSize: 14,

// String - Tooltip font weight style
tooltipFontStyle: "normal",

// String - Tooltip label font colour
tooltipFontColor: "#fff",

// String - Tooltip title font declaration for the scale label
tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

// Number - Tooltip title font size in pixels
tooltipTitleFontSize: 14,

// String - Tooltip title font weight style
tooltipTitleFontStyle: "bold",

// String - Tooltip title font colour
tooltipTitleFontColor: "#fff",

// Number - pixel width of padding around tooltip text
tooltipYPadding: 6,

// Number - pixel width of padding around tooltip text
tooltipXPadding: 6,

// Number - Size of the caret on the tooltip
tooltipCaretSize: 8,

// Number - Pixel radius of the tooltip border
tooltipCornerRadius: 6,

// Number - Pixel offset from point x to tooltip edge
tooltipXOffset: 10,


// Function - Will fire on animation progression.
onAnimationProgress: function(){},

// Function - Will fire on animation completion.
onAnimationComplete: function(){}

};
var myNewChart = new Chart(ctx).Bar(data,options);


</script>
