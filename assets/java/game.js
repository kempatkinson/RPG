$(document).ready(function () {
    var game = {
        characters: [
            {
                name: "Hotdog",
                hp: 80,
                ap: 15,
                cap: 20,
                image: "assets/images/hotdog.jpg",
                chose: false,
                defender: false

            },
            {
                name: "Howie",
                hp: 90,
                ap: 20,
                cap: 10,
                image: "assets/images/howie.jpg",
                chose: false,
                defender: true
            },
            {
                name: "Ruben",
                hp: 70,
                ap: 25,
                cap: 15,
                image: "assets/images/stinky.jpg",
                chose: false,
                defender: false
            },
            {
                name: "New Joe",
                hp: 60,
                ap: 25,
                cap: 25,
                image: "assets/images/organ.png",
                chose: false,
                defender: false
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
                makeADiv.append(this.characters[i].hp);
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
                makeADiv.append(game.characters[i].hp);
                makeADiv.attr("id", game.characters[i].name);
                //add to the page
                $('.enemies-here').append(makeADiv)
            }
        }
    


    }))
        ($("#attack").on("click", function() {
            for (var i = 0; i < game.characters.length; i++) {
                if (game.characters[i].defender == true) {
                    $("#defenderdamage").text(game.characters[i].cap);
                    var defenderindex = i;

                } else if (game.characters[i].chose == true) {
                    $("#chosendamage").text(game.characters[i].ap);
                    console.log(game.characters[i]);
                    var chosenindex = i;
                }
            }
            game.characters[defenderindex].hp -= game.characters[chosenindex].ap;
            game.characters[chosenindex].ap = 2*game.characters[chosenindex].ap;
            game.characters[chosenindex].hp -= game.characters[defenderindex].cap;
            console.log(game.characters[chosenindex])
            console.log(game.characters[defenderindex])
            if (game.characters[defenderindex].hp < 0) {
                $(".defender-here").empty();
                alert('You killed them! Pick another')
            } else if (game.characters[chosenindex].hp < 0) {
                alert("You Lose!")

            }



                    
                

        }))

        // ($(".enemy").on("click", function () {
        //     $(this).addClass("defender");
        //     $(this).detach().appendTo('.defender-here');
        //     for (var i = 0; i < game.characters.length; i++) {
        //         if ($(this).attr('id') == game.characters[i].name) {
        //             game.characters[i].defender = true;
        //             console.log(game.characters[i]);
        //         }
        //     }
        // }))
})



