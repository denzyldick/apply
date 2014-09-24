<h3>How important are each of this skills?</h3>
{{ form('vacancy/finish', 'method': 'post') }}

<input type="hidden" value='{{ skills|json_encode }}' name="skills">
<input type="hidden" value='{{ vacancy_id }}' name="vacancy_id"/>
{% for skills in skills %}
  <label>{{ skills|e }}</label><br/>
<small>Less important</small>&nbsp;&nbsp;&nbsp;
<input type="text" class="slider" value="5" data-slider-min="0" data-slider-max="5" data-slider-step="1" data-slider-value="0" data-slider-orientation="horizontal" data-slider-selection="after" data-slider-tooltip="hide" name="{{ skills|e }}">
&nbsp;&nbsp;&nbsp;<small>Very important</small><br/>
<hr/>
{% endfor %}
<p>&nbsp;</p>

    {{ submit_button('save',"class":"btn btn-sm btn-primary") }}
</form>
