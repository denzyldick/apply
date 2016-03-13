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

            <a

                    {% if remaining_vacancy > 0 %}
                    href="/vacancy/new"
                    {% else %}
                    onclick="$('#buy_vacancy').modal('show')"

                    {% endif %}
                    class="btn btn-small btn-primary"><span
                        class="glyphicon glyphicon-plus"></span> {{ lang._('add_vacancy') }}</a>

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



{% if remaining_vacancy == 0 %}
    <div  id="buy_vacancy" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">{{ lang._("need_to_pay_for_that") }}</h4>
                </div>
                <div class="modal-body">

                    <i class="fa fa-briefcase  fa-5x"></i><br/>

                    {% set price = '99.99' %}
                    {% set price_in_cents = 999 %}
                    <small>
                        {{ lang._("!Oops_need_more") }}
                    </small>
                    <form action="/premium/charge" method="post">
                        <script src="https://checkout.stripe.com/checkout.js" class='stripe-button'
                                data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
                                data-label="{{ lang._("buy_upgrade") }} {{ price }}"
                                data-amount="{{ price_in_cents }}" data-email="{{ user.getEmail() }}"
                                data-description="{{ lang._('pay_vacancies') }}"
                                data-allow-remember-me="false" ,
                                data-class="btn btn-primary btn-lg"
                        ></script>
                        <input type=hidden name='type' value='vacancy'/>
                    </form>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
{% endif %}