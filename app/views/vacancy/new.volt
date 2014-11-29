<fieldset>
    <legend>{{ lang._("vacancy") }}</legend>

    {{ form('vacancy/save', 'method': 'post') }}
    <div class="row">
        <div class="form-group">
            <label for="name" class="col-sm-5 control-label">What is the name of your job?</label>

            <div class="col-md-5">{{ text_field("name", "class":"form-control","id":"name") }}</div>

        </div>
    </div>

    <div class="row">
        <div class="form-group"><label class="col-sm-5 control-label"
                                       for="skills">{{ lang._("skills_you_are_looking_for") }}</label>

            <div class="col-md-5">{{ text_field("skills","id":"skills", "class":"form-control","data-role":"tagsinput","placeholder":"Add skills") }}</div>
        </div>

    </div>
    <label>Where is the vacancy located ?</label>
    <fieldset class="gllpLatlonPicker" id="custom_id">
        <input type="text" name="location" class="gllpSearchField form-control" style="float: left;width:70%">
        <input type="button" class="gllpSearchButton btn btn-sm btn-primary"
               style="float: left;margin-left:5px;margin-top:2px;" value="search">

        <p>  &nbsp;</p>

        <div class="gllpMap well">Google Maps</div>
        <input type="hidden" name="latitude" class="gllpLatitude" value="60"/>
        <input type="hidden" name="longitude" class="gllpLongitude" value="30"/>
        <input type="hidden" name="zoom" class="gllpZoom" value="1"/>
    </fieldset>
    <p>&nbsp;</p>
    {{ submit_button('save',"class":"btn btn-sm btn-primary") }}
    {#<span#}
    {#class='glyphicon glyphicon-asterisk'><span>&nbsp; {{ lang._('you_cant_edit_the_vacancy_after_saving_it') }}#}
    </form>
</fieldset>