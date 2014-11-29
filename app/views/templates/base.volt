<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    {{ assets.outputJs('jsHeader') }}
    {{ assets.outputCSS() }}
    <style>
        .bootstrap-tagsinput {
            width: 100%;
        }
    </style>


    <link href="/" rel="stylesheet" type="text/css">
    <link href='' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="/css/socialicious.css" media="screen"/>
    <link rel="stylesheet" href="/" type="text/css">
    <link rel="stylesheet" href="/" type="text/css">
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
{{ assets.outputJs('jsFooter') }}


</html>
