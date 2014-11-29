$(document).ready(function () {

    $('.slider').slider();
//    $(".alert").append('&nbsp;&nbsp;<a class="close" data-dismiss="alert">×</a>');


    $('.gllpSearchField').keydown(function (event) {

        if (event.keyCode == 13) {

            if ($('.gllpSearchField').val().length > 0) {
                $('.gllpSearchButton').click();


            }
            event.preventDefault();
            return false;
        }
    });
});
/** Line graph Options **/

var options = {
// Boolean - Whether to animate the chart
    animation: true,


// Number - Number of animation steps
    animationSteps: 60,

// String - Animation easing effect
    animationEasing: "easeOutQuart",

// Boolean - If we should show the scale at all
    showScale: true,

// Boolean - If we want to override with a hard coded scale
    scaleOverride: true,

// ** Required if scaleOverride is true **
// Number - The number of steps in a hard coded scale
    scaleSteps: 5,
// Number - The value jump in the hard coded scale
    scaleStepWidth: 10,
// Number - The scale starting value
    scaleStartValue: 0,

// String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

// Number - Pixel width of the scale line
    scaleLineWidth: 1,

// Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

// Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

// Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: false,

// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

// String - Scale label font declaration for the scale label
    scaleFontFamily: "'Arial', 'Helvetica', 'Arial', sans-serif",

// Number - Scale label font size in pixels
    scaleFontSize: 18,

// String - Scale label font weight style
    scaleFontStyle: "normal",

// String - Scale label font colour
    scaleFontColor: "#666",

// Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

// Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

// Array - Array of string names to attach tooltip events
    tooltipEvents: ["click", "touchstart", "touchmove"],

// String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

// String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

// Number - Tooltip label font size in pixels
    tooltipFontSize: 30,

// String - Tooltip font weight style
    tooltipFontStyle: "normal",

// String - Tooltip label font colour
    tooltipFontColor: "#fff;",

// String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: " 'Helvetica', 'Arial', sans-serif",

// Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

// String - Tooltip title font weight style
    tooltipTitleFontStyle: "normal",

// String - Tooltip title font colour
    tooltipTitleFontColor: "#000",

// Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

// Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

// Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

// Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

// Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,
    tooltipTemplate: "<%= value %>",


// Function - Will fire on animation progression.
    onAnimationProgress: function () {
    },


// Function - Will fire on animation completion.
    onAnimationComplete: function () {
    }

};


$(document).ready(function () {
    //Notification
    $.get("/notification", function (response) {

    });

});


//$(window).scroll(function() {
//    if ($(".navbar").offset().top > 50) {
//        $(".navbar-fixed-top").addClass("top-nav-collapse");
//    } else {
//        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//    }
//});
$(".navbar-fixed-top").addClass("top-nav-collapse");

$(function () {
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
