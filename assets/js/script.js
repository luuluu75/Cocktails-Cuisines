
$(document).ready(function() {
    //$(document).foundation;
   // $(document).foundation('reveal', 'open');
    //$(document).foundation();
    // $(document).foundation.accordion.js();
    // $(document).foundation.util.keyboard.js();
    var searchResults ;
    var responseMeals;
    
    var searchedMeals = JSON.parse(localStorage.getItem("meals")) || []; 
    $("#mealSearchBtn").on("click", function(){
        var meals = $("#mealName").val();
        searchMeals(meals);



    })

    function grabInput(){

        var mealId = $(this).attr("meal-id");
        console.log(mealId);
        console.log(responseMeals);

        var clickedMeal = responseMeals.filter(function(meal){
            return meal.idMeal === mealId;
        })

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
    
    // function registerClickListeners(){
    //     $(".mealClass").on('click', grabInput)
    //     function grabInput(){
    //         var recipeGrab = $('li').val(); 
    //     }
            //OR
    //  $("#searchResults ul").on("click", "li", function(){
    //      ;
       // }
    // })
            //$('li').window.open('file.""');
            //window.open('')
            //value of whatevers clicked save to ls
            //open page on click of me with name of what was clicked
            //Scroll to bottom for execution of registerClickListeners
            //$(document.body)('click').click(function() { window.open('file:///path/to/a/local/html/file.html'); });
       // })
   // }

    
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
            searchResults=response.meals;
            for ( var i = 0; i < 5; i++) {  
              //  console.log(response.meals[i]);
              let meal = `<li class=\"accordion-item\" meal-id = ${response.meals[i].idMeal} data-accordion-item data-allow-all-closed='true' >
                  <!-- Accordion tab title -->
                  <a href=\"#\" class=\"accordion-title\">${response.meals[i].strMeal} </a>
                </li>`
            
                console.log(meal);
                
                // var callMeals = `<li class="mealClass" data-mealid="${response.meals[i].idMeal}"'>${response.meals[i].strMeal} </li> `;
                // // (response.meals[i].strMeal);
                // //console.log(callMeals);
                // $('#searchResultsTab').append(callMeals);
                $('#searchResultsTab').append(meal);

                
                
                //$('#searchResults').append('<li>'+callMeals+'</li>',{class: 'mealClass'});
              
                
                // $("#searchRsults ul").on("click", "li", function(){
                //     searchMeals($(this).text());
                //callback

                // })
                
                
                //$("#searchResults").append(callMeals);
                // $('button').click(function() {
                //     var mealList = $('#input').val();
                //     $('#list').append('<li>'+mealList+'</li>');
                //     //return false;
                //  });


            }
            //Adding class to 'li' in order to execute click function
            //$('li').addclass('mealClass');
            
            // $('mealClass').class(onclick);
            //$(selector).addClass(classname,function(index,currentclass))

            //add here. class selector. assignt class to li.
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
