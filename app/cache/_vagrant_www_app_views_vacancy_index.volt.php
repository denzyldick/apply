
<!DOCTYPE html>
<html>
	<head>
		
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="js/main.js"></script>
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">

<!-- Latest compiled and minified JavaScript -->
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	<title> Your vacancies </title>
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

	
    

<div class="container-fluid">
      <div class="row row-offcanvas row-offcanvas-left">
         <!--sidebar-->
         <div class="col-sm-3 col-md-2 sidebar-offcanvas" id="sidebar" role="navigation">
            <ul class="nav nav-sidebar">
              <li><a href="/">Overview</a></li>
              <li><a href="/matches">Matches <span class="badge">42</span></a></li>
              <li><a href="/vacancy">Vacancies </a></li>
              <li><a href="/premium">Premium</a></li>
            </ul>
        </div>

        <div class="col-sm-9 col-md-10 main" id="main">
<h1> Your vacancies <h1>


          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Function</th>
                  <th>Hour/week</th>
                  <th>Experience</th>
                  <th>Location</th>
                  <th>Matches</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PHP Developer</td>
                  <td>40</td>
                  <td>3 years</td>
                  <td>Amsterdam</td>
                  <td>30</td>
                  <td><a href=# class='btn btn-sm btn-success'><span class="glyphicon glyphicon-search"> SEARCH</span></a>&nbsp;<a href=# class='btn btn-sm btn-default'><span class="glyphicon glyphicon-edit"> EDIT</span></a>&nbsp;<a href="#" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-remove"> REMOVE</span></a></td>
                </tr>  <tr>
                  <td>Java Developer</td>
                  <td>30</td>
                  <td>1 year</td>
                  <td>Amsterdam</td>
                  <td>10</td>
              <td><a href=# class='btn btn-sm btn-success'  title="Search for people."><span class="glyphicon glyphicon-search"> SEARCH</span></a>&nbsp;<a href=# class='btn btn-sm btn-default'><span class="glyphicon glyphicon-edit"> EDIT</span></a>&nbsp;<a href="#" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-remove"> REMOVE</span></a></td>
                   </tr>
              </tbody>
            </table>
</div>


<div class=copright style="max-width:400px;margin: 0 auto;text-align:center;margin-top: 10px">&copy; 2014 Appply. All rights reserved.</div>

	</body>
</html>