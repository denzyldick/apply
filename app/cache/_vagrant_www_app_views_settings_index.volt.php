<!DOCTYPE html>
<html>
	<head>

<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="/slider/js/bootstrap-slider.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="/js/main.js"></script>


    <!-- Bootstrap Core CSS -->
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- Fonts -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

    <!-- Custom Theme CSS -->
    <link href="/css/grayscale.css" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css" type="text/css">
<link rel="stylesheet" href="/slider/css/slider.css" type="text/css">
<!-- Latest compiled and minified JavaScript -->
<script type="text/javascript" src="/bootstrap/js/bootstrap.js"></script>
	<title> Account settings </title>
		</head>

	</head>
	<body><nav class="navbar navbar-custom navbar-fixed-top top-nav-collapse" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="/">
                    <i class="fa fa-dot-circle-o" style="color:#fff!important;"></i>Apply
                </a>
            </div>
<?php if ($show_settings) { ?>
  <div class="navbar-collapse collapse navbar-inverse-collapse">
            <ul class="nav navbar-nav">
              <li><a href="/">Overview</a></li>
              <li><a href="/matches">Matches <span class="badge">42</span></a></li>
              <li><a href="/vacancy">Vacancies </a></li>
              <li><a href="/company">Company</a></li>
              <li><a href="/premium">Premium</a></li>

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

<?php } ?>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    <div class="col-sm-9 col-md-10 main" id="main">
	
    <form method="post" action="settings/save">
<h1> Account Settings </h1>
<label>Firstname</label>
<input class="form-control" value="<?php echo $firstname; ?>" name="firstname">
<br/>
<label>Lastname</label>
<input class="form-control"  value="<?php echo $lastname; ?>" name="lastname">
<br/>
<label>Email</label>
<input class="form-control"  value="<?php echo $email; ?>" name="email">
<br/>
<label>Account type</label>
<input class="form-control" disabled value=<?php echo $type; ?> />
<br/>
<input type="submit" value="save" class="btn btn-sm btn-primary" /> &nbsp; <a href="#" class="btn btn-sm btn-default"> change password</a>
</form>


</div>
<div class=copright style="max-width:400px;margin: 0 auto;text-align:center;margin-top: 10px">&copy; 2014 Appply. All rights reserved.</div>

	</body>
</html>
