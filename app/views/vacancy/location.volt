<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>

<script src="/js/jquery-gmaps-latlon-picker.js"></script>
<h3>Where is the vacancy located ?</h3>

<fieldset class="gllpLatlonPicker" id="custom_id">
	<input type="text" class="gllpSearchField form-control" style="float: left;width:70%">
	<input type="button" class="gllpSearchButton btn btn-sm btn-primary" style="float: left;margin-left:5px;margin-top:2px;" value="search"><p>  &nbsp;</p>
	<div class="gllpMap well">Google Maps</div>
	<input type="hidden" class="gllpLatitude" value="60"/>
	<input type="hidden" class="gllpLongitude" value="30"/>
	<input type="hidden" class="gllpZoom" value="1"/>
</fieldset>
{{ submit_button('Next',"class":"btn btn-sm btn-default") }}
