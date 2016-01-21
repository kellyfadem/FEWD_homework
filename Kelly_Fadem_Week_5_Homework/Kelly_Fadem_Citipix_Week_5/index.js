$(document).ready(function() { //document ready

var city; //create a variable called city

$('.submit-btn').click(function(evt) { //listen for user to click submit
    evt.preventDefault(); //prevent default behavior
    city = $('.city-type').val(); //assign city the value of the string from city-type then determine its value using val();
    console.log(city); //log the value of city
    changeBackground(); //run function changeBackground
});

function changeBackground() { //write a function that changes the background based on the city
    function removeBackground() { //remove added background classes
        $("body").removeClass("nyc"); //remove NYC background
        $("body").removeClass("sf"); //remove SF background
        $("body").removeClass("la"); //remove LA background
        $("body").removeClass("austin"); //remove Austin background
        $("body").removeClass("sydney"); //remove Sydney background
      }; //close remove background function

    if(city === "New York" || city === "New York City" || city === "NYC"){ //if user submits NYC
            removeBackground(); //run remove background
            $("body").addClass("nyc"); //add NYC class
          }
      else if(city === "San Francisco" || city === "SF"){ //if user submits SF
              console.log("SFFFFF");
              removeBackground(); //run remove background
              $("body").addClass("sf"); //add SF class
          }
      else if(city === "Los Angeles" || city === "LA" || city === "LAX"){ //if user submits LA
              removeBackground(); //run remove background
              $("body").addClass("la"); //add LA class
          }
      else if(city === "Austin" || city === "ATX"){ //if user submits Austin
            removeBackground(); //run remove background
            $("body").addClass("austin"); //add Austin class
          }
      else if(city === "Sydney" || city === "SYD"){ //if user submits Sydney
              removeBackground(); //run remove background
              $("body").addClass("sydney"); //add Sydney class
          }
      else {
            removeBackground(); //run remove background
          }
  }; //function change background close

}); //close ready
