{% extends "templates/base.volt" %}
{% block content %}
<div class="jumbotron " id="jumbotron">

<div id="post_login_content">
  <p><a class="btn btn-primary btn-lg" role="button" href="signup">Sign up</a>&nbsp;<a class="btn btn-primary btn-lg" role="button" href=
'login'>Login</a></p><p>
  <div class="row">

  <div class="col-sm-7 col-md-4">
    <div class="thumbnail">
      <img src="img/default-user-icon-profile.png" alt="...">
      <div class="caption">
        <h3>Find what you are looking for</h3>
     
        <p><a href="#" class="btn btn-sm btn-primary" role="button">View Pricing Plans</a></p>
      </div>
    </div>
    
    
    
  </div>
    <div class="col-sm-7 col-md-4">
    <div class="thumbnail">
  <img src="img/default-user-icon-profile.png" alt="...">
      <div class="caption">
        <h3>100% blablablaaaa</h3>
        <p><a href="#" class="btn btn-sm btn-primary" role="button">Button</a></p>
      </div>
    </div>
    
    
    
  </div>
    <div class="col-sm-7 col-md-4">
    <div class="thumbnail">
     <img src="img/default-user-icon-profile.png" alt="...">
      <div class="caption">
        <h3>blablablaa<br/>gg</h3>
        <p><a href="#" class="btn btn-sm btn-primary" role="button">Button</a></p>
      </div>
    </div>
    
    <div class="alert alert-danger" id="alert"></div>
    
  </div>
</div>
</div>
</div>
{% endblock %}