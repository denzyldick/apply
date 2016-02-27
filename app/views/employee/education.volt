<a href="/education" class="btn btn-primary btn-large pull-right"><i class="fa fa-graduation-cap"></i> {{ lang._("add_education") | upper}}</a>
<h5>
    <p class="lead">{{ lang._("my_education") }}</p>
    {{ lang._("what_did_i_studie") }}
</h5>
{% for education in user.education %}

    <div class="row well">
        <div class="col-md-3">
            <h5>
                {{ education.getOrganisation() }}
                <p class="lead">
                    {{ education.getStudy() }}
                </p>
            </h5>
        </div>
        <div class="col-md-9">
            <div class="row">
                <div class="col-md-3">
                    {{ education.getStart() }}
                </div>
                <div class="col-md-3">
                    {% if education.getEnd() is null %}
                        {{ lang._("still_studying") }}
                    {% else %}
                        {{ education.getEnd() }}
                    {% endif %}
                </div>
                <div class="col-md-6">
                    <a href="/education/delete/?id={{ education.getId() }}" class="btn pull-right btn-small btn-default"><i class="fa fa-remove "></i> {{ lang._("delete") |upper }}</a>
                    &nbsp;
                    &nbsp;
                    <a href="/education?id={{ education.getId() }}" class="btn pull-right btn-small btn-primary"><i class="fa fa-edit"></i> {{ lang._("edit") |upper }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p></p>
                    {{ education.getDescription() }}

                </div>
            </div>

        </div>
    </div>
    <hr/>
{% endfor %}