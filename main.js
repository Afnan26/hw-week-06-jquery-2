$( "button" ).last().click(function() {
    $( "#clicker" ).last().fadeToggle( "fast", function() {
      $( "#secret" ).append( "Click me to toggle a hidden secret!" );
    });
  });