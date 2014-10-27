<!DOCTYPE html>
<html>
	<head>
{{ assets.outputJs('jsheader') }}


<style>
.bootstrap-tagsinput
{
	width:100%;
}
</style>
    <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="/css/bootstrap-tagsinput.css" />
    <link href="/bootstrap/fonts/font-awesome.min.css" rel="stylesheet" type="text/css">
		<link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
   	<link rel="stylesheet" type="text/css" href="/css/socialicious.css" media="screen" />
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
{% else %}
	{% include "menu/public_menu.volt" %}
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
