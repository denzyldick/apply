
<h4>Your company information</h4>
{{form("action":"/company/save","method":"post")}}
<label>Company name</label>
{{text_field("name","class":"form-control","value":name)}}
<label>Description</label>
{{text_area("description","class":"form-control","value":description)}}
<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>

<script src="/js/jquery-gmaps-latlon-picker.js"></script>
<label>Where is the company located</label>
<fieldset class="gllpLatlonPicker" id="custom_id">
  {{ text_field("location","class":"gllpSearchField form-control","style":"float: left;width:70%","value":location)}}
<input type="button" class="gllpSearchButton btn btn-sm btn-primary" style="float: left;margin-left:5px;margin-top:2px;" value="search">

<p>  &nbsp;</p>
  <div class="gllpMap well">Loading Google maps...</div>
  {{hidden_field("longitude","class":"gllpLongitude","value":longitude)}}
  {{hidden_field("latitude","class":"gllpLatitude","value":latitude)}}
  {{hidden_field("zoom","class":"gllpZoom","value":zoom)}}

</fieldset>

{{submit_button("save","class":"btn btn-sm btn-primary")}}
</form>
