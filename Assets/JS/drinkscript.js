$(document).ready(function() {
    var LookupDrinks = JSON.parse(localStorage.getItem("drinks")) || [];
    $("#drinkSearchBtn").on("click", grabInput)

    function grabInput() {

        var drinks = $("#drinkName").val();
        // if city is empty     === empty set "" ....empty string
        // alter city cannot be empty
        searchDrinks(drinks);
    }

    function searchDrinks(drinks) {
        saveDrinksToLS(drinks);
        //Food Ajax Call
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}"
        console.log(queryURL);
        $.ajax({
            type: "GET",
            url: queryURL,
            dataType: "json",
            success: function(response) {
                console.log(response);
                console.log(queryURL);
            }

        })
    }

    function saveDrinksToLS(drinkName) {
        if (LookupDrinks.indexOf(drinkName) === -1) {
            LookupDrinks.push(drinkName);
            localStorage.setItem("drinks", JSON.stringify(LookupDrinks))
        }
    }

    function createListDrinks(drinkSearch) {
        $("drink-list").empty();


        var keys = Object.keys(drinkSearch);
        for (var i = 0; i < keys.length; i++) {
            var drinkName = $("<button>");
            drinkName.addClass("list-group-item list-group-item-action");

            var splitStr = keys[i].toLowerCase().split(" ");
            for (var m = 0; m < splitStr.length; m++) {
                splitStr[m] = splitStr[m].charAt(0).toUpperCase() + splitStr[m].substring(1);
            }

            var titleDrink = splitStr.join(" ");
            drinkName.text(titleDrink);
            $("#drink-list").append(drinkName);
        }

    }

    createListDrinks();
    // var drinkName = $("<h1>").text(drinkName.);
    // $("#drinkName").prepend(drinkName);

    // var drinkIcon = $("<img>");
    // drinkIcon.attr(
    //     "src",
    //     "https://www.thecocktaildb.com/images/media/drink/?s=${drinks}.jpg/preview(100x100 pixels)" + drinkName.drinks[0].icon + ".jpg"
    // );

    // console.log(drinkIcon.list[i].drinkName[0].icon);

    // $("#drinkName").append(drinkIcon);
    // function createListDrinks(drinkSearch) {
    //     $("drinkName").empty();

    //     var keys = Object.keys(drinkSearch);
    //     for (var i = 0; i < keys.length; i++) {
    //         var drinkEntry = $("<button>");
    //         drinkEntry.addClass("list-group-item list-group-item-action");

    //         var splitStr = keys[i].toLowerCase().split(" ");
    //         for (var m = 0; m < splitStr.length; m++) {
    //             splitStr[m] = splitStr[m].charAt(0).toUpperCase() + splitStr[m].substring(1);
    //         }

    //         var titleDrink = splitStr.join(" ");
    //         DrinkEntry.text(titleDrink);
    //         $("#drink-list").append(drinkEntry);
    //     }

    // }
    // createListDrinks();


    // $("#drink-name").empty();


    // var drinkName = $("<h3>").text(drinks.name); //h3
    // $("#drinkname").prepend(drinkName);

    // var drinkIcon = $("<img>");
    // drinkIcon.attr(
    //     "src",
    //     "https://www.thecocktaildb.com/images/media/drink/preview(100x100 pixels)" + drinks.drink[0].icon + ".jpg"
    // );


});