<script type="text/javascript" src="/js/bootstrap-tagsinput.min.js"></script>
<link rel="stylesheet" href="/css/bootstrap-tagsinput.css" />
<script>
//prevent the user from hitting enter
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

</script>
<style>
.bootstrap-tagsinput
{
  width:100%;
}
</style>
<h1>Create a new vacancy</h1>
{{ form('save', 'method': 'post') }}


    <label>What is the name of your job?</label>
    {{ text_field("name", "size": 32,"class":"form-control") }}
    <label>What kind of skills are you looking for?</label><br/>
    {{ text_field("skills", "size" : 32,"class":"form-control","data-role":"tagsinput","placeholder":"Add skills","style":"width:100%") }}



<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>

<script src="/js/jquery-gmaps-latlon-picker.js"></script>
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
{{ submit_button('save',"class":"btn btn-sm btn-default") }}
</form>
