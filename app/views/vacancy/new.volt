
<h1>Create a new vacancy</h1>
{{ form('vacancy/save', 'method': 'post') }}
    <label>What is the name of your job?</label>
    {{ text_field("name", "size": 32,"class":"form-control") }}
    <label>What kind of skills are you looking for?</label><br/>
    {{ text_field("skills", "size" : 32,"class":"form-control","data-role":"tagsinput","placeholder":"Add skills","style":"width:100%") }}
<label>Where is the vacancy located ?</label>
<fieldset class="gllpLatlonPicker" id="custom_id">
  <input type="text" name="location" class="gllpSearchField form-control" style="float: left;width:70%">
  <input type="button" class="gllpSearchButton btn btn-sm btn-primary" style="float: left;margin-left:5px;margin-top:2px;" value="search"><p>  &nbsp;</p>
  <div class="gllpMap well">Google Maps</div>
  <input type="hidden" name="latitude" class="gllpLatitude" value="60"/>
  <input type="hidden" name="longitude" class="gllpLongitude" value="30"/>
  <input type="hidden" name="zoom" class="gllpZoom" value="1"/>
</fieldset>
<p>&nbsp;</p>
{{ submit_button('save',"class":"btn btn-sm btn-primary") }}<span class='glyphicon glyphicon-asterisk'><span>&nbsp; {{lang._('you_cant_edit_the_vacancy_after_saving_it')}}
</form>
