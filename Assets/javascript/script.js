//JavaScript function wrapping everything
$(document).ready(function () {
  var currentDateAndTime = Date(Date.now());
  $("#currentDay").text(currentDateAndTime);
  
  //updating hours
  function updateHours() {
    var currentHour = new Date().getHours();//current military time
    //looping through time-blocks
    for (var i = 9; i < 18; i++) {
      if (currentHour > i) {
        $("#hour-" + i).addClass("past");
      }
      else if (currentHour == i) {
        $("#hour-" + i).removeClass("past").addClass("present");
       
      } else {
        $("#hour-" + i).removeClass("past").removeClass("present").addClass("future");
      }
    }
  }
  updateHours();
  
  //saving description item 
  // $(".saveBtn").on("click", function() {
  //   var 
  // })

});