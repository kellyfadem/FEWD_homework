$(document).ready(function() { //document ready function

  var fahrenheit = 0; //define a variable called fahrenheit and set its value to 0

  $('.submit-celsius-temperature').submit(convertCelsiusToFahrenheit); //if user submits celsius temp, run conversion function

  function convertCelsiusToFahrenheit(evt) { //run this function if jquery hears a submission on .submit-celsius-temperature

          evt.preventDefault(); //prevent default behaviors

          var celsiusInput = $('.celsius-input').val(); //define a variable called celsiusInput and find its value

          celsiusInput = parseFloat(celsiusInput);

          fahrenheit = (celsiusInput * 1.8) + 32; //convert input to fahrenheit

          $('.fahrenheit-output').text(fahrenheit); //write output

          function removeClasses() { //run this function to remove added background color classes
                  $("body").removeClass("white");
                  $("body").removeClass("gray");
                  $("body").removeClass("blue");
                  $("body").removeClass("green");
                  $("body").removeClass("yellow");
                  $("body").removeClass("orange");
                  $("body").removeClass("red");
                }

          if(fahrenheit <= 0) { //change background colors
                removeClasses();
                console.log("white");
                $("body").addClass("white");
              }
          else if(fahrenheit > 0 && fahrenheit <= 32){
                removeClasses();
                console.log("gray");
                $("body").addClass("gray");
              }
          else if(fahrenheit > 32 && fahrenheit <= 55){
                removeClasses();
                console.log("blue");
                $("body").addClass("blue");
              }
          else if(fahrenheit > 55 && fahrenheit <= 72){
                removeClasses();
                console.log("green");
                $("body").addClass("green");
              }
          else if(fahrenheit > 72 && fahrenheit <= 85){
                removeClasses();
                console.log("yellow");
                $("body").addClass("yellow");
              }
          else if(fahrenheit > 85 && fahrenheit <= 100){
                removeClasses();
                console.log("orange");
                $("body").addClass("orange");
              }
          else if(fahrenheit > 100){
                removeClasses();
                console.log("red");
                $("body").addClass("red");
              }

          $('.celsius-input').val(""); //input value reset

  }; //convertCelsiusToFahrenheit function close

}); //ready function close
