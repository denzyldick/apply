<form action="/employee/options" method="post" class="well">
    <label>{{ lang._('which_skills_do_have') }}</label>
    {{ text_field("skills", "size" : 32,"class":"form-control","data-role":"tagsinput","placeholder":"Add skills","style":"width:100%",'value':skills) }}

    <!--<label>{{ lang._('what_kind_of_person_are_you') }}</label>
{{ text_field("character", "size" : 32,"class":"form-control","data-role":"tagsinput","placeholder":"Add skills","style":"width:100%") }}-->

    <label>{{ lang._('which_kind_of_work_enviroment_do_you_prefer') }}</label><br/>
    <select name="work_enviroment" class="form-control">
        {% for type in lang._('type_work_enviroment') %}
            <option value='{{ type }}'>{{ type }}</option>
        {% endfor %}

    </select><br/>

    <label class=" control-label"
           for="type_personality">{{ lang._("which_type_of_personality") }}</label>

    <div style="height: 150px;overflow-y: scroll">
        <ul class="checkbox-grid">

            {% for culture in personalities %}
                        <li><input name="type_personality[]" id="{{ culture }}" type="checkbox" value="{{ culture }}"/> <label for="{{ culture }}">{{ lang._(culture) }}</label></li>
                        </label>
                    {% endfor %}
        </ul>

    </div>

    <label>{{ lang._('where_do_you_live') }}</label>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>

    <script src="/js/jquery-gmaps-latlon-picker.js"></script>

    <fieldset class="gllpLatlonPicker" id="custom_id">
        <input type="text" name="location" value="{{ location }}" class="gllpSearchField form-control"
               style="float: left;width:70%">
        <input type="button" class="gllpSearchButton btn btn-sm btn-primary"
               style="float: left;margin-left:5px;margin-top:2px;" value="search">
        <select name="travel_distance" class="form-control" style="max-width:180px;margin-left:5px;">
            <option>{{ lang._('max_travel_distance') }}</option>
            <option value='20' {{ travel_distance == 20 ? 'selected' : '' }}  >
                20 {{ lang._('distance_metric') }}</option>
            <option value='60' {{ travel_distance == 60 ? 'selected' : '' }} >
                60 {{ lang._('distance_metric') }}</option>
            <option value='80' {{ travel_distance == 80 ? 'selected' : '' }} >
                80 {{ lang._('distance_metric') }}</option>
        </select>

        <p>  &nbsp;</p>

        <div class="gllpMap well">Google Maps</div>
        <input type="hidden" name="latitude" class="gllpLatitude" value="{{ latitude }}"/>
        <input type="hidden" name="longitude" class="gllpLongitude" value="{{ longitude }}"/>
        <input type="hidden" name="zoom" class="gllpZoom" value="{{ zoom }}"/>
    </fieldset>

    <p>&nbsp;</p>
    <input type="submit" value="save" class="btn btn-small btn-primary"/>
</form>
