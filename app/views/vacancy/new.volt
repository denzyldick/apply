<fieldset>
    <legend>{{ lang._("vacancy") }}</legend>

    {{ form('vacancy/save', 'method': 'post') }}
    <div class="row">
        <div class="form-group">
            <label for="name"
                   class="col-sm-5 control-label">{{ lang._("what_type_of_function_are_you_looking_for") }}</label>

            <div class="col-md-5">{{ text_field("name", "class":"form-control","id":"name") }}</div>

        </div>
    </div>

    <div class="row">
        <div class="form-group"><label class="col-sm-5 control-label"
                                       for="skills">{{ lang._("skills_you_are_looking_for") }}</label>

            <div class="col-md-5">{{ text_field("skills","id":"skills", "class":"","data-role":"tagsinput","placeholder":lang._("add_skills"),"style":"width:100%!important") }}</div>
        </div>

    </div>
    <div class="row">
        <div class="form-group"><label class="col-sm-5 control-label" for="culture">{{ lang._("which_type_of_culture_are_you_looking_for") }}</label>

            <div class="col-md-5">

                <select class="form-control" name="culture">
                    {% for culture in lang._("type_work_enviroment") %}
                        <option value="{{ culture }}">{{ culture }}</option>
                    {% endfor %}
                </select></div>
        </div>
    </div>
    <div class="row">

        <fieldset class="gllpLatlonPicker" id="custom_id">


            <div class="form-group"><label class="col-sm-5 control-label" for="location">
                    <label>{{ lang._("where_is_the_vacancy_located") }}</label></label>


            </div>




            <div class="col-md-5">
                <input type="text" name="location" class="gllpSearchField form-control"
                       style="float: left;width:70%">
                <input type="button" class="gllpSearchButton btn btn-sm btn-primary"
                       style="float: left;margin-left:5px;margin-top:2px;" value="search">

                <p>&nbsp;</p>

                <div class="gllpMap well"></div>
            </div>


            <input type="hidden" name="latitude" class="gllpLatitude" value="60"/>
            <input type="hidden" name="longitude" class="gllpLongitude" value="30"/>
            <input type="hidden" name="zoom" class="gllpZoom" value="1"/>
        </fieldset>
    </div>


    {{ submit_button('save',"class":"btn btn-sm btn-primary") }}

    </form>
</fieldset>