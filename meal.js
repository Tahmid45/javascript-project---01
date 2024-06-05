// search by fisrt letter of meal name
// www.themealdb.com/api/json/v1/1/search.php?f=a

//look up meal details
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

const handleSearchFun = (e) => {
    const inputValue = document.getElementById("search-box").value;
    loadSearchData(inputValue);
    document.getElementById("search-box").value = '';
};

const loadSearchData = (inputValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
            displayMeals(data.meals);
            
        });
};

const displayMeals = (meals) => {
    console.log(meals);
    const mealContainer = document.getElementById("meal-container");
    if(meals.length > 0){
        if(document.getElementById('meal-container').innerHTML === ""){
            meals.forEach(meal => {
                console.log(meal);
            const div = document.createElement("div");
            div.classList.add("mealcard");
            div.innerHTML = `
                 <img class = "card-image" src="${meal.strMealThumb}"/>
                 <h5>${meal.strMeal}</h5>
               `;
                
                mealContainer.appendChild(div);
        
            });
        }
        else{
            document.getElementById('meal-container').innerHTML = "";
            meals.forEach(meal => {
                console.log(meal);
            const div = document.createElement("div");
            div.classList.add("mealcard");
            div.innerHTML = `
                 <img class = "card-image" src="${meal.strMealThumb}"/>
                 <h5>${meal.strMeal}</h5>
               `;
                
                mealContainer.appendChild(div);
        
            });
    
        }
    }
    else{
        const div = document.createElement("div");
            div.classList.add("mealcard");
            div.innerHTML = `
                <h5>Data Not Found</h5>
               `;
                
                mealContainer.appendChild(div);
    }
    
    
};