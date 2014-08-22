<h1 class="page-header">
      {{ amount }}
        <p class="lead">{{ lang._("job")}} {{ lang._("job_suggestion")}}</p>
      </h1>

      <div class="row placeholders">
{% for suggestion in suggestions %}
<div class="col-xs-6 col-sm-3 placeholder text-center masuggestiontch" style="margin: 10px;"  >
          <img src="/img/work.jpg" class="center-block  img-thumbnail" alt="Generic placeholder thumbnail" style="
width: 200px!important;
height: 200px;
cursor:pointer;
" data-toggle="modal" data-target="#{{suggestion.getId()}}"> <h4>{{suggestion.vacancy.getFunction() }}</h4>
          <span class="text-muted">{{suggestion.getPercent()}}% suggestion</span>
          <br/>
          <a href="/suggestion/accept/{{suggestion.getId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{suggestion.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="{{suggestion.getId()}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="myModalLabel">{{suggestion.vacancy.getFunction() }}</h4>
              </div>
              <div class="modal-body"  style='overflow-y:auto'>
                {% set specifications =  suggestion.vacancy.getSpecification() %}


                   <canvas id="chart{{suggestion.vacancy.getId()}}" style="width:300px;float:left"></canvas>

              <div class=well style='float:right;margin-right:52px;'>
                <label>{{lang._('skills_you_need')}}</label>
                <ol >
          
                {% for specification in specifications %}
                   <li>{{specification.skills.getName()}}</li>
                {% endfor %}
              </ol></div>
                          <script>

                    // Get the context of the canvas element we want to select
var ctx = document.getElementById("chart{{suggestion.vacancy.getId()}}").getContext("2d");
var data = [
{% for specification in specifications %}
  {
    value:{{specification.getPercent()}},
    color: "#" + Math.random().toString(16).slice(2, 8),
    highlight: "#" + Math.random().toString(16).slice(2, 8),
    label:'{{specification.skills.getName()}}'

  }, 
{% endfor %}
 ];
/**
var data = [
    {
        value: 30,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "PHP"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Location"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Company"
    }

]**/
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
var myNewChart = new Chart(ctx).Pie(data,options);
                    </script>
                    <div style="clear:both">
                 <label>{{lang._('somewhere_here')}}</label><br/> 
                 <img src="http://maps.google.com/maps/api/staticmap?size=600x300&path=fillcolor:0x00FF00|weight:1|color:0xFFFFFF|enc:eay{H{_lZ@GD?@FCFCAAE&path=fillcolor:0x00FF00|weight:1|color:0xFFFFFF|enc:shu|H{_lZdAeeBrEudB|IscBfNebBnRg`BrVy}ArZ{zAp^owAfb@wsAze@qoAdi@_kAjl@_fAho@u`A~q@c{@nt@cu@tv@_o@rx@qh@fz@_b@r{@e[t|@gTl}@eM|}@eF`~@?z}@dFn}@dMt|@fTr{@d[fz@~a@rx@ph@tv@~n@nt@bu@~q@b{@ho@t`Ajl@~eAdi@~jAxe@poAhb@vsAn^nwArZzzArVx}AnRf`BfNdbB~IrcBpEtdBdAdeBeAbeBqEtdB_JtcBgNdbBoRd`BsVx}AsZzzAo^pwAib@vsAye@noAei@~jAkl@~eAio@t`A_r@b{@ot@du@uv@~n@sx@ph@gz@|a@s{@d[u|@fTo}@fM{}@bFa~@?}}@cFm}@gMu|@gTs{@e[gz@}a@sx@qh@uv@_o@ot@eu@_r@c{@io@u`Akl@_fAei@_kA{e@ooAgb@wsAq^qwAsZ{zAsVy}AoRe`BgNebB}IucBsEudBeAceB&sensor=true" border="0" style='width:100%;height:300px' class='well'/>
               </div>
              </div>
              <div class="modal-footer">


                <a href="/user/{{suggestion.getUserId()}}" class="btn btn-small btn-primary"><span style="color: #Fff;" class="glyphicon glyphicon-ok"></span> {{this.lang._("accept")}}</a>&nbsp;<a href="/suggestion/remove/{{suggestion.getId()}}" class="btn btn-small btn-danger"><span class="glyphicon glyphicon-remove" style="color:#fff;" ></span> {{this.lang._("decline")}}</a>

              </div>
            </div>
          </div>
        </div>

{% endfor %}


      </div>
