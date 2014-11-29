<h3>{{ lang._("how_many_years_of_experience_do_you_have") }}</h3>
{{ form('employee/done', 'method': 'post') }}



{% for skills in skills %}

    <div class="row" style="padding: 10px;
border-bottom: 1px solid #D8D7D6;">

        <div class="col-md-2"> {{ skills|e|uppercase }}</div>
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
