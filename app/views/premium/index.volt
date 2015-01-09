{#<fieldset>#}
    {#<legend>{{ lang._('market_place') }}</legend>#}


    {#<small>{{ lang._("need_additional_features") }}</small>#}
    {#<div class="row">#}
        {#<div class='col-md-3' style='text-align:center;margin:10px'>#}
            {#<img src='http://fc06.deviantart.net/fs6/i/2005/109/c/c/_3_logo_by_thedsw.png' class='img img-thumbnail'#}
                 {#style='width:200px;'>#}
            {#{% set price = '0.99' %}#}
            {#{% set price_in_cents = 99 %}#}
            {#<small>{{ lang._("!Oops_need_more") }}#}
            {#</small>#}


        {#</div>#}
        {#<div class="col-md-6">#}

            {#<h3 class="page-header">{{ lang._("buy_more_vacancies") }}</h3>#}

            {#<form action="/premium/charge" method="post">#}
                {#<script src="https://checkout.stripe.com/checkout.js" class='stripe-button'#}
                        {#data-key="<?php echo $this->config->stripe['publishable_key']; ?>"#}
                        {#data-label="{{ lang._("buy") }}"#}
                        {#data-amount="{{ price_in_cents }}" data-email="{{ user.getEmail() }}"#}
                        {#data-description="{{ lang._('pay_vacancies') }}" data-image="/img/logo.png"#}
                        {#data-allow-remember-me="false",#}
                        {#data-class="btn btn-primary btn-lg"#}
                        {#></script>#}
                {#<div class="col-md-5 text-capitalize fa-3x">3 for $99</div>#}
                {#<div class="col-md-3"><input type="text" value=1 name="amount"#}
                                             {#placeholder="{{ lang._("amount_needed") }}" class="form-control"></div>#}
                {#<div class="col-md-3"><a href="" class="btn btn-primary btn-lg"><span#}
                                {#class="glyphicon glyphicon-shopping-cart"></span> {{ lang._("by_now") }}</a></div>#}
                {#<div class="row">#}
                    {#<p>&nbsp;&nbsp;</p>#}

                    {#<div class="col-md-2 pull-right">{{ lang._("total") }}:9&euro;</div>#}
                {#</div>#}
                {#<input type=hidden name='type' value='vacancy'/>#}
            {#</form>#}

        {#</div>#}

    {#</div>#}

    {#<div class='row'>#}
        {#<div class='col-md-3  ' style='text-align:center;margin:10px'>#}
            {#<img src='http://ecx.images-amazon.com/images/I/310whq2fIUL._SY300_.jpg' class='img img-thumbnail'#}
                 {#style='width:200px;height:200px'>#}
            {#{% set price = '9.99' %}#}
            {#{% set price_in_cents = 999 %}#}
            {#<small>send a e-mail</small>#}

            {#<form action="/premium/charge" method="post">#}
                {#<script src="https://checkout.stripe.com/checkout.js" class='stripe-button'#}
                        {#data-key="<?php echo $this->config->stripe['publishable_key']; ?>"#}
                        {#data-label="Buy ${{ price }}"#}
                        {#data-amount="{{ price_in_cents }}" data-email="{{ user.getEmail() }}"#}
                        {#data-description="{{ lang._('pay_vacancies') }}" data-image="/img/logo.png"#}
                        {#data-allow-remember-me="false"#}
                        {#></script>#}
                {#<input type=hidden name='type' value='emailer'/>#}
            {#</form>#}


        {#</div>#}
    {#</div>#}
    {#<div class="row">#}
        {#<div class='col-md-3' style='text-align:center;margin:10px'>#}
            {#<img src='http://png-1.vector.me/files/images/2/5/255715/google_places_thumb' class='img img-thumbnail'#}
                 {#style='width:200px;height:200px'>#}
            {#{% set price = '11.99' %}#}
            {#{% set price_in_cents = 1199 %}#}
            {#<small>Lower location diameter#}
            {#</small>#}

            {#<form action="/premium/charge" method="post">#}
                {#<script src="https://checkout.stripe.com/checkout.js" class='stripe-button'#}
                        {#data-key="<?php echo $this->config->stripe['publishable_key']; ?>"#}
                        {#data-label="Buy ${{ price }}"#}
                        {#data-amount="{{ price_in_cents }}" data-email="{{ user.getEmail() }}"#}
                        {#data-description="{{ lang._('pay_vacancies') }}" data-image="/img/logo.png"#}
                        {#data-allow-remember-me="false"#}
                        {#></script>#}
                {#<input type=hidden name='type' value='location_diamter'/>#}
            {#</form>#}

        {#</div>#}
    {#</div>#}
{#</fieldset>#}


    <div class="row">
        <div class="col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-xs-6">
                                <h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                            </div>
                            <div class="col-xs-6">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-xs-2"><img class="img-responsive"
                                                   src="http://fc06.deviantart.net/fs6/i/2005/109/c/c/_3_logo_by_thedsw.png/">
                        </div>
                        <div class="col-xs-4">
                            <h4 class="product-name"><strong>{{ lang._("buy_more_vacancies") }}</strong></h4>
                            <h4>
                                <small>{{ lang._("buy_more_vacancies_description") }}</small>
                            </h4>
                        </div>
                        <div class="col-xs-6">
                            <div class="col-xs-6 text-right">
                                <h6><strong>$99.00 <span class="text-muted">x</span></strong></h6>
                            </div>
                            <div class="col-xs-4">
                                <input type="text" class="form-control input-sm" value="1">
                            </div>

                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-xs-2"><img class="img-responsive" src="http://placehold.it/100x70">
                        </div>
                        <div class="col-xs-4">
                            <h4 class="product-name"><strong>Product name</strong></h4>
                            <h4>
                                <small>Product description</small>
                            </h4>
                        </div>
                        <div class="col-xs-6">
                            <div class="col-xs-6 text-right">
                                <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                            </div>
                            <div class="col-xs-4">
                                <input type="text" class="form-control input-sm" value="1">
                            </div>
                            <div class="col-xs-2">
                                <button type="button" class="btn btn-link btn-xs">
                                    <span class="glyphicon glyphicon-trash"> </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr>

                </div>
                <div class="panel-footer">
                    <div class="row text-center">
                        <div class="col-xs-9">
                            <h4 class="text-right">Total <strong>$50.00</strong></h4>
                        </div>
                        <div class="col-xs-3">
                            <button type="button" class="btn btn-success btn-block">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
