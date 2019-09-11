$(document).ready(function () {
    var game = {
        characters: [
            {
                name: "Hotdog",
                index: 0,
                hp: 70,
                ap: 110,
                cap: 70,
                image: "assets/images/hotdog.jpg",

            },
            {
                name: "Howie",
                index: 1,
                hp: 150,
                ap: 90,
                cap: 90,
                image: "assets/images/howie.jpg"
            },
            {
                name: "Ruben",
                index: 2,
                hp: 100,
                ap: 120,
                cap: 60,
                image: "assets/images/stinky.jpg"
            },
            {
                name: "New Joe",
                index: 3,
                hp: 80,
                ap: 120,
                cap: 100,
                image: "assets/images/organ.png"
            }
        ],

        chosencharacter: {
            name: "",
            hp: 0,
            ap: 0,
            cap: 0,
            image: ""
        },

        printSelected: function () {
            $('#selected-area').html("<img src='" + this.characterSelected.image + "' />")

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
                //add to the page
                $('.characters-here').append(makeADiv)
            }
        },
    }


    game.printEveryone();
    
    ($(".character").on("click", function () {
        $(this).addClass("chosen");
        $(this).removeClass("character")
        $(this).detach().appendTo('.chosen-here');
        $(".characters-here").addClass("enemy");
        $(".characters-here").detach().appendTo('.enemies-here');
    }))
    ($(".enemy").on("click", function () {
        $(this).addClass("defender");
        $(this).detach().appendTo('.defenders-here');

    }))

    })



