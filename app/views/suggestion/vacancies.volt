<h1 class="page-header">
      {{ amount }}
        <p class="lead">{{ lang._("job")}} {{ lang._("job_suggestion")}}</p>
      </h1>

      <div class="row placeholders">
{% for suggestion in suggestions %}

 {% set company = suggestion.vacancy.user.company %}


<div class="col-xs-6 col-sm-3 placeholder text-center masuggestiontch well" style="margin: 10px;width: 259px;"  >
     <a href="/suggestion/vacancy/{{suggestion.vacancy.getId()}}">
       <canvas id="donuts{{suggestion.vacancy.getId()}}"  height="200" width="200" ></canvas>

</a>
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

  var ctx = document.getElementById("donuts{{suggestion.vacancy.getId()}}").getContext("2d");
  ctx.fillText({{suggestion.getPercent()}} + "%",null,null);


    var myPie = new Chart(ctx).Doughnut(pieData,{percentageInnerCutout : 60});</script>

   <h4>{{suggestion.vacancy.getFunction() }}</h4>
    <small>{{  suggestion.vacancy.user.company.getName() }}</small>
          <br/>
          <a href="/suggestion/accept/{{suggestion.getId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{suggestion.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>
        </div>

<script>
$(window).bind("load", function() {

    var map{{suggestion.getId()}} = new google.maps.Map(document.getElementById("maps{{suggestion.getId()}}"),
        {
          center: new google.maps.LatLng({{suggestion.vacancy.location.getLatitude()}},{{suggestion.vacancy.location.getLongitude()}}),
          zoom:{{suggestion.vacancy.location.getZoom()}} ,
          disableDefaultUI: true
        });

           google.maps.event.addDomListener(window, 'load',map{{suggestion.getId()}});

               var populationOptions = {
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map{{suggestion.getId()}},
                center:  new google.maps.LatLng({{suggestion.vacancy.location.getLatitude()}},{{suggestion.vacancy.location.getLongitude()}}),
                radius: 100
              };
              // Add the circle for this city to the map.
              cityCircle = new google.maps.Circle(populationOptions);

  });



$('#modal{{suggestion.getId()}}').on('shown', function () {
    alert('showing');
    google.maps.event.trigger(map{{suggestion.getId()}}, "resize");
});

</script>
        <!-- Modal -->
        <div class="modal fade" id="modal{{suggestion.getId()}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="myModalLabel">{{suggestion.vacancy.getFunction() }}</h4>
              </div>
              <div class="modal-body"  style='overflow-y:auto'>
                {% set specifications =  suggestion.vacancy.getSpecification() %}
                {% set user_suggested =  suggestion.user.getSpecification() %}


                   <canvas id="chart{{suggestion.vacancy.getId()}}" style="width: 100%!important; float: left; height: 228px!important;" class='well'></canvas>



                    <div style="clear:both">

                 <label>{{lang._('somewhere_here')}}</label><br/>

<div id="maps{{suggestion.getId()}}" style='width:100%;height:300px;' ></div>
               </div>
              </div>
              <div class="modal-footer">


                <a href="/suggestion/accept/{{suggestion.getUserId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{suggestion.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>

              </div>
            </div>
          </div>
        </div>

        <script>

  // Get the context of the canvas element we want to select
var ctx = document.getElementById("chart{{suggestion.vacancy.getId()}}").getContext("2d");

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
var  employee_values = [
{% for user in user_suggested %}

{{ user.getPercent()}},
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
},
{
label: "My Second dataset",
fillColor: "rgba(151,187,205,0.5)",
strokeColor: "rgba(151,187,205,0.8)",
highlightFill: "rgba(151,187,205,0.75)",
highlightStroke: "rgba(151,187,205,1)",
data: employee_values
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

{% endfor %}


      </div>
