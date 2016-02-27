<h5 class="page-lead">{{ lang._("how_many_years_of_experience_do_you_have") }}</h5>
{{ form('employee/done', 'method': 'post') }}



{% for name,value in skills %}

    <div class="row" style="padding: 10px;
border-bottom: 1px solid #D8D7D6;">

        <div class="col-md-2"> {{ name|e|uppercase }}</div>
        <div class="col-md-5"><input type="text" class="slider" id="{{ name }}" value="0" data-slider-min="0"
                                     data-slider-max="50" data-slider-step="1" data-slider-value="{{ value }}"
                                     data-slider-orientation="horizontal" data-slider-selection="after"
                                     data-slider-tooltip="hide" name="{{ name|e }}">
        </div>
        <div class="col-md-1"><span id="{{ name }}Value" class="badge badge-info">{{ value }}</span></div>
    </div>

    <script>

        $("#{{ name }}").on("slide", function (slideEvt) {
            $("#{{ name }}Value").text(slideEvt.value);
        });
    </script>

{% endfor %}
<p>&nbsp;</p>

{{ submit_button('save',"class":"btn btn-sm btn-primary") }}
</form>
