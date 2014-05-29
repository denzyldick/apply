function submitLogin()
{
    var email = $("#email").val();

    var password = $("#password").val();
    if (email.length < 1)
    {
        $("#alert").html("<strong>Please enter your email</strong").fadeIn("fast").delay(3000).fadeOut("fast");
    }

    $.post("/login/login", {email: email, password: password}, function(data)
    {
  
      if(data.status === 'true')
      {
          
          window.location =  data.redirect;
      }else
      { 
          $("#alert").html("<strong>"+ data.message+"</strong").fadeIn("fast").delay(3000).fadeOut("fast");
      }
      
    },"json");
}

function submitSignUp()
{
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var password = $("#password").val();
    var re_type = $("#re_password").val();
    var email = $("#email").val();
    var type = $("#type").val();

    if (firstname.length < 1 || lastname.length < 1 || password.length < 1 || re_type.length < 1 || email.length < 1)
    {
        $("#alert").html("<strong>Please fill everything in.</strong>").fadeIn("fast").delay(3000).fadeOut("fast");
    } else {
        $.ajax({
            url: 'signup/start',
            type: 'POST',
            
            data: "firstname=" + firstname + "&lastname=" + lastname + "&password=" + password + "&re_type=" + re_type + "&email=" + email,
            success: function(data) {
                console.log(data);
                if(data.status === true)
                {
                    alert(data.message)
                }else
                {
                    $("#alert").html(data.message).fadeIn("fast").delay(3000).fadeOut("fast");
                }
                
            }
        });
    }
}

$(document).ready(function() {
    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });
});

