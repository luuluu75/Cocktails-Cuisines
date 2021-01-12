$(document).ready(function() {
    var searchedDrinks = JSON.parse(localStorage.getItem("drinks")) || [];
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
        if (searchedMeals.indexOf(drinkName) === -1) {
            searchedMeals.push(drinkName);
            localStorage.setItem("drinks", JSON.stringify(searchedDrinks))
        }
    }
})