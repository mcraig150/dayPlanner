
var check;

function start(){
  $('#currentDay').append(moment().format('MMM Do, YYYY'));

  checkTime();

}

function checkTime(){

    var time = moment().format("LT");

    var mTime = moment(time, ["h:mm"]).format("HH:mm");

    time = mTime;

    

    var tNum = parseInt(time.substring(0,time.indexOf(":")));

    console.log(tNum);

    if (tNum > 9) {
        $("#9").css("background-color", "#e09792");
    }
    else if (tNum === 9) {
        $("#9").css("background-color", "#9dcf9b");
    }

    if (tNum > 10) {
        $("#10").css("background-color", "#e09792");
    }
    else if (tNum === 10) {
        $("#10").css("background-color", "#9dcf9b");
    }

    if (tNum > 11) {
        $("#11").css("background-color", "#e09792");
    }
    else if (tNum === 11) {
        $("#11").css("background-color", "#9dcf9b");
    }

    if (tNum > 12) {
        $("#12").css("background-color", "#e09792");
    }
    else if (tNum === 12) {
        $("#12").css("background-color", "#9dcf9b");
    }

    if (tNum > 13) {
        $("#13").css("background-color", "#e09792");
    }
    else if (tNum === 13) {
        $("#13").css("background-color", "#9dcf9b");
    }

    if (tNum > 14) {
        $("#14").css("background-color", "#e09792");
    }
    else if (tNum === 14) {
        $("#14").css("background-color", "#9dcf9b");
    }

    if (tNum > 15) {
        $("#15").css("background-color", "#e09792");
    }
    else if (tNum === 15) {
        $("#15").css("background-color", "#9dcf9b");
    }

    if (tNum > 16) {
        $("#16").css("background-color", "#e09792");
    }
    else if (tNum === 16) {
        $("#16").css("background-color", "#9dcf9b");
    }
    if (tNum > 17) {
        $("#17").css("background-color", "#e09792");
    }
    else if (tNum === 17) {
        $("#17").css("background-color", "#9dcf9b");
    }


}

start();