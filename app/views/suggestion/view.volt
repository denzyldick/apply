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
{% endif %}
><div class="row placeholders">
    {% for suggestion in suggestions %}
        {{ suggestionHelper.showMatchControlBox(suggestion,user) }}
    {% endfor %}

</div>
