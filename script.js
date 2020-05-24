
//startter function
function start(){
  
//sets date on the header
  $('#currentDay').append(moment().format('MMM Do, YYYY'));

  checkTime();

}


//function for color coding time blocks
function checkTime(){

    var hour = moment().hours();


    // loops through all hours checks if "i" is past presnt or future 
    for(var i = 9; i <= 17; i++) {

        var target = "#" + i;
        var block = parseInt($(target).attr("id"));

        if(block > hour) {
            $(target).css("background-color", "#91cf9c")
        }
        else if(block < hour) {
            $(target).css("background-color", "#ed5a61")
        }
        else if(block === hour) {
            $(target).css("background-color", "#bab9b6")
        }
    }


    saveData();


}


//function for saving data
function saveData(){

    //Saves event on click of button
    $(".saveBtn").click(function(){
        var save = parseInt($(this).attr("id"));
        var event = $("#" + save + "t").val();
        console.log(event);
        localStorage.setItem("" + save, event);
        console.log(save);
    });


    //loops through all hours and checks for saved events
    for(var i = 9; i <= 17; i++) {
        var text = "#" + i + "t";
        $(text).val(localStorage.getItem("" + i));
        console.log(localStorage.getItem("" + i));
    }

}

start();