// use $.ready() to delay code from executing until all DOM assets have been loaded
$(document).ready(function() {

// if user clicks <a>, prevent event default
$("a").click(function() {
    event.preventDefault();
  });

//read more
$(".readmore").click(function(){
  //have the <p> tag of the blog post to slide down
  // we want ReadLess to show
  // hide ReadMore
  $(".show-this-on-click").slideDown();
  $(".readless").show();
  $(".readmore").hide();
});

//read less --- this is written the same as the .readmore statement above and it doesn't work and I don't know why
// $(".readless").click(function(){
//   $(".show-this-on-click").slideUp();
//   $(".readmore").show();
//   $(".readless").hide();
// });

//read less --- this does work
function readLess(){
  $(".show-this-on-click").slideUp();
  $(".readless").hide();
  $(".readmore").show();
};
$(".readless").click(readLess);

//learn more
$(".learnmore").click(function(){

  $(".learnmoretext").slideDown();
  $(".learnmoretext").show();
  $(".learnmore").hide();
});

}); //end ready
