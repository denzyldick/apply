<h3>{{ lang._('how_many_years_of_experience_are_you_looking_for') }}</h3>
{{ form('vacancy/finish', 'method': 'post') }}

<input type="hidden" value='{{ skills|json_encode }}' name="skills">
<input type="hidden" value='{{ vacancy_id }}' name="vacancy_id"/>
{% for skills in skills %}
    <div class="row" style="padding: 10px;
border-bottom: 1px solid #D8D7D6;">

        <div class="col-md-2"> {{ skills|escape|uppercase }}</div>
        <div class="col-md-5"><input type="text" class="slider" id="{{ skills }}" value="0" data-slider-min="0"
                                     data-slider-max="50" data-slider-step="1" data-slider-value="0"
                                     data-slider-orientation="horizontal" data-slider-selection="after"
                                     data-slider-tooltip="hide" name="{{ skills|e }}">
        </div>
        <div class="col-md-1"><span id="{{ skills }}Value" class="badge badge-info"></span></div>
    </div>

    <script>

        $("#{{ skills }}").on("slide", function (slideEvt) {
            $("#{{ skills }}Value").text(slideEvt.value);
        });
    </script>
{% endfor %}
<p>&nbsp;</p>

{{ submit_button('save',"class":"btn btn-sm btn-primary") }}
</form>
