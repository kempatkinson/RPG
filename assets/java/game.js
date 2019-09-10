
var hotdog = {
    "hp": 100,
    "ap": 100,
    "cap": 100,
}

var stinky = {
    "hp": 100,
    "ap": 100,
    "cap": 100,
}

var howie = {
    "hp": 100,
    "ap": 100,
    "cap": 100,
}

var organ = {
    "hp": 100,
    "ap": 100,
    "cap": 100,
}

$(document).ready(function () {
  //hot dog is selected as character, 
     ($("#hotdog").onclick = function () {
        $("#hotdog").attr("class", "hidden")
        $("#stinky").attr("class", "hidden")
        $("#organ").attr("class", "hidden")
        $("#howie").attr("class", "hidden")
        $("#selecthotdog").attr("class", "shown")
    });





});