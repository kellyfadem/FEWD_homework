$(document).ready(function() { //document ready

var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']; //define a variable to an array that contains the names of the cities

$.each(cities, function(index, value) { //for each of the array indexes, run this function
          //for each name of the city show in drop down menu
          //add option tags with city names
        $(".city-type").append("<option>"+value+"</option>");
});

$(".city-type").change(function() { //when user selects .city-type, run this function
        $(this).val(); //get value of user selection
          console.log($(this).val()); //log the selected value
          var city = $(this).val();
         if (city === "NYC") {
                      console.log(city);
           $("body").attr("class","nyc");
         }
         else if (city === "SF") {
                      console.log(city);
           $("body").attr("class","sf");
         }
         else if (city === "LA") {
                      console.log(city);
           $("body").attr("class","la");
         }
         else if (city === "ATX") {
                      console.log(city);
           $("body").attr("class","austin");
         }
         else if (city === "SYD") {
                      console.log(city);
           $("body").attr("class","sydney");
         }

});






//- Use the ```$.attr()``` function to update html classes
//- Use ```if/else if/else ``` conditionals to control the flow of your application





}); //close ready
