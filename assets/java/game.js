$(document).ready(function () {
    var game = {
        characters: [
            {
                name: "Hotdog",
                hp: 140,
                ap: 15,
                baseap: 15,
                cap: 15,
                image: "assets/images/hotdog.jpg",
                chose: false,
                defender: false,
                dead: false

            },
            {
                name: "Howie",
                hp: 150,
                ap: 20,
                baseap: 20,
                cap: 10,
                image: "assets/images/howie.jpg",
                chose: false,
                defender: false,
                dead: false
            },
            {
                name: "Ruben",
                hp: 130,
                ap: 25,
                baseap: 25,
                cap: 15,
                image: "assets/images/stinky.jpg",
                chose: false,
                defender: false,
                dead: false
            },
            {
                name: "New Joe",
                hp: 120,
                ap: 25,
                baseap: 25,
                cap: 20,
                image: "assets/images/organ.png",
                chose: false,
                defender: false,
                dead: false
            }
        ],

        chosencharacter: {
            name: "",
            hp: 0,
            ap: 0,
            cap: 0,
            image: "",
            chosen: true
        },

        printSelected: function () {
            var makeADiv = $('<div>');
            //add classes and id to that div
            makeADiv.attr('class', 'col-md-3 character');
            //add text
            makeADiv.text(this.name);
            //add image to div
            var image = $('<img>');
            image.attr('src', this.image);
            makeADiv.append(image);
            makeADiv.append(this.hp);
            //add to the page
            $(".characters-here").append(makeADiv)

        },

        printEveryone: function () {
            for (var i = 0; i < this.characters.length; i++) {
                //make a div
                var makeADiv = $('<div>');
                //add classes and id to that div
                makeADiv.attr('class', 'col-md-3 character');
                //add text
                makeADiv.text(this.characters[i].name);
                //add image to div
                var image = $('<img>');
                image.attr('src', this.characters[i].image);
                makeADiv.append(image);
                makeADiv.append("<div id='health-" + game.characters[i].name + "'> Character HP: " + game.characters[i].hp + "</div>")
                makeADiv.attr("id", this.characters[i].name);
                //add to the page
                $('.characters-here').append(makeADiv)
            }
        },
    }


    game.printEveryone();

    ($(".character").on("click", function () {
        $(this).addClass("chosen");
        $(this).detach().appendTo('.chosen-here');
        $(".characters-here").empty();
        for (var i = 0; i < game.characters.length; i++) {
            if ($(this).attr('id') == game.characters[i].name) {
                game.characters[i].chose = true;
                console.log(game.characters[i]);

            } else {
                //make a div
                var makeADiv = $('<div>');
                //add classes and id to that div
                makeADiv.attr('class', 'col-md-3 character enemy');
                //add text
                makeADiv.text(game.characters[i].name);
                //add image to div
                var image = $('<img>');
                image.attr('src', game.characters[i].image);
                makeADiv.append(image);
                // makeADiv.append(game.characters[i].hp);
                // these next 2 lines are the same!!
                makeADiv.append("<div id='health-" + game.characters[i].name + "'> Character HP: " + game.characters[i].hp + "</div>");
                // makeADiv.append(`<span id="health-${game.characters[i].name}>Character HP: ${game.characters[i].hp} </span>`);
                makeADiv.attr("id", game.characters[i].name);
                //add to the page
                $('.enemies-here').append(makeADiv)
            }
        }



    }))

    $(document).on("click", "#attack", function () {
        for (var i = 0; i < game.characters.length; i++) {
            if (game.characters[i].defender == true) {
                $("#defenderdamage").text(game.characters[i].cap);
                var defenderindex = i;

            } else if (game.characters[i].chose == true) {
                $("#chosendamage").text(game.characters[i].ap);
                var chosenindex = i;
            }
        }
        game.characters[defenderindex].hp -= game.characters[chosenindex].ap;
        ($("#health-"+game.characters[defenderindex].name).text("Character HP: " + game.characters[defenderindex].hp))
        game.characters[chosenindex].ap += game.characters[chosenindex].baseap;
        game.characters[chosenindex].hp -= game.characters[defenderindex].cap;
        ($("#health-"+game.characters[chosenindex].name).text("Character HP: " + game.characters[chosenindex].hp))
        if ((game.characters[defenderindex].hp <= 0) && (game.characters[chosenindex].hp > 0)) {
            $(".defender-here").empty();
            existingdefender= false;
            game.characters[defenderindex].dead = true;
            alert("You're doing the best at this! Enemy defeated!")
        } 
        if (game.characters[chosenindex].hp <= 0) {
            alert("You flinched! Now you have to marry your mother in law. Refresh to try again.")

        }
        var deadcount = 0;
        for (var i = 0; i < game.characters.length; i++) {
            if (game.characters[i].dead == true) {
                deadcount++; 
            } 
        }
        if (deadcount == 3) {
            alert("You are the most popular now! You win!")
        }
        console.log(deadcount)
        






    })
    var existingdefender = false;
    $(document).on("click", ".enemy", function () {
        if (!existingdefender) {
            existingdefender = true;
            $(this).addClass("defender");
            $(this).detach().appendTo('.defender-here');
            for (var i = 0; i < game.characters.length; i++) {
                if ($(this).attr('id') == game.characters[i].name) {
                    game.characters[i].defender = true;
                    console.log(game.characters[i]);
                }
            }
        }
    })
})


