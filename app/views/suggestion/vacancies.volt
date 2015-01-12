<h5 class="page-header">
    {{ amount | upper }}
    <p class="lead">{{ lang._("job_suggestion") |upper }}</p>
</h5>

<div class="row placeholders">
    {% for suggestion in suggestions %}


        {{ suggestionHelper.showMatchControlBox(suggestion,user) }}


    {% endfor %}


</div>
