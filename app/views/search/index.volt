{% for user in users %}
    <div class="col-md-12 well" style="cursor:pointer" onclick="getUser({{ user.getId() }})">

        <div class="row">
            {% if user.getPhoto() is not empty %}
                <img src="/files/{{ user.getPhoto() }}" class="col-md-2 img img-thumbnail"
                     style="height:90px;width:90px;"/>
            {% else %}
                <img src="/img/default-user-icon-profile.png" class="col-md-2 img img-thumbnail"
                     style="height:90px;width:90px;"/>
            {% endif     %}
            <div class="col-md-4">
                <h5>
                    {{ user.getFirstname()|capitalize }} {{ user.getLastname() | capitalize }}
                    <p class="lead">
                        {{ user.location.getLocation() }}
                    </p>
                </h5>

            </div>
        </div>


    </div>


{% endfor %}

{% if users | length < 1 %}
    <div class="col-md-8 col-md-offset-2">
        <div class="alert alert-success">
            <div class="col-md-12">
                <h5>

                    <p class="lead">{{ lang._("zero_results") }}</p>
                    {{ lang._("help_us_expand") }}
                </h5>

            </div>


            <div class="row">
                <div class="col-md-12">


                    <i class="fa fa-facebook-square fa-4x"></i>&nbsp;<i class="fa fa-linkedin-square fa-4x"></i>&nbsp;<i
                            class="fa fa-google-plus-square fa-4x"></i>
                </div>
            </div>

        </div>
    </div>

{% endif %}