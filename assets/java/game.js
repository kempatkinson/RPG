
// var hotdog = {
//   "hp": 100,
//   "ap": 100,
//   "cap": 100,
// }

// var stinky = {
//   "hp": 100,
//   "ap": 100,
//   "cap": 100,
// }

// var howie = {
//   "hp": 100,
//   "ap": 100,
//   "cap": 100,
// }

// var organ = {
//   "hp": 100,
//   "ap": 100,
//   "cap": 100,
// }

$(document).ready(function () {
  $("#selecthotdog").hide();
  $("#selecthowie").hide();
  $("#selectstinky").hide();
  $("#selectorgan").hide();
  $("#enemyhotdog").hide();
  $("#enemyhowie").hide();
  $("#enemystinky").hide();
  $("#enemyorgan").hide();
  //hot dog is selected as character, 
  ($("#hotdog").on("click", function () {
    $("#hotdog").hide();
    $("#howie").hide();
    $("#stinky").hide();
    $("#organ").hide();
    $("#selecthotdog").show();
    $("#enemyhowie").show();
    $("#enemystinky").show();
    $("#enemyorgan").show();
  }));
    //howie is selected
    ($("#howie").on("click", function () {
      $("#hotdog").hide();
      $("#howie").hide();
      $("#stinky").hide();
      $("#organ").hide();
      $("#selecthowie").show();
      $("#enemyhotdog").show();
      $("#enemystinky").show();
      $("#enemyorgan").show();
    }));
    //organ
    ($("#organ").on("click", function () {
      $("#hotdog").hide();
      $("#howie").hide();
      $("#stinky").hide();
      $("#organ").hide();
      $("#selectorgan").show();
      $("#enemyhotdog").show();
      $("#enemystinky").show();
      $("#enemyhowie").show();
    }));
    //stinky
    ($("#stinky").on("click", function () {
      $("#hotdog").hide();
      $("#howie").hide();
      $("#stinky").hide();
      $("#organ").hide();
      $("#selectstinky").show();
      $("#enemyhotdog").show();
      $("#enemyhowie").show();
      $("#enemyorgan").show();
    }));

});