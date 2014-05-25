<html>
	<head>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	<title>Appply</title>
		</head>
		<style>

body { 
background-color:#FAFAFA;
}.jumbotron{
	background-color:#fff!important;}
	.copright{
		color: #ffffff!important;
		}
		#login{
			max-width:300px;
			margin: 0 auto;text-align:center;
			}
			#alert{
				position: absolute;
margin: 0 auto;
top: 10%;
min-width: 200px;
max-width: 300px;
/* left: 50%; */
/* margin-left: auto; */
position: absolute;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
display:none;
				}
</style>
<script>
function login()
{$.get("/login",function(data)
		{
			
			$("#post_login_content").fadeOut("fast").html(data).fadeIn("fast");
			
		});
		
		}	
		
		function signup()
{$.get("/signup/:user",function(data)
		{
			
			$("#post_login_content").fadeOut("fast").html(data).fadeIn("fast");
			
		});
		
		}
	
	function submitLogin()
{
	var email = $("#email").val();
	alert(email);
	var password  = $("#password").val();
	if(email.length <1)
	{
		$("#alert").html("<strong>Please enter your email</strong").fadeIn("fast").delay(3000).fadeOut("fast");
		}
		
	$.post("/login/",{email:email,password:password},function(data)
	{
		
	});
}

function submitSignUp()
{
		var firstname	=	$("#firstname").val();
		var lastname	=	$("#lastname").val();
		var password	=	$("#password").val();
		var re_type		=	$("#re_password").val();
		var email		=	$("#email").val();
		
		if(firstname.length < 1 || lastname.length < 1 || password.length < 1 || re_type.length < 1 || email.length < 1 )
		{
			$("#alert").html("<strong>Please fill everything in.</strong>").fadeIn("fast").delay(3000).fadeOut("fast");
		}else{
			$.ajax({
  url: '/signup',
  type: 'PUT',
  data: "firstname="+firstname+"&lastname="+lastname+"&password="+password+"&re_type="+re_type+"&email="+email,
  success: function(data) {
  $("body").append(data);
  }
});
		}	
}

	</script>
<body>
	
	<div class="navbar navbar-inverse">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-inverse-collapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#"></a>
  </div>
  <div class="navbar-collapse collapse navbar-inverse-collapse">
    <ul class="nav navbar-nav">

      
    </ul>


    <ul class="nav navbar-nav navbar-right">
    
      <li class="dropdown">
       <a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings<b class="caret"></b></a>
        <ul class="dropdown-menu">
          <li><a href="#">Account </a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li class="divider"></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<div class="jumbotron " style="max-width:800px;margin: 0 auto;margin-top:45px;text-align:center;border-radius: 5px;
border: 1px solid #007196">
 <a href="/"> <img src="img/logo.png"/></a><p>
<div id="post_login_content">
  <p><a class="btn btn-primary btn-lg" role="button" onclick="signup()">Sign up</a>&nbsp;<a class="btn btn-primary btn-lg" role="button" onclick="login()">Login</a></p><p>
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
    
    
    
  </div>
</div>
</div>
</div>
<div class=copright style="max-width:400px;margin: 0 auto;text-align:center;margin-top: 10px">&copy; 2014 Appply. All rights reserved.</div>
</body>
</html>
