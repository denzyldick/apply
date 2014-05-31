
<!DOCTYPE html>
<html>
	<head>
		
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="js/main.js"></script>
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">

<!-- Latest compiled and minified JavaScript -->
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	<title></title>
		</head>

	</head>
	<body>
<div class="navbar navbar-inverse">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-inverse-collapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
   <a class="navbar-brand" href="/"><img src="img/logo.png" style="
    width: 100px;height:30px;
"></a> 
  </div>
  <div class="navbar-collapse collapse navbar-inverse-collapse">
    <ul class="nav navbar-nav">

      
    </ul>


    <ul class="nav navbar-nav navbar-right">
    
      <li class="dropdown">
       <a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings<b class="caret"></b></a>
        <ul class="dropdown-menu">
          <li><a href="/employer/settings" >Account </a></li>
          <li><a href="/support">Support</a></li>
          <li class="divider"></li>
          <li><a href="logout">Logout</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>

	
<div class="jumbotron" id="jumbotron">	<div id="login"><h4>Create an account</h4>
	
	<div class="well">
<input class=form-control type=text placeholder="Firstname" id='firstname'/>
</div>
<div class="well">
<input class=form-control type=text placeholder="lastname" id='lastname'/>
</div>

<div class="well">
<input class=form-control type=text placeholder="E-mail" id='email'/>
</div>

<p>
	<div class="well">
		
<input class=form-control type=password placeholder="Password" id='password'/>

</div>
	<div class="well">
		
<input class=form-control type=password placeholder="Re-Password" id='re_password'/>

</div>
<input type="checkbox" id="type" value="gneoa4r"/> Are you a bussiness&nbsp;&nbsp;&nbsp;&nbsp;
<a class="btn btn-small btn-primary" style="float:right" onclick=submitSignUp()> Sign up</a>
</div>
</form>

</div>


<div class=copright style="max-width:400px;margin: 0 auto;text-align:center;margin-top: 10px">&copy; 2014 Appply. All rights reserved.</div>

	</body>
</html>