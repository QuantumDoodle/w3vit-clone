const words = [
  "Passionate about eCommerce Excellence",
  "I Craft Robust Online Stores with Cutting-Edge Development",
  " Aesthetically Pleasing Design",
  "I Craft Robust Online Stores with Cutting-Edge Development",
  "Continuous Support Your Success My Code.",
];
const changingText = document.getElementById("changing-text");

let index = 0;

function updateText() {
  changingText.style.animation = "none"; // Reset animation
  void changingText.offsetWidth; // Trigger reflow
  changingText.style.animation = null; // Reapply animation

  changingText.textContent = words[index];
  index = (index + 1) % words.length;
}

// Start the animation loop
updateText();
setInterval(updateText, 2500);

$(document).ready(function () {
  console.log("form Validation");

  $.validator.addMethod("lettersOnly", function(value, element) {
  return this.optional(element) || /^[A-Za-z\s]+$/.test(value);
}, "Name must contain only letters and spaces");

  $.validator.addMethod("customEmail", function(value, element) {
  return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}, "Please enter a valid email address");


  $("#form").validate({
    rules: {
      name:{
        required: true,
        minlength: 2,
        lettersOnly:true,
      },
      email:{
        required: true,
        customEmail: true,
      },
      message:{
        required:true,
        minlength:2,
        maxlength:500,
      }
    },
    messages:{
      name:{
        required:"This field is required",
        minlength:"Name should have at least 2 charcter",
        lettersOnly:"Numbers are not allowed",
      },
      email:{
        required:"This field is required",
        customEmail:"Enter a valid email address",
      },
      message:{
        required:"This field is required",
        minlength:"Message should have at least 2 charcter",
        maxlength:"Message should not exeed 500 charcter",
      }
    }
  });
  $(this).on('click','#mySubmit',function(e)
  {
    e.preventDefault();

    if ($('#form').valid()){

      const formData = {
        name : $('#fname').val(),
        email : $('#femail').val(),
        msg : $('#fmessage').val(),
      }
      console.log(formData);
      console.log(`Name = ${formData.name}`);
      console.log(`Email = ${formData.email}`);
      console.log(`Message = ${formData.msg}`);
    }
  }
  )
});
