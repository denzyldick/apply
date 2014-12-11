<fieldset>
    <legend>{{ lang._('market_place') }}</legend>


    <small>{{ lang._("need_additional_features") }}</small>
    <div class="row">
        <div class='col-md-3' style='text-align:center;margin:10px'>
            <img src='http://fc06.deviantart.net/fs6/i/2005/109/c/c/_3_logo_by_thedsw.png' class='img img-thumbnail'
                 style='width:200px;'>
            {% set price = '0.99' %}
            {% set price_in_cents = 99 %}
            <small>{{ lang._("!Oops_need_more") }}
            </small>


        </div>
        <div class="col-md-6">

            <h3 class="page-header">{{ lang._("buy_more_vacancies") }}</h3>

            <form action="/premium/charge" method="post">
                <script src="https://checkout.stripe.com/checkout.js" class='stripe-button'
                        data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
                        data-label="{{ lang._("buy") }}"
                        data-amount="{{ price_in_cents }}" data-email="{{ user.getEmail() }}"
                        data-description="{{ lang._('pay_vacancies') }}" data-image="/img/logo.png"
                        data-allow-remember-me="false"
                        ></script>
                <div class="col-md-5 text-capitalize fa-3x">1 for 40$</div>
                <div class="col-md-3"><input type="text" value=1 name="amount"
                                             placeholder="{{ lang._("amount_needed") }}" class="form-control"></div>
                <div class="col-md-3"><a href="" class="btn btn-primary btn-lg"><span
                                class="glyphicon glyphicon-shopping-cart"></span> {{ lang._("by_now") }}</a></div>
                <div class="row">
                    <p>&nbsp;&nbsp;</p>

                    <div class="col-md-2 pull-right">{{ lang._("total") }}:9&euro;</div>
                </div>
                <input type=hidden name='type' value='vacancy'/>
            </form>

        </div>

    </div>

    <div class='row'>
        <div class='col-md-3  ' style='text-align:center;margin:10px'>
            <img src='http://ecx.images-amazon.com/images/I/310whq2fIUL._SY300_.jpg' class='img img-thumbnail'
                 style='width:200px;height:200px'>
            {% set price = '9.99' %}
            {% set price_in_cents = 999 %}
            <small>send a e-mail</small>

            <form action="/premium/charge" method="post">
                <script src="https://checkout.stripe.com/checkout.js" class='stripe-button'
                        data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
                        data-label="Buy ${{ price }}"
                        data-amount="{{ price_in_cents }}" data-email="{{ user.getEmail() }}"
                        data-description="{{ lang._('pay_vacancies') }}" data-image="/img/logo.png"
                        data-allow-remember-me="false"
                        ></script>
                <input type=hidden name='type' value='emailer'/>
            </form>


        </div>
    </div>
    <div class="row">
        <div class='col-md-3' style='text-align:center;margin:10px'>
            <img src='http://png-1.vector.me/files/images/2/5/255715/google_places_thumb' class='img img-thumbnail'
                 style='width:200px;height:200px'>
            {% set price = '11.99' %}
            {% set price_in_cents = 1199 %}
            <small>Lower location diameter
            </small>

            <form action="/premium/charge" method="post">
                <script src="https://checkout.stripe.com/checkout.js" class='stripe-button'
                        data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
                        data-label="Buy ${{ price }}"
                        data-amount="{{ price_in_cents }}" data-email="{{ user.getEmail() }}"
                        data-description="{{ lang._('pay_vacancies') }}" data-image="/img/logo.png"
                        data-allow-remember-me="false"
                        ></script>
                <input type=hidden name='type' value='location_diamter'/>
            </form>

        </div>
    </div>
</fieldset>

