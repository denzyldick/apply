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
   <link rel="stylesheet" type="text/css" href="css/socialicious.css" media="screen" />
    <!-- Custom Theme CSS -->
    <link href="/css/grayscale.css" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css" type="text/css">
<link rel="stylesheet" href="/slider/css/slider.css" type="text/css">
<!-- Latest compiled and minified JavaScript -->
<script type="text/javascript" src="/bootstrap/js/bootstrap.js"></script>
	<title>{% block title %}{% endblock %}</title>
		</head>

	</head>
	<body>
{{ flash.output() }}
<div id="alert"class="alert alert-danger" role="alert"></div>
		<nav class="navbar navbar-custom navbar-fixed-top top-nav-collapse" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="/">
                    <i class="fa fa-dot-circle-o" style="color:#fff!important;"></i>Apply
                </a>
            </div>
{% if show_settings %}
  {% include "menu/menu.volt" %}

{% endif %}
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    <div class="col-md-8 col-md-offset-2" id="main">
	{% block content %}{% endblock %}
</div>
<!--
<div class=copright style="max-width:400px;margin: 0 auto;text-align:center;margin-top: 10px">&copy; 2014 Appply. All rights reserved.</div>
-->
	</body>
</html>
