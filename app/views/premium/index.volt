<h3>{{lang._('choose_a_bundle')}}</h3>
<div class='row'>
<div class='col-md-3 well' style='text-align:center;margin:10px' >
  <img src='holder.js/30x40' class='img img-thumbnail' style='width:200px;'>
  <p></p>


  <a href="#" class='btn btn-small btn-primary'><span class='glyphicon glyphicon-shopping-cart' style='color:white'></span> Buy now&nbsp;&nbsp;$9.99</a>
</div><div class='col-md-3 well'  style='text-align:center;margin:10px' >
  <img src='holder.js/30x40' class='img img-thumbnail'  style='width:200px;'>
  <p></p>
  <a href="#" class='btn btn-small btn-primary'><span class='glyphicon glyphicon-shopping-cart' style='color:white'></span> Buy now&nbsp;&nbsp;$11.99</a>
</div><div class='col-md-3 well'  style='text-align:center;margin:10px'>
  <img src='holder.js/30x40' class='img img-thumbnail'  style='width:200px;'>
  <p></p>
  <a href="#" class='btn btn-small btn-primary'><span class='glyphicon glyphicon-shopping-cart' style='color:white'></span> Buy now&nbsp;&nbsp;$3.99</a>
</div>

</div>
<form action="/premium/charge" method="post">
  <script src="https://checkout.stripe.com/checkout.js" class="stripe-button"
          data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
          data-amount="999" data-description="{{lang._('pay_vacancies')}}"></script>
</form>
