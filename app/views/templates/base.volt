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


    <title>{% block title %}{% endblock %}</title>
</head>

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-custom">

<nav class="navbar navbar-fixed-top top-nav-collapse  navbar-inverse" role="navigation">
    <div class="container">
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i class="glyphicon glyphicon-plus"></i>
            </button>
            <a class="navbar-brand" style="font-family: Arial;font-weight:bolder" href="/">
                {#<div class="col-sm-1"><img src="/img/logo.png" width="20"/></div>#}
                {{ config.company.name }}

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
<div class="row">
    <div class="col-md-2 col-md-offset-5">{{ flash.output() }}</div>
</div>


{% block content %}{% endblock %}

{% include "footer/footer.volt" %}

</body>
{{ assets.outputJs('jsFooter') }}


</html>
