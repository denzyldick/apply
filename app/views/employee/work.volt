<a href="/work" class="btn btn-primary btn-large pull-right"><i class="fa fa-briefcase"></i> {{ lang._("add_work") | upper}}</a>
<h5>
     <p class="lead">{{ lang._("my_work_experience") }}</p>
    {{ lang._("what_did_i_do") }}
</h5>
{% for work in user.work_experience %}

    <div class="row well">
        <div class="col-md-3">
            <h5>
                {{ work.getOrganisation() }}
                <p class="lead">
                    {{ work.getJobTitle() }}
                </p>
            </h5>
        </div>
        <div class="col-md-9">
            <div class="row">
                <div class="col-md-3">
                    {{ work.getStart() }}
                </div>
                <div class="col-md-3">
                    {% if work.getEnd() is null %}
                        {{ lang._("currently_working_here") }}
                    {% else %}
                        {{ work.getEnd() }}
                    {% endif %}
                </div>
                <div class="col-md-6">
                    <a href="/work/delete/?id={{ work.getId() }}" class="btn pull-right btn-small btn-default"><i class="fa fa-remove "></i> {{ lang._("delete") |upper }}</a>
                    &nbsp;
                    &nbsp;
                    <a href="/work?id={{ work.getId() }}" class="btn pull-right btn-small btn-primary"><i class="fa fa-edit"></i> {{ lang._("edit") |upper }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p></p>
                    {{ work.getDescription() }}

                </div>
            </div>

        </div>
    </div>
    <hr/>
{% endfor %}