$(document).ready(function() {
    var searchedMeals = JSON.parse(localStorage.getItem("meals")) || []; 
    $("#mealSearchBtn").on("click", grabInput)
    function grabInput(){
	
		var meals = $("#mealName").val();
		// if city is empty     === empty set "" ....empty string
		// alter city cannot be empty
		searchMeals(meals);
    }
    
    // function registerClickListeners(){
    //     $(".mealClass)").on('click', grabInput)
    //     function grabInput(){
    //         var recipeGrab = $('li').val(); 
    //     }
            //OR
    //  $("#searchResults ul").on("click", "li", function(){
    //      searchMeals($(this).text());
        }
    // })
            //$('li').window.open('file.""');
            //window.open('')
            //value of whatevers clicked save to ls
            //open page on click of me with name of what was clicked
            //Scroll to bottom for execution of registerClickListeners
            //$(document.body)('click').click(function() { window.open('file:///path/to/a/local/html/file.html'); });
       // })
   // }

    
    
    
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
            console.log(response.meals);
            console.log(queryURL);
            
            for ( var i = 0; i < response.meals.length; i++) {  
                //console.log(response.meals[i]);
                
                var callMeals = `<li class="mealClass">${response.meals[i].strMeal} </li> `;
                // (response.meals[i].strMeal);
                //console.log(callMeals);
                $('#searchResults').append(callMeals);
                
                
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
})
