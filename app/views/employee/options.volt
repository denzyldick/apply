<form action="/employee/options" method="post" class="well">
    <div class="row">
        <div class="col-md-3">
            <div class="row">
                <img src="http://placehold.it/200x100"/>
            </div>
            <div class="row">
                <div class="col-md-3">


                </div>
            </div>
        </div>
        <div class="form-group col-md-9">
            <label for="character">{{ lang._('which_skills_do_have') }}</label>
            {#{{ text_field("skills","value":skills,"id":"character","class":"form-control col-md-3","data-role":"tagsinput","placeholder":lang._("add_your_skills")) }}#}

            <input type="text" name="skills" value="{{ skills }}" data-role="tagsinput"/>
        </div>
    </div>
    <div class="row">
        <div class="form-group col-md-12">
            <label for="samenvatting" class="col-md-12">{{ lang._("short_summary") }}</label>
            <textarea name="summary" class="form-control" cols="30" class="col-md-12">{{ user.getSummary() }}</textarea>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <label>{{ lang._('where_do_you_live') }}</label>
            <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
            <script src="/js/jquery-gmaps-latlon-picker.js"></script>
        </div>
    </div>
    <fieldset class="gllpLatlonPicker" id="custom_id">
        <div class="row">
            <div class="col-md-6"><input type="text" name="location" value="{{ location }}"
                                         class="gllpSearchField form-control"
                ></div>
            <div class="col-md-2"><select name="travel_distance" class="form-control col-md-2 pull-right">
                    <option>{{ lang._('max_travel_distance') }}</option>
                    <option value='20' {{ travel_distance == 20 ? 'selected' : '' }} >
                        20 {{ lang._('distance_metric') }}</option>
                    <option value='60' {{ travel_distance == 60 ? 'selected' : '' }} >
                        60 {{ lang._('distance_metric') }}</option>
                    <option value='80' {{ travel_distance == 80 ? 'selected' : '' }} >
                        80 {{ lang._('distance_metric') }}</option>
                </select></div>
            <div class="col-md-3">
                <input type="button" class="gllpSearchButton btn btn-large btn-default"
                       value="{{ lang._("search_location") | upper }}">
            </div>
        </div>
        <div class="row">
            <p></p>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="gllpMap well"></div>
                <input type="hidden" name="latitude" class="gllpLatitude" value="{{ latitude }}"/>
                <input type="hidden" name="longitude" class="gllpLongitude" value="{{ longitude }}"/>
                <input type="hidden" name="zoom" class="gllpZoom" value="{{ zoom }}"/>
            </div>
        </div>
    </fieldset>
    <div class="row">
        <div class="col-md-2">
            <input type="submit" value="{{ lang._("save") | upper }}" class="btn btn-small btn-primary"/>
        </div>
        <div class="col-md-2"><a href="/employee/education" class="btn btn-large btn-default">
                {% if user.education | length < 1 %}
                <i class="fa fa-graduation-cap"></i>
            {% else %}
                <span class="badge">{{ user.education | length }}</span>
            {% endif %}
                {{ lang._("education") |upper }}
            </a>
        </div>
        <div class="col-md-2">
            <a href="/employee/work" class="btn btn-large btn-default">
                {% if user.work_experience | length < 1 %}
                    <i class="fa fa-briefcase"></i>
                {% else %}
                    <span class="badge">{{ user.work_experience | length }}</span>
                {% endif %}
                {{ lang._("work_experience") | upper }}</a>
        </div>
    </div>
</form>
<form action="/employee/photo"
      class="dropzone"
      id="my-awesome-dropzone"></form>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.2.0/min/dropzone.min.js"></script>