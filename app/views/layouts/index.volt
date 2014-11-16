<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>{{ config.company.name }}</title>
    <!-- Bootstrap Core CSS -->
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <!-- Fonts -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
    <!-- Custom Theme CSS -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-custom">

  {% include "menu/public_menu.volt" %}

    <section class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1 class="brand-heading">{{ config.company.name }}</h1>
                        <p class="intro-text">Where you can get a job through your skills.</p>
                        <div class="page-scroll ">
                            <!-- <a href="#about" class="btn btn-circle">
                                <i class="fa fa-angle-double-down animated" style="font-size:86px;"></i>
                            </a> -->
                        </div>

                      </div>
                      <p>


                </div>
            </div>
        </div>
    </section>

    <section id="about" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>{{ lang._("who_are_we") }}</h2>
                <pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus consequat nisl id semper. Morbi sollicitudin iaculis libero, ut tristique elit. Sed tempus, diam non consequat tincidunt, elit est dapibus eros, id aliquet turpis arcu vitae sapien. Vestibulum in orci id enim tristique faucibus a at augue. Etiam non arcu vitae neque tincidunt posuere mattis sed sem. Nulla sem augue, volutpat vel dui at, ultricies feugiat dui. Sed eget semper ipsum, id tincidunt libero. Cras vel turpis ac elit consequat venenatis. Integer tempor, massa id posuere mollis, ante leo ultrices enim, eu molestie arcu est id lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus molestie consequat tincidunt. Donec eu rutrum nunc. Cras varius, dolor in sodales interdum, leo risus placerat massa, et lobortis dolor eros et purus. Morbi pretium nunc at varius pulvinar. Proin quis vulputate nunc, consectetur vulputate libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>

Fusce nec congue enim. Fusce ornare tempor libero, nec fermentum ipsum mollis et. Nunc porta lorem sed elit mollis, ut suscipit nisl molestie. Nulla lacinia iaculis metus ac ultricies. Aenean malesuada ligula adipiscing leo scelerisque vestibulum. Curabitur convallis vehicula dapibus. Etiam faucibus ante adipiscing, suscipit elit non, ultricies purus. Aliquam sem diam, ultrices quis quam quis, euismod tempor orci. In nec orci a nisl dapibus ultrices vitae vel neque. Pellentesque tincidunt, odio eu faucibus vehicula, mi sapien sodales risus, eu posuere metus nibh et sem. Maecenas ornare felis leo, non pretium libero hendrerit vel. Nulla euismod, nisl in porttitor facilisis, urna ante ullamcorper libero, vitae scelerisque massa metus ac nisl.</p>
            </div>
        </div>
    </section>

    <section id="download" class="content-section text-center">
        <div class="download-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>Stuff</h2>
                    <p>gwgrgrwgwrgwrgwrgwrr!</p>

                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Contact Start Bootstrap</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus consequat nisl id semper. Morbi sollicitudin iaculis libero, ut tristique elit. Sed tempus, diam non consequat tincidunt, elit est dapibus eros, id aliquet turpis arcu vitae sapien. Vestibulum in orci id enim tristique faucibus a at augue. Etiam non arcu vitae neque tincidunt posuere </p>
                <p>{{ config.company.name }}</p>
                <ul class="list-inline banner-social-buttons">
                    <li><a href="" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                    </li>
                    <li><a href="" class="btn btn-default btn-lg"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
                    </li>
                    <li><a href="" class="btn btn-default btn-lg"><i class="fa fa-google-plus fa-fw"></i> <span class="network-name">Google+</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>



    <!-- Core JavaScript Files -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Google Maps API Key - You will need to use your own API key to use the map feature -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/grayscale.js"></script>

</body>

</html>
