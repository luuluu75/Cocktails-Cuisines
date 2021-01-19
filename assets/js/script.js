
$(document).ready(function() {
    
    var searchResults ;
    var responseMeals;
    
    var searchedMeals = JSON.parse(localStorage.getItem("meals")) || []; 
    $("#searchBtn").on("click", function(){
        var meals = $("#searchBar").val();
        searchMeals(meals);



    })

    function grabInput(event){
        
        event.preventDefault();
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
            //for loop with i
            //for J i=number
            //strIngredients + 
            //if(!$(this).text()){$(this).append(result)};
               //console.log(this.text);
            for ( var i = 1; i < 21; i++) {   
            result[`strIngredients${i}`]//creat a new li
        
            
            // append to a single list item
            // var listitem = `<li class= "ingredients"> ${result[`strIngredients${i}`]}result[`strMeasure${i}`]
                                          
            //  </li>`;
               var  listitem="";
               
            // $(this).append(listitem);
            console.log(listitem);
            //${result[`strIngredients${i}`]}
            
        }
        //added child lookup to append data and fix toggling
            //strYoutube     strMealThumb
            //$(this).append(recipeInstruction);
            console.log($(this).children());
            console.log($('.accordion-content'));
            //$(!$(this).text()(recipeImage);

            
            if($(this).find(".panel").children().length< 1 ) {
                $(this).find(".panel").append(recipeInstruction);
                $(this).find(".panel").append(recipeImage);
            };
            
            $('#searchResultsTab').foundation('toggle', $(this).find(".panel"));
            //end changes here

        for ( var i = 0; i < 0; i++) {   
            console.log(clickedMeal[i]);

        }
            var acc = document.getElementsByClassName("accordion-item");
            var i;

            for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");

               
            });
            }
            

        // let recipeInstuction = clickedMeal.strInstruction
        // let video = clickedMeal.strVideo

        // let example = `<p>
        //             Video courtesy of 
        //             <a href=\"${video}\" target="_blank">Big Buck Bunny</a>.
        //             </p>`
        // console.log(clickedMeal);

        // console.log(searchResults);
        // var arrayItem = searchResults.find(element => element.idMeal === datTest);
        // console.log(arrayItem);
        // $(".accordion-content").append(arrayItem);
		
		//append to accordian
		
    }
    function registerClickListeners(){
        $(".accordion-item").on('click', grabInput);
      
        

    }       //searchedMeals($(this).text());
    
    
    $("#mealName").on("keypress", function(){
        if(event.keyCode == 13){
           var meal = ($(this)).val();
           console.log(meal);
           searchMeals(meal);
        }
    })


    // $("#drinksName").on("keypress", function(){
      
    // })
    
    
    function searchMeals(meals){
        saveMealsToLS(meals);
    //Food Ajax Call
    var queryURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
    console.log(queryURL);
    $.ajax({
        type: "GET",
        url: queryURL,
         dataType: "json",  
        success: function(response){
            responseMeals = response.meals
            console.log(response.meals);
            //console.log(queryURL);
            //searchResults=response.meals;
            for ( var i = 0; i < 5; i++) {  
              //  console.log(response.meals[i]);
            //   let meal = `<li class=\"accordion-item\" meal-id = ${response.meals[i].idMeal} data-accordion-item data-allow-all-closed='true' >
            //       <!-- Accordion tab title -->
            //       <a href=\"#\" class=\"accordion-title\">${response.meals[i].strMeal} </a>
            //     </li>`

                var accordianMealTest=       
                // `<div class="grid-container" id="mainContent">
                
                    //<ul class="accordion" data-accordion data-allow-all-closed="true" >
                        `<li class="accordion-item" data-accordion-item meal-id= ${response.meals[i].idMeal} >
                       
                        <a href="#" class="accordion-title ">${response.meals[i].strMeal}</a>
                        <div class="accordion-content panel" data-tab-content> 
                        </div>
                        </li>`
            
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

    })
   
    }
    function saveMealsToLS(mealName){
		if (searchedMeals.indexOf(mealName) === -1) {
			searchedMeals.push(mealName);
			localStorage.setItem("meals", JSON.stringify(searchedMeals))
		}
	}                	         
    $(document).foundation();
    
})
