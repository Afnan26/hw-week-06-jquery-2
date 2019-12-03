//EXERCICE 1

// $( "button" ).last().click(function() {
//     $( "#clicker" ).last().fadeToggle( "fast", function() {
//       $( "#secret" ).append( "Click me to toggle a hidden secret!" );
//     });
//   });

//   $(document).ready(function(){
//     $("button").click(function(){
//       $("#clicker").fadeIn();
//       $("#secret").fadeIn("slow");
//       $("div").fadeIn(1000);

//     });
// });


// $( document.body ).click(function () {	
//   $( "button" ).last().click(function() {
//     if ( $( "div" ).first().is( ":hidden" ) ) {	   
//        $( "#clicker" ).last().fadeToggle( "fast", function() {
//       $( "div" ).slideDown( "slow" );	     
//        $( "#secret" ).append( "Click me to toggle a hidden secret!" );
//     }else{	   

//      });

//       $( "div" ).hide();	
//     });

//---------------------------------------------------------

//EXERCICE 2

// $( document.body ).click(function() {
//   if ( $( "#clicker" ).first().is( ":hidden" ) ) {
//     $( "#secret" ).show( "slow" );
//   } else {
//     $( "p.secret" ).slideUp();
//   }
// });

//--------------------------------------------------------------

//EXERCICE 3

$(document).ready(function()
{
  $("#clicker").click(function(){ 

    $("img").attr('src', 'img1.gif');
    $("#clicker").hide();

  });
});