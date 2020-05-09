//JavaScript function wrapping everything
$(document).ready(function () {
  var currentDateAndTime = Date(Date.now());
  var saveBtn = $(".btn");
  $("#currentDay").text(currentDateAndTime);
  //save button
  saveBtn.on("click", function() {
    var saveHour = $(this).val();
    var text =  $(this).siblings(".description").val().trim();
    console.log(saveHour);
    console.log(text);
    localStorage.setItem(saveHour, text);
  })
  //updating hours
  function updateHours() {
    var currentHour = new Date().getHours();//current military time
    //looping through time-blocks 
    for (var i = 9; i < 18; i++) {
      //loading local storage
      var hourText = localStorage.getItem(i);
      if (hourText !== null) {
        $("#text" + i).val(hourText);
      }
      if (currentHour > i) {
        $("#hour-" + i).addClass("past");
      }
      else if (currentHour === i) {
        $("#hour-" + i).removeClass("past").addClass("present");
       
      } else {
        $("#hour-" + i).removeClass("past").removeClass("present").addClass("future");
      }
    }
  }
  updateHours();

//reRun updateHours every 60 seconds
setInterval(updateHours, 60000);

});