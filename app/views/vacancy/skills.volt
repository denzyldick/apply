<h1>Add the weight of the skills</h1>
{{ form('location', 'method': 'post') }}

<input type="hidden" value='{{ skills|json_encode }}' name="allSkills">
{% for skills in skills %}
  <h3>{{ skills|e }}</h3>
<input type="text" class="slider" value="5" data-slider-min="0" data-slider-max="5" data-slider-step="1" data-slider-value="0" data-slider-orientation="horizontal" data-slider-selection="after"data-slider-tooltip="show" name="{{ skills|e }}">
{% endfor %}
<p>&nbsp;</p>
    {{ submit_button('Next',"class":"btn btn-sm btn-default") }}
</form>
