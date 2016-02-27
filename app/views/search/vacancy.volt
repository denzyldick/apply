{% for vacancy in vacancies %}
    {% set company =  vacancy.user.company %}
    <div class="col-md-12  col-sm-12 well" style="margin-left:10px;cursor:pointer;" onclick="getVacancy({{ vacancy.getId() }})">
        <div class="row">

                {% if company.getLogo() is not null %}
                    <img src="files/{{ company.getLogo() }}" class="col-md-2 img img-thumbnail" style="height:90px;width:90px;"/>
                    {% endif %}

            <div class="col-md-10">
                <div class="row">
                    <div class="col-md-2 text-center">{{ company.getName() | capitalize }}
                        <div class="row">
                            <a href="{{ company.getWebsite() }}">
                                <i class="fa fa-globe col-md-1" style="color: #636565;"></i>

                            </a>

                            <a href="{{ company.getTwitter() }}">
                                <i class="fa fa-twitter col-md-1" style="color:#1da1f2"></i>

                            </a>
                            <a href="{{ company.getFacebook() }}"  style="color:#3a5795">
                                <i class="fa fa-facebook-f col-md-1"></i>

                            </a>
                        </div></div>
                    <div class="col-md-10">
                        <h5>{{ vacancy.getFunction() }}</h5>
                        <smaller>{{ vacancy.getDescription(true,150) }} <a href="/suggestion/vacancy/{{ vacancy.getId() }}" class="text-info">{{ lang._("read_more_about_this_job") }}</a></smaller>
                    </div>

                </div>

            </div>
        </div>

    </div>


{% endfor %}


{% if vacancies | length < 1 %}
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


                    <i class="fa fa-facebook-square fa-4x"></i>&nbsp;<i class="fa fa-linkedin-square fa-4x"></i>&nbsp;<i class="fa fa-google-plus-square fa-4x"></i>
                </div>
            </div>

        </div>
    </div>

{% endif %}
