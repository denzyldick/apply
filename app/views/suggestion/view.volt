<h5 class="page-header">
    {#{{ amount_text | upper }}#}
    {{ vacancy.getFunction() |upper }}
    <p class="lead">{{ lang._("individuals_matching_this_vacancy") }}</p>

</h5
{% if(suggestions|length == 0) %}
    <div class="row">
        <div class="col-md-5 col-md-offset-4">
            <a class="btn btn-large btn-primary disabled"><span
                        class="glyphicon glyphicon-warning-sign"></span> {{ lang._("your_suggestion_will_be_displayed_here") }}
            </a>
        </div>
    </div>
{% endif %}>

<div class="row placeholders">
    {% for suggestion in suggestions %}
        <div class="col-xs-6 col-sm-3 placeholder text-center suggestion well" style="margin: 10px;">
            <a href="/suggestion/profile/{{ suggestion.getUserId() }}/{{ suggestion.getId() }}">
                <canvas id="donuts{{ suggestion.getId() }}" height="200" width="200"></canvas>

                <span class="percent-indicator">{{ suggestion.getPercent() }}%</span>
            </a> <h4>{{ suggestion.vacancy.getFunction() }}</h4>

            <br/>

            <a href="/suggestion/accept/{{ suggestion.getId() }}" class="btn btn-small btn-primary"><span
                        class="glyphicon glyphicon-ok"></span> {{ this.lang._("accept") }}</a>&nbsp;<a
                    href="/suggestion/decline/{{ suggestion.getId() }}" class="btn btn-small btn-danger"><span
                        class="glyphicon glyphicon-remove"></span> {{ this.lang._("decline") }}</a>
        </div>

        <script>
            var pieData = [
                {
                    value: {{suggestion.getPercent()}},
                    color: "rgb(49, 151, 199)"
                },
                {
                    value: 100 -{{suggestion.getPercent()}},
                    color: "#fff"
                }
            ];

            var ctx = document.getElementById("donuts{{suggestion.getId()}}").getContext("2d");
            ctx.fillText({{suggestion.getPercent()}} +"%", null, null);


            var myPie = new Chart(ctx).Doughnut(pieData, {percentageInnerCutout: 60});</script>
    {% endfor %}


</div>
