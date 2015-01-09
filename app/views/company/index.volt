<fieldset>
    <legend>{{ lang._('what_is_your_company_information') }}</legend>


    {{ form("action":"company/save","method":"post","enctype":"multipart/form-data") }}
    <div class='row'>


        <div id="company-logo-drop-zone" class='col-md-3 glyphicon glyphicon-picture'
             style="background-image:url('/files/{{ company_foto }}');height: 150px;
                     background-repeat: no-repeat;
                     background-size: 150px 150px;
                     background-position: 50px;
                     font-size:200px;
                     cursor:pointer">

        </div>

        <div class='col-md-9'>


            <label>{{ lang._('what_is_your_company_name') }}</label>
            {{ text_field("name","class":"form-control","value":name) }}
            <label>{{ lang._('what_is_your_company_description') }}</label>
            {{ text_area("description","class":"form-control textarea","value":description) }}
            <div class="col-md-4"><label for="">{{ lang._('website') }}</label>
                {{ text_field('website','class':'form-control','value':website) }}
            </div>
            <div class="col-md-4">
                <label>{{ lang._("company_culture") }}</label>
                <select name="work_enviroment" class="form-control">
                    {% for type in lang._('type_work_enviroment') %}
                        <option value='{{ type }}' {{ work_enviroment == type ? "selected":"" }}>{{ type }}</option>
                    {% endfor %}

                </select>
            </div>

        </div>
        <div id='row'>
            <div class="col-md-3"></div>
            <div class='col-md-9'>
                <label>{{ lang._('what_is_your_company_location') }}</label>
                <fieldset class="gllpLatlonPicker" id="custom_id">
                    {{ text_field("location","class":"gllpSearchField form-control","style":"float: left;width:70%","value":location) }}
                    <input type="button" class="gllpSearchButton btn btn-sm btn-primary"
                           style="float: left;margin-left:5px;margin-top:2px;" value="search">

                    <p>  &nbsp;</p>

                    <div class="gllpMap well " style="text-align: center;"><img src='/img/ajax-loader.gif'/></div>
                    {{ hidden_field("longitude","class":"gllpLongitude","value":longitude) }}
                    {{ hidden_field("latitude","class":"gllpLatitude","value":latitude) }}
                    {{ hidden_field("zoom","class":"gllpZoom","value":zoom) }}

                </fieldset>
                {{ submit_button(lang._('save'),"class":"btn btn-sm btn-primary") }}
            </div>

        </div>

        </form>
</fieldset>

<script>
    $(document).ready(function () {
        $("#company-logo-drop-zone").dropzone({
            /* options */
            clickable: true,
            url: "/file/post"
        });
    });

</script>