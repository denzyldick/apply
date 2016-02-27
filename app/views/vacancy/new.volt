<form method="post">
    <div class="well">
        {#<h5 class="page-header">{{ lang._("create_a_new_vacany") }}#}
            {#<p class="lead">{{ lang._("fill_it_in") }}</p>#}
        {#</h5>#}

        <div class="row">
            <div class="col-md-12">
                <label for="name">{{ lang._("name_of_the_job") }}</label><input name="name" value={{ vacancy.getFunction() }}" type="text"
                                                                                class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <label for="skills">{{ lang._("skills_needed") }}</label><input type="text" name="skills" class="form-control"
                                                                                data-role="tagsinput"
                                                                                placeholder="{{ lang._("php_html") }}">
            </div>

        </div>


            <div class="row">
                <label class="col-md-12">{{ lang._("contract_type") }}</label>
            </div>
            <div class="row">
                <div class="col-md-12 checkbox">
                    <label>
                        <input type="checkbox" {% if vacancy.getFulltime() == 1 %} checked {% endif %} name="fulltime" value="1">
                        {{ lang._("fulltime") }}
                    </label>
                    <label>
                        <input type="checkbox" name="parttime" {% if vacancy.getParttime() == 1 %} checked {% endif %}  value="1">
                        {{ lang._("parttime") }}
                    </label>
                    <label>
                        <input type="checkbox" name="freelance" {% if vacancy.getFreelance() == 1 %} checked {% endif %}  value="1">
                        {{ lang._("freelance") }}
                    </label>

                </div>
            </div>

        <div class="row">
            <div class="col-md-12"><label for="description">{{ lang._("short_description_max_1500") }}</label><textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        class="form-control">{{ vacancy.getDescription() }}</textarea>
            </div>
        </div> <div class="row">
            <div class="col-md-12"><label for="job_benefits">{{ lang._("job_benefits_max_1500") }}</label><textarea
                        name="job_benefits"
                        id="job_benefits"
                        cols="30"
                        rows="10"
                        class="form-control" maxlength="1500">{{ vacancy.getJobBenefits() }}</textarea>
            </div>
        </div>
        <fieldset class="gllpLatlonPicker" id="custom_id">
            <div class="row">

                <div class="col-md-12">
                    <label for="location">{{ lang._("where_is_it_located") }}</label>
                    <input type="text" id="location" value="{{ vacancy.location.getLocation() }}" name="location" class="gllpSearchField form-control">
                    <input type="hidden" class="gllpSearchButton">
                </div>

            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="gllpMap well"></div>
                    <input type="hidden" name="latitude" class="gllpLatitude" value="{{ vacancy.location.getLatitude() }}"/>
                    <input type="hidden" name="longitude" class="gllpLongitude" value="{{ vacancy.location.getLongitude() }}"/>
                    <input type="hidden" name="zoom" class="gllpZoom" value="{{ vacancy.location.getZoom() }}"/>
                </div>
            </div>
        </fieldset>
        <div class="row">
            <div class="col-md-12">
                <input type="hidden" value="{{ vacancy.getId() }}" name="vacancy_id"/>
                <input type="submit" value="{{ lang._("save") }}" class="btn btn-primary btn-large">
            </div>
        </div>
    </div>

</form>