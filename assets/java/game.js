
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
  $("#defendhotdog").hide();
  $("#defendhowie").hide();
  $("#defendstinky").hide();
  $("#defendorgan").hide();
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
    //howie is selected as character
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
    //organ as character
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
    //stinky as character
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
    // enemy selection
    ($("#enemystinky").on("click", function () {
      $("#enemystinky").hide();
      $("#enemyhotdog").hide();
      $("#enemyhowie").hide();
      $("#enemyorgan").hide();
      $("#defendstinky").show();
    }));
    
    ($("#enemyhotdog").on("click", function () {
      $("#enemyhotdog").hide();
      $("#enemystinky").hide();
      $("#enemyorgan").hide();
      $("#enemyhowie").hide();
      $("#defendhotdog").show();
    }));

    ($("#enemyorgan").on("click", function () {
      $("#enemyorgan").hide();
      $("#enemystinky").hide();
      $("#enemyhotdog").hide();
      $("#enemyhowie").hide();
      $("#defendorgan").show();
    }));

    ($("#enemyhowie").on("click", function () {
      $("#enemyhowie").hide();
      $("#enemyorgan").hide();
      $("#enemyhotdog").hide();
      $("#enemystinky").hide();
      $("#defendhowie").show();
    }));

});