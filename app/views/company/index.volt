<h5 class="page-header">
    {{ lang._('what_is_your_company_information') |upper }}
    <p class="lead">{{ lang._("add_your_information") }}</p>
</h5>


{{ form("action":"company/save","method":"post","enctype":"multipart/form-data") }}


<div class='col-md-3'
     style="background-image:url('/files/{{ company_foto }}');height: 150px;
             background-repeat: no-repeat;
             background-size: 150px 150px;
             background-position: 50px;
             ">
    {#<div id="logo-preview"></div>#}
    {#<a class="btn btn-sm btn-primary" id="company-logo-drop-zone"><span class="glyphicon glyphicon-picture"></span> {{ lang._("upload_logo") }}</a>#}
    <div class="fileUpload btn btn-sm btn-primary">
        <span>{{ lang._("upload") }}</span>
        <input type="file" name="file" class="upload"/>
    </div>
    <style>
        .fileUpload {
            position: relative;
            overflow: hidden;
            margin-bottom: 10px;
        }

        .fileUpload input.upload {
            position: absolute;
            top: 0;
            right: 0;
            margin: 0;
            padding: 0;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            filter: alpha(opacity=0);
        }
    </style>
</div>
<div class="form-group">
    <label class="col-md-3 " for="name">{{ lang._('what_is_your_company_name') }}</label>

    <div class="col-md-5">
        {{ text_field("name","class":"form-control","value":name,"id":"name") }}
    </div>
</div>
<div class="form-group">
    <label class="col-md-3" for="description">{{ lang._('what_is_your_company_description') }}</label>

    <div class="col-md-5">
        {{ text_area("description","class":"form-control textarea","value":description,"id":"description") }}
    </div>
</div>
<div class="form-group"><label class="col-md-3" for="website">{{ lang._("website") }}</label>

    <div class="col-md-5">
        {{ text_field('website','class':'form-control','value':website,"id":"website") }}
    </div>
</div>
<div class="form-group">
    <label class="col-md-3" for="culture">{{ lang._("company_culture") }}</label>

    <div class="col-md-5">
        <select name="work_enviroment" class="form-control" id="culture">
            {% for type in lang._('type_work_enviroment') %}
                <option value='{{ type }}' {{ work_enviroment == type ? "selected":"" }}>{{ type }}</option>
            {% endfor %}

        </select>
    </div>
</div>

<div class="form-group gllpLatlonPicker" id="custom_id">

    <label class="col-md-3 col-md-offset-3" for="location">{{ lang._('what_is_your_company_location') }}</label>

    <div class="col-md-5">

        {{ text_field("location","class":"gllpSearchField form-control","style":"float: left;width:70%","value":location,"id":"location") }}
        <input type="button" class="gllpSearchButton btn btn-sm btn-primary"
               style="float: left;margin-left:5px;margin-top:2px;" value="{{ lang._("search") }}">
    </div>
    <div class="row">

        <div class="gllpMap well col-md-5 " style="text-align: center;"><img src='/img/ajax-loader.gif'/></div>
        {{ hidden_field("longitude","class":"gllpLongitude","value":longitude) }}
        {{ hidden_field("latitude","class":"gllpLatitude","value":latitude) }}
        {{ hidden_field("zoom","class":"gllpZoom","value":zoom) }}
    </div>
</div>

</div>


<div class="row">
    <div class="col-md-4 col-md-offset-2"><input type="submit" value="{{ lang._("save") }}"
                                                 class="btn btn-primary btn-sm"/></div>
</div>


</form>


{#<script>#}
    {#$(document).ready(function () {#}
        {#$("#company-logo-drop-zone").dropzone({#}
            {#/* options */#}
            {#maxFiles:1,#}
            {#clickable: true,#}
            {#previewsContainer:"#logo-preview",#}
            {#url: "/file/post",#}
            {#addRemoveLinks:false,#}
            {#uploadMultiple:false,#}
            {#acceptedFiles:'image/*',#}
            {#dictRemoveFile:false,#}
            {#thumbnailWidth:300,#}
            {#thumbnailHeight:300#}
        {#});#}

    {#});#}

{#</script>#}