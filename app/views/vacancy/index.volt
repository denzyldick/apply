<div class="row">

    <div class="col-md-10">
        <h1>
            {% if vacancies | length is 0 %}
            {{ lang._("you_dont_have_any_vacancies") }}
            {% else %}
            {{ lang._("your_vacancies") }}
            {% endif %}
        </h1>

    </div>
    <div class="col-md-2">

        {% if remaining_vacancy > 0 %}

            <a href="/vacancy/new" class="btn btn-small btn-primary"><span
                        class="glyphicon glyphicon-plus"></span> {{ lang._('add_vacancy') }}</a>


        {% endif %}

        {% if remaining_vacancy == 0 %}

            <a href="/premium" class='btn btn-small btn-primary'><span
                        class='glyphicon glyphicon-shopping-cart'></span> {{ lang._('buy_more_vacancy') }}</a>

        {% endif %}
    </div>
</div>



{% if vacancies | length > 0 %}

    <div class='row'>
        <div class="table-responsive" style="height:500px;overflow:auto">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>{{ lang._('name')|upper }}</th>
                    <th>{{ lang._('skills')|upper }}</th>
                    <th>{{ lang._('location')|upper }}</th>
                    <th>{{ lang._('potential_candidates')|upper }}</th>
                    <th>{{ lang._('conctract_type')|upper }}</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {% for vacancies in vacancies %}
                    <tr>
                        <td>{{ vacancies.getFunction()|lower|capitalize }}</td>

                        <td>{{ vacancies.getSpecification | length }}</td>
                        <td>{{ vacancies.location.getLocation()|capitalize }}</td>
                        <td>{{ vacancies.countMatches() }}</td>
                        <td>
                            {% if vacancies.getFulltime() == 1 %}
                            {{ lang._("fulltime") |capitalize}}&nbsp;
                            {% endif %} {% if vacancies.getParttime() == 1 %}
                            {{ lang._("parttime")|capitalize }}&nbsp;
                            {% endif %} {% if vacancies.getFreelance() == 1 %}
                            {{ lang._("freelance")|capitalize }}&nbsp;
                            {% endif %}
                        </td>
                        <td>

                            <a href="/suggestion/view/{{ vacancies.getId() }}/{{ tokenKey }}/{{ tokenValue }}"
                               class='btn btn-sm btn-primary'><span
                                        class="glyphicon glyphicon-search"></span>
                            </a>&nbsp;
                            <a href="vacancy/new/?vacancy_id={{ vacancies.getId() }}" class="btn btn-sm btn-default"><span class="glyphicon glyphicon-edit"></span></a>
                            <a href="/vacancy/remove/{{ vacancies.getId() }}"
                                         class="btn btn-sm btn-warning"><span
                                        class="glyphicon glyphicon-trash"> </span></a>
                        </td>
                    </tr>

                {% endfor %}
                </tbody>
            </table>
        </div>

    </div>
{% endif %}

