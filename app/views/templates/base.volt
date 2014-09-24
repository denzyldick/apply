<!DOCTYPE html>
<html>
	<head>
{{ assets.outputJs('jsheader') }}

<link rel="stylesheet" href="/css/bootstrap-tagsinput.css" />
<style>
.bootstrap-tagsinput
{
	width:100%;
}
</style>
    <!-- Bootstrap Core CSS -->
    <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- Fonts -->
    <link href="/bootstrap/fonts/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
   	<link rel="stylesheet" type="text/css" href="css/socialicious.css" media="screen" />
    <!-- Custom Theme CSS -->
    <link href="/css/grayscale.css" rel="stylesheet">
		<link rel="stylesheet" href="/css/style.css" type="text/css">
		<link rel="stylesheet" href="/slider/css/slider.css" type="text/css">

	<title>{% block title %}{% endblock %}</title>
		</head>

	</head>
	<body>
{{ flash.output() }}
		<nav class="navbar navbar-custom navbar-fixed-top top-nav-collapse" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="/">
                    <img src="/img/logo.png" style="width:20px;"/>
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
{% include "footer/footer.volt" %}

	</body>
	{{ assets.outputJs('jsfooter') }}

</html>
