
<h4>{{lang._('what_is_your_company_information')}}</h4>
{{form("action":"/company/save","method":"post","enctype":"multipart/form-data")}}
<div class='row'>
	<div class='col-md-3' style="background-image:url('/files/{{company_foto}}');height: 150px;
background-repeat: no-repeat;
background-size: 150px 150px;
background-position: 50px;">
			
		<input  accept="image/*" type="file" name="foto">

			
	</div>
	<div class='col-md-9'>


<label>{{lang._('what_is_your_company_name')}}</label>
{{text_field("name","class":"form-control","value":name)}}
<label>{{lang._('what_is_your_company_description')}}</label>
{{text_area("description","class":"form-control","value":description)}}
<label for="">{{ lang._('website')}}</label>
{{text_field('website','class':'form-control','value':website)}}
</div>
<div id='row'>
<div class='col-md-12'>
<label>{{lang._('what_is_your_company_location')}}</label>
<fieldset class="gllpLatlonPicker" id="custom_id">
  {{ text_field("location","class":"gllpSearchField form-control","style":"float: left;width:70%","value":location)}}
<input type="button" class="gllpSearchButton btn btn-sm btn-primary" style="float: left;margin-left:5px;margin-top:2px;" value="search">

<p>  &nbsp;</p>
  <div class="gllpMap well"><img src='/img/ajax-loader.gif'/></div>
  {{hidden_field("longitude","class":"gllpLongitude","value":longitude)}}
  {{hidden_field("latitude","class":"gllpLatitude","value":latitude)}}
  {{hidden_field("zoom","class":"gllpZoom","value":zoom)}}

</fieldset>
{{submit_button(lang._('save'),"class":"btn btn-sm btn-primary")}}
</div>

</div>

</form>
