<h3>{{ lang._("how_many_years_of_experience_do_you_have") }}</h3>
{{ form('employee/done', 'method': 'post') }}



{% for skills in skills %}
  <label>{{ skills|e }}</label><br/>
<input type="text" class="slider" value="5" data-slider-min="0" data-slider-max="5" data-slider-step="1" data-slider-value="0" data-slider-orientation="horizontal" data-slider-selection="after"data-slider-tooltip="show" name="{{ skills|e }}"><br/>
{% endfor %}
<p>&nbsp;</p>

    {{ submit_button('save',"class":"btn btn-sm btn-primary") }}
</form>
