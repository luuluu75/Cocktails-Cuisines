$(document).ready(function() {
    var searchedMeals = JSON.parse(localStorage.getItem("meals")) || []; 
    $("#mealSearchBtn").on("click", grabInput)
    function grabInput(){
	
		var meals = $("#mealName").val();
		// if city is empty     === empty set "" ....empty string
		// alter city cannot be empty
		searchMeals(meals);
	}
    
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
            console.log(response);
            console.log(queryURL);

        }

    })
   
    }
    function saveMealsToLS(mealName){
		if (searchedMeals.indexOf(mealName) === -1) {
			searchedMeals.push(mealName);
			localStorage.setItem("cities", JSON.stringify(searchedMeals))
		}
	}                	         
})
