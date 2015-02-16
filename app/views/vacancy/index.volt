{% if remaining_vacancy > 0 %}

    <a href="/vacancy/new" class="btn btn-small btn-primary pull-right"><span
                class="glyphicon glyphicon-plus"></span> {{ lang._('add_vacancy') }}</a>


{% endif %}

    {% if remaining_vacancy == 0 %}

        <a href="/premium" class='btn btn-small btn-primary pull-right'><span
                    class='glyphicon glyphicon-shopping-cart'></span>  {{ lang._('buy_more_vacancy') }}</a>

    {% endif %}
<h5 class="page-header">
    {{ lang._("vacancies") | upper }}

    {% if remaining_vacancy > 0 %}

        <p class="lead">{{ lang._("add_a_vacancy_if_description") }}</p>

    {% endif %}

    {% if remaining_vacancy == 0 %}
        <p class="lead">{{ lang._("you_need_to_buy_more_too_look_for_other") }}</p>
    {% endif %}

</h5>


<div class='row'>
    <div class="table-responsive" style="height:500px;overflow:auto">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>{{ lang._('name')|upper }}</th>
                <th>{{ lang._('skills')|upper }}</th>
                <th>{{ lang._('location')|upper }}</th>
                <th>{{ lang._('matches')|upper }}</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {% for vacancies in vacancies %}
                <tr>
                    <td>{{ vacancies.getFunction()|lower|capitalize }}</td>

                    <td>{{ vacancies.countSkills() }}</td>
                    <td>{{ vacancies.location.getLocation()|capitalize }}</td>
                    <td>{{ vacancies.countMatches() }}</td>
                    <td><a href="/suggestion/view/{{ vacancies.getId() }}/{{ tokenKey }}/{{ tokenValue }}"
                           class='btn btn-sm btn-primary'><span
                                    class="glyphicon glyphicon-search"></span> {{ lang._('find_suggestions') }}
                        </a>&nbsp;<a href="/vacancy/remove/{{ vacancies.getId() }}"
                                     class="btn btn-sm btn-default"><span
                                    class="glyphicon glyphicon-remove"> </span> {{ lang._('remove_vacancy') }}</a>
                    </td>
                </tr>

            {% endfor %}
            </tbody>
        </table>
    </div>

</div>