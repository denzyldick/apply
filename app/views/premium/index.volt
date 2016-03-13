<fieldset>
    <legend>{{ lang._('premium') }}</legend>


    <small>{{ lang._("need_additional_features") }}</small>
    <div class="row">
        <div class='col-md-3 well' style='text-align:center;margin:10px'>
            <i class="fa fa-briefcase  fa-5x"></i><br/>

            {% set price = '99.99' %}
            {% set price_in_cents = 9999 %}
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
                        data-bitcoin="true"
                ></script>
                <input type=hidden name='type' value='vacancy'/>
            </form>
        </div>

        <div class='col-md-3 well' style='text-align:center;margin:10px'>
            <i class="fa fa-archive fa-5x"></i><br/>

            {% set price = '99.99' %}
            {% set price_in_cents = 9999 %}
            <small>
                {{ lang._("access_to_cv_database") }}
            </small>
            <form action="/premium/charge" method="post">
                <script src="https://checkout.stripe.com/checkout.js" class='stripe-button'
                        data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
                        data-label="{{ lang._("buy_upgrade") }} {{ price }}"
                        data-amount="{{ price_in_cents }}" data-email="{{ user.getEmail() }}"
                        data-description="{{ lang._('access_to_cv_database') }}"
                        data-allow-remember-me="false" ,
                        data-class="btn btn-primary btn-lg"
                ></script>
                <input type=hidden name='type' value='vacancy'/>
            </form>
        </div>
    </div>