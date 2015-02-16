<h5 class="page-header">
    {{ lang._("we_have_found_count_vacancies") |format(suggestions|length)| upper }}
    {% if suggestions | length > 0 %}
    <p class="lead">{{ lang._("job_suggestion")  }}</p>
    {% endif %}
</h5>

<div class="row placeholders">
    {% for suggestion in suggestions %}


        {{ suggestionHelper.showMatchControlBox(suggestion,user) }}


    {% endfor %}


</div>
