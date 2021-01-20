$(document).ready(function() {

            var searchResults;
            var responseMeals;
            var responseDrinks;

            var searchedMeals = JSON.parse(localStorage.getItem("meals")) || [];
            var LookupDrinks = JSON.parse(localStorage.getItem("drinks")) || [];

            //console.log($(".dropdownMenu").val()) //default

            $("#searchBtn").on("click", function() {
                if ($(".dropdownMenu").val() === "meals") {
                    var meals = $("#searchBar").val();
                    searchMeals(meals);
                } else if ($(".dropdownMenu").val() === "drinks") {
                    var drinks = $("#searchBar").val();
                    searchDrinks(drinks);
                }
            })

            function grabInput(event) {

                event.preventDefault();
                if ($(".dropdownMenu").val() === "meals") {
                    var mealId = $(this).attr("meal-id");
                    console.log(mealId);
                    console.log(responseMeals);

                    // var clickedMeal = responseMeals.filter(function(meal){
                    //     return meal.idMeal === mealId;
                    //console.log(clickedMeal);
                    var result = responseMeals.find(meal => meal.idMeal === mealId);
                    console.log(result);
                    var recipeInstruction = $(`<div>${result.strInstructions} </div>`)
                    console.log(recipeInstruction);
                    var recipeImage = `<img class="image" src= ${result.strMealThumb}>`;
                    console.log(recipeImage);

                    // const instructions = [];

                    // for (let line = 1; line <= 1000; line++) 
                    // {
                    //     if (result[`strInstructions${line}`]) {
                    // //         instructions.push(`${result[`strInstructions${i}`]}`);
                    // // } else {
                    // //     // Stop if there are no more instructions
                    // //     break;
                    // // }
                    // // }


                    //var recipeInstruction = `<div> <li> ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')} </li> </div>`;

                    // Get all ingredients from the object. Up to 20
                    const ingredients = [];
                    for (let i = 1; i <= 20; i++) {
                        if (result[`strIngredient${i}`]) {
                            ingredients.push(`${result[`strIngredient${i}`]} - ${result[`strMeasure${i}`]}`);
                    } else {
                        // Stop if there are no more ingredients
                        break;
                    }
                    }
                    
            // var recipeInstruction = `<li> ${instructions.map(instruction => `<li>${instruction}</li>`).split('.')} </li>`;
           var recipeIngredient = `<li> ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')} </li>`;
           console.log(recipeIngredient);


            //strYoutube     strMealThumb
            //$(this).append(recipeInstruction);
            console.log($(this).children());
            console.log($('.accordion-content'));


            // if ($(this).children().length < 3) {
            //    $(this).append(recipeInstruction);
            //  $(this).append(recipeImage);
            //  };
            if ($(this).find(".panel").children().length < 1) {
                $(this).find(".panel").append(recipeIngredient);
                $(this).find(".panel").append(recipeInstruction);
                $(this).find(".panel").append(recipeImage);
            };

            $('#searchResultsTab').foundation('toggle', $(this).find(".panel"));




            //strInstructions
            // })
            for (var i = 0; i < 0; i++) {
                console.log(clickedMeal[i]);

            }
            var acc = document.getElementsByClassName("accordion-item");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");


                });
            }


        } else if ($(".dropdownMenu").val() === "drinks") {
            var drinkId = $(this).attr("drink-id");
            console.log(drinkId);
            console.log(responseDrinks);

            // var clickedMeal = responseMeals.filter(function(meal){
            //     return meal.idMeal === mealId;
            //console.log(clickedMeal);
            var result = responseDrinks.find(drink => drink.idDrink === drinkId);
            console.log(result);


            var recipeInstruction = $(`<div>${result.strInstructions} </div>`)
            console.log(recipeInstruction);
            var recipeImage = `<img class="image" src= ${result.strDrinkThumb}>`;
            console.log(recipeImage);
            //for loop with i
            //for J i=number
            //strIngredients + 
            //if(!$(this).text()){$(this).append(result)};
            //console.log(this.text);
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                if (result[`strIngredient${i}`]) {
                    ingredients.push(`${result[`strIngredient${i}`]} - ${result[`strMeasure${i}`]}`);
            } else {
                // Stop if there are no more ingredients
                break;
            }
            }

            var recipeIngredient = `<li> ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')} </li>`;
           console.log(recipeIngredient);
            

            //strYoutube     strMealThumb
            //$(this).append(recipeInstruction);
            console.log($(this).children());
            console.log($('.accordion-content'));
            //$(!$(this).text()(recipeImage);
            // if ($(this).children().length < 3) {
            //     $(this).append(recipeInstruction);
            //     $(this).append(recipeImage);
            // };
            if ($(this).find(".panel").children().length < 1) {
                $(this).find(".panel").append(recipeIngredient);
                $(this).find(".panel").append(recipeInstruction);
                $(this).find(".panel").append(recipeImage);
            };

            $('#searchResultsTab').foundation('toggle', $(this).find(".panel"));


            // $('#searchResultsTab').foundation('toggle', $(`.accordion-content`));
            //strInstructions
            // })
            for (var i = 0; i < 0; i++) {
                console.log(clickedDrink[i]);

            }
            var acc = document.getElementsByClassName("accordion-item");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");


                });
            }
        }
    }


    function registerClickListeners() {
        $(".accordion-item").on('click', grabInput);

    } //searchedMeals($(this).text());

    if (($(".dropdownMenu").val() === "meals")) {
        $("#mealName").on("keypress", function() {
            if (event.keyCode == 13) {
                var meal = ($(this)).val();
                console.log(meal);
                searchMeals(meal);
            }
        })
    } else if (($(".dropdownMenu").val() === "drinks")) {
        $("#drinkName").on("keypress", function() {
            if (event.keyCode == 13) {
                var drink = ($(this)).val();
                console.log(drink);
                searchDrinks(drink);
            }
        })
    }


    // $("#drinksName").on("keypress", function(){

    // })


    function searchMeals(meals) {
        saveMealsToLS(meals);
        //Food Ajax Call
        var queryURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
        console.log(queryURL);
        $.ajax({
            type: "GET",
            url: queryURL,
            dataType: "json",
            success: function(response) {
                responseMeals = response.meals
                console.log(response.meals);
                //console.log(queryURL);
                //searchResults=response.meals;
                for (var i = 0; i < 5; i++) {
                    //  console.log(response.meals[i]);
                    //   let meal = `<li class=\"accordion-item\" meal-id = ${response.meals[i].idMeal} data-accordion-item data-allow-all-closed='true' >
                    //       <!-- Accordion tab title -->
                    //       <a href=\"#\" class=\"accordion-title\">${response.meals[i].strMeal} </a>
                    //     </li>`
                    if (response.meals[i] != undefined)
                    { var accordianMealTest =
                        `<div class="grid-container" id="mainContent">
                
                    <ul class="accordion" data-accordion data-allow-all-closed="true" >
                        <li class="accordion-item" data-accordion-item meal-id= ${response.meals[i].idMeal} >
                        <!-- Accordion tab title -->
                        <a href="#" class="accordion-title ">${response.meals[i].strMeal}</a>
                        <div class="accordion-content panel" data-tab-content>
                           
                           
                        </div>
                        </li>
                    </ul>
            </div>`
                        //console.log(accordianMealTest);

                    //console.log(meal);

                    // var callMeals = `<li class="mealClass" data-mealid="${response.meals[i].idMeal}"'>${response.meals[i].strMeal} </li> `;
                    // // (response.meals[i].strMeal);
                    // //console.log(callMeals);
                    // $('#searchResultsTab').append(callMeals);
                    $('#searchResultsTab').append(accordianMealTest);

                }
                        
                   

                //click listener
                registerClickListeners()
            }

        }

    })}

    function searchDrinks(drinks) {
        saveDrinksToLS(drinks);
        //Food Ajax Call
        var queryURL2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`
        console.log(queryURL2);
        $.ajax({
            type: "GET",
            url: queryURL2,
            dataType: "json",
            success: function(response) {
                responseDrinks = response.drinks
                console.log(response.drinks);
                //console.log(queryURL);
                //searchResults=response.meals;

                for (var i = 0; i < 5; i++) {

                    if (response.drinks[i] != undefined) {
                        var accordianDrinkTest =
                            `<div class="grid-container" id="mainContent">
                
                    <ul class="accordion" data-accordion data-allow-all-closed="true" >
                        <li class="accordion-item" data-accordion-item drink-id= ${response.drinks[i].idDrink} >
                        <!-- Accordion tab title -->
                        <a href="#" class="accordion-title ">${response.drinks[i].strDrink}</a>
                        <div class="accordion-content panel" data-tab-content>
                           
                           
                        </div>
                        </li>
                    </ul>
            </div>`

                        $('#searchResultsTab').append(accordianDrinkTest);

                    }

                    //while (responseDrinks)

                    // console.log(response.drinks);
                    // console.log([i]);
                    //         var accordianDrinkTest =
                    //             `<div class="grid-container" id="mainContent">

                    //         <ul class="accordion" data-accordion data-allow-all-closed="true" >
                    //             <li class="accordion-item" data-accordion-item drink-id= ${response.drinks[i].idDrink} >
                    //             <!-- Accordion tab title -->
                    //             <a href="#" class="accordion-title ">${response.drinks[i].strDrink}</a>
                    //             <div class="accordion-content panel" data-tab-content>


                    //             </div>
                    //             </li>
                    //         </ul>
                    // </div>`

                    //         $('#searchResultsTab').append(accordianDrinkTest);






                }

                //click listener
                registerClickListeners()
            }

        })

    }


    function saveMealsToLS(mealName) {
        if (searchedMeals.indexOf(mealName) === -1) {
            searchedMeals.push(mealName);
            localStorage.setItem("meals", JSON.stringify(searchedMeals))
        }
    }

    function saveDrinksToLS(drinkName) {
        if (LookupDrinks.indexOf(drinkName) === -1) {
            LookupDrinks.push(drinkName);
            localStorage.setItem("drinks", JSON.stringify(LookupDrinks))
        }
    }
    $(document).foundation();

})