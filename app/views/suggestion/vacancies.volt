<h4 class="page-header">
    {{ amount | upper}}
    <p class="lead">{{ lang._("job") }} {{ lang._("job_suggestion") }}</p>
</h4>

<div class="row placeholders">
    {% for suggestion in suggestions %}

        {% set company = suggestion.vacancy.user.company %}


        <div class="col-xs-6 col-sm-3 placeholder text-center  well" style="margin: 10px;width: 259px;">

            <a href="/suggestion/vacancy/{{ suggestion.vacancy.getId() }}/{{ suggestion.getId() }}">
                <canvas id="donuts{{ suggestion.vacancy.getId() }}" height="200" width="200"></canvas>

            </a>

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

                var ctx = document.getElementById("donuts{{suggestion.vacancy.getId()}}").getContext("2d");
                ctx.fillText({{suggestion.getPercent()}} +"%", null, null);


                var myPie = new Chart(ctx).Doughnut(pieData, {percentageInnerCutout: 60});</script>
            <span class="percent-indicator">{{ suggestion.getPercent() }}%</span>
            <h4>{{ suggestion.vacancy.getFunction() |uppercase |e }}</h4>
            <small>{{ suggestion.vacancy.user.company.getName()|escape }}</small>
            <br/>
            <a href="/suggestion/accept/{{ suggestion.getId() }}" class="btn btn-small btn-primary"><span
                        class="glyphicon glyphicon-bell"></span> {{ this.lang._("nudge") }}</a>&nbsp;<a
                    href="/suggestion/remove/{{ suggestion.getId() }}" class="btn btn-small btn-default"><span
                        class="glyphicon glyphicon-remove"></span> {{ this.lang._("decline") }}</a>
        </div>




    {% endfor %}


</div>
