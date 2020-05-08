 //JavaScript function wrapping everything
 $(document).ready(function() {

    var currentDateAndTime = Date(Date.now()); 
    var timeBlocks  = $(".time-block");
  

    $("#currentDay").text(currentDateAndTime);
    //updating hours
    function updateHours() {
      var currentHour = new Date().getHours();//current military time
        //looping through time-blocks
      for (var i = 0; i < timeBlocks.length; i++){

      }
    }


  });