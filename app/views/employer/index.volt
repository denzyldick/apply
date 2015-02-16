<h4 class="page-header">
    {{ lang._('you_have_count_matches') |format(suggestions |length) }}
    {% if(suggestions |length >0) %}
    <p class="lead">{{ lang._('you_can_now_connect') }}</p>
    {% endif %}
</h4>
{% if(suggestions|length == 0) %}
    <div class="row">
        <div class="col-md-5 col-md-offset-4">
            <a class="btn btn-large btn-primary disabled"><span
                        class="glyphicon glyphicon-warning-sign"></span> {{ lang._("your_matches_will_be_displayed_here") }}
            </a>
        </div>
    </div>
{% endif %}

<div class="row placeholders">
    {% for suggestion in suggestions %}
        {{ suggestionHelper.showMatchControlBox(suggestion,user) }}
    {% endfor %}

</div>
