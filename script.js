$(document).ready(function() {
    var searchedMeals = JSON.parse(localStorage.getItem("meals")) || []; 
    $("#mealSearchBtn").on("click", grabInput)
    function grabInput(){
	
		var meals = $("#mealName").val();
		// if city is empty     === empty set "" ....empty string
		// alter city cannot be empty
		searchMeals(meals);
    }
    // function makeRow(meals){
	// 	var li = $("<li>");
	// 	li.text(meals);
	// 	$("#listMeals ul").append(li);
    // }
    

    
    // $("#mealList ul").on("click", "li", function(){
    //     searchMeals($(this).text());
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
            console.log(response.meals);
            console.log(queryURL);
            //for loop??
            for ( var i = 0; i < response.meals.length; i++) {  
                //console.log(response.meals[i]);
                var callMeals = (response.meals[i].strMeal);
                console.log(callMeals);
                $('#searchResults').append('<li>'+callMeals+'</li>');
                //$("#searchResults").append(callMeals);
                // $('button').click(function() {
                //     var mealList = $('#input').val();
                //     $('#list').append('<li>'+mealList+'</li>');
                //     //return false;
                //  });


            }
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
