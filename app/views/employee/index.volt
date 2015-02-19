<h5 class="page-header">
    {{ lang._("you_have_count_matches") | format(suggestion | length) |upper }}
    {% if matches | length > 0 %}
        <p class="lead">{{ lang._('you_can_now_connect') }}</p>
    {% endif %}
</h5>

<div class="row placeholders">
    {% for suggestion in matches %}
        {{ suggestionHelper.showMatchControlBox(suggestion,user) }}
    {% endfor %}


</div>
