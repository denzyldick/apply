<h3>{{lang._('upgrade_your_account')}}</h3>
<small>Upgrade your account with premium features</small>
<div class='row'>
<div class='col-md-3 well ' style='text-align:center;margin:10px' >
  <img src='http://ecx.images-amazon.com/images/I/310whq2fIUL._SY300_.jpg' class='img img-thumbnail' style='width:200px;height:200px'>
{% set price = '9.99' %}
{% set price_in_cents = 999 %}
<small>send a e-mail</small>

<form action="/premium/charge" method="post">
  <script src="https://checkout.stripe.com/checkout.js" class='stripe-button'
          data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
          data-label="Buy ${{price }}"
          data-amount="{{price_in_cents}}" data-email ="{{user.getEmail()}}" data-description="{{lang._('pay_vacancies')}}"  data-image="/img/logo.png"
           data-allow-remember-me="false"
          ></script>
</form>

</div><div class='col-md-3 well'  style='text-align:center;margin:10px' >
  <img src='http://png-1.vector.me/files/images/2/5/255715/google_places_thumb' class='img img-thumbnail'  style='width:200px;height:200px'>
  {% set price = '11.99' %}
  {% set price_in_cents = 1199 %}
  <small>Lower location diameter
</small>

  <form action="/premium/charge" method="post">
    <script src="https://checkout.stripe.com/checkout.js" class='stripe-button'
            data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
            data-label="Buy ${{price }}"
            data-amount="{{price_in_cents}}" data-email ="{{user.getEmail()}}" data-description="{{lang._('pay_vacancies')}}"  data-image="/img/logo.png"
             data-allow-remember-me="false"
            ></script>
  </form>

</div><div class='col-md-3 well'  style='text-align:center;margin:10px'>
  <img src='http://fc06.deviantart.net/fs6/i/2005/109/c/c/_3_logo_by_thedsw.png' class='img img-thumbnail'  style='width:200px;'>
{% set price = '0.99' %}
{% set price_in_cents = 99 %}
<small>Three more vacancies
</small>

<form action="/premium/charge" method="post">
  <script src="https://checkout.stripe.com/checkout.js" class='stripe-button'
          data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
          data-label="Buy ${{price }}"
          data-amount="{{price_in_cents}}" data-email ="{{user.getEmail()}}" data-description="{{lang._('pay_vacancies')}}"  data-image="/img/logo.png"
           data-allow-remember-me="false"
          ></script>
</form>
</div>

</div>
