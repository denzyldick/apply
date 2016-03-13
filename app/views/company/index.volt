<div class="well">


    <h5 class="page-header">
        {{ lang._('what_is_your_company_information') |upper }}
        <p class="lead">{{ lang._("add_your_information") }}</p>
    </h5>


    {{ form("action":"company/save","method":"post","enctype":"multipart/form-data") }}

    <div class="row">

        <input type="hidden" name="file_name" id="file_name" value="{{ company_foto }}">
        <div class='col-md-3'>
            <div class="row">
                <div class="col-md-12">
                    <div class="dropzone " id="myAwesomeDropzone">

                    </div>

                </div>
            </div>
            <div class="row">

                <div class="col-md-12">
                    <div class="dropzone-previews">
                        <img src="/files/{{ company_foto }}"/>
                    </div>
                </div>
            </div>


        </div>
        <div class="col-md-9">

            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="name">{{ lang._('what_is_your_company_name') }}</label>


                        {{ text_field("name","class":"form-control","value":name,"id":"name") }}

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group"><label
                                for="description">{{ lang._('what_is_your_company_description') }}</label>
                        {{ text_area("description","class":"form-control textarea","value":description,"id":"description") }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group"><label
                                for="website"><i
                                    class="fa fa-globe"></i></label> {{ text_field('website','class':'form-control','value':website,"id":"website") }}
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group"><label for="twitter"><i class="fa fa-twitter"></i></label>
                        {{ text_field('twitter','class':'form-control','value':twitter,"id":"twitter") }}</div>
                </div>
                <div class="col-md-4">
                    <div class="form-group"><label for="facebook"><i
                                    class="fa fa-facebook"></i></label> {{ text_field('facebook','class':'form-control','value':facebook,"id":"facebook") }}
                    </div>
                </div>


            </div>
        </div>
    </div>




    <div class="form-group gllpLatlonPicker" id="custom_id">

        <div class="row">
        <div class="col-md-12">
            <label for="location">{{ lang._('what_is_your_company_location') }} <i class="fa fa-gps"></i></label>
            {{ text_field("location","class":"gllpSearchField form-control","value":location,"id":"location") }}
            <input type="hidden" class="gllpSearchButton">
        </div>
        </div>


        <div class="row">

            <div class="gllpMap well col-md-12 " style="text-align: center;"><img src='/img/ajax-loader.gif'/></div>
            {{ hidden_field("longitude","class":"gllpLongitude","value":longitude) }}
            {{ hidden_field("latitude","class":"gllpLatitude","value":latitude) }}
            {{ hidden_field("zoom","class":"gllpZoom","value":zoom) }}
        </div>
    </div>

    <div class="row">
        <div class="col-md-2">
            <input type="submit" value="{{ lang._("save") }}" class="btn btn-primary btn-sm"/>
        </div>
    </div>
</div>





</form>

</div>
