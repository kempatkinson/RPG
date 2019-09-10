$(document).ready(function () {

  // var game = {
  //   characters: [
  //     {
  //       name: "hotdog",
  //       hp: 70,
  //       image: "assets/images/howie.jpg"
  //     },
  //     {
  //       name: "stinky",
  //       hp: 100
  //     }
  //   ],
  //   characterSelected: {
  //     name: "",
  //     hp: 0
  //   },
  //   printSelected: function() {
  //     $('#selected-area').html("<img src='" + this.characterSelected.image + "' />")
  //   },
  //   printEveryone: function() {
  //     for (var i =0 ; i < this.characters.length ; i ++) {
  //       var characterMaker = $('<div>')
  //       characterMaker.attr("class", "col-md-3");
  //       characterMaker.attr("data-enemy", i);
  //       // more TO DO
  //       $('.character-area').html("<img src='" + this.characters[i].image + "' />")
  //     }
  //   }

  // }
  var hotdog = {
    "hp": 70,
    "ap": 110,
    "cap": 70,
  }

  var stinky = {
    "hp": 100,
    "ap": 120,
    "cap": 60,
  }

  var howie = {
    "hp": 150,
    "ap": 90,
    "cap": 90,
  }

  var organ = {
    "hp": 80,
    "ap": 120,
    "cap": 100,
  }

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
  $("#battle").hide();

  $(".howiehealth").text(howie.hp);
  $(".hotdoghealth").text(hotdog.hp);
  $(".organhealth").text(organ.hp);
  $(".stinkyhealth").text(stinky.hp);
  
  // $(document).on('click', '.enemy', function() {
  //   $('.allEnemies').hide();
  //   $(this).show()
  // })


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

    $("#hotdog").attr('class', 'chosen');
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

    $("#howie").attr('class', 'chosen');
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

    $("#organ").attr('class', 'chosen');
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

    $("#stinky").attr('class', 'chosen');
  }));
  // enemy selection
  ($("#enemystinky").on("click", function () {
    $("#enemystinky").hide();
    $("#enemyhotdog").hide();
    $("#enemyhowie").hide();
    $("#enemyorgan").hide();
    $("#defendstinky").show();
    $("#battle").show();

    $("#stinky").attr('class', 'defender');
  }));

  ($("#enemyhotdog").on("click", function () {
    $("#enemyhotdog").hide();
    $("#enemystinky").hide();
    $("#enemyorgan").hide();
    $("#enemyhowie").hide();
    $("#defendhotdog").show();
    $("#battle").show();

    $("#hotdog").attr('class', 'defender');
  }));

  ($("#enemyorgan").on("click", function () {
    $("#enemyorgan").hide();
    $("#enemystinky").hide();
    $("#enemyhotdog").hide();
    $("#enemyhowie").hide();
    $("#defendorgan").show();
    $("#battle").show();

    $("#organ").attr('class', 'defender');
  }));

  ($("#enemyhowie").on("click", function () {
    $("#enemyhowie").hide();
    $("#enemyorgan").hide();
    $("#enemyhotdog").hide();
    $("#enemystinky").hide();
    $("#defendhowie").show();
    $("#battle").show();

    $("#howie").attr('class', 'defender');
  }));


  // attack button : show ur damage, show theirs, subtract both from hp, add AP to chosen AP, 
  ($("#attack").on("click", function () {
    $("#chosendamge").text($(".chosen").ap);
    $("#defenderdamage").text($(".defender").cap);

  }));


});