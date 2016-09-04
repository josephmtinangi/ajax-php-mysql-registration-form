$(function(){
  $("form[name='registration']").validate({
    rules: {
      username: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      username: {
        required: "Username is required",
        minlength: "Minimum length should be 3 characters"
      },
      email: "Please enter a valid email address",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      }
    },
    submitHandler: submitRegistrationForm
  });

  function submitRegistrationForm(){

    var data = $("form[name='registration']").serialize();

    $.ajax({
      type: 'POST',
      url: 'ajax/register.php',
      data: data,
      beforeSend: function(){
        $("#error").fadeOut();
      },
      success: function(data) {
        if(data == 1){
          $("#error").fadeIn(1000, function(){
            $("#error").html("Sorry, that email address is already taken");
            $("#btn-submit").html("Create Account");
          });
        }else if(data == "registered") {
          $("#btn-submit").html("<i class='fa fa-spinner fa-pulse'></i> Signing up");
          setTimeout('$(".form-signin").fadeOut(500, function() {$("#signing-form").load("success.html");})', 2000);
        }else{
          $("#error").fadeIn(1000, function(){
            $("#error").html(data);
            $("#btn-submit").html("Create Account");
          });
        }
      }
    });
    // return false;
  }
});
