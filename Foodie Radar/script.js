async function searchMeal() {
  const input = document.getElementById("searchInput").value.trim();
  const container = document.getElementById("mealContainer");
  container.innerHTML = "";

  if (!input) {
    container.innerHTML = "<p>Please enter a meal name.</p>";
    return;
  }

  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    const data = await res.json();

    if (!data.meals) {
      container.innerHTML = "<p>No meals found. Try a different name.</p>";
      return;
    }

    data.meals.forEach(meal => {
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("meal-card");

      // Ingredients
      let ingredientsList = "";
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
          ingredientsList += `<li>${ingredient} - ${measure}</li>`;
        }
      }

      mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2>${meal.strMeal}</h2>
        <p><strong>Category:</strong> ${meal.strCategory} | <strong>Area:</strong> ${meal.strArea}</p>
        <h3>Ingredients:</h3>
        <ul>${ingredientsList}</ul>
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
        <a href="${meal.strYoutube}" target="_blank">📺 Watch on YouTube</a>
      `;

      container.appendChild(mealDiv);
    });
  } catch (error) {
    console.error("Error fetching meal:", error);
    container.innerHTML = "<p>Something went wrong. Please try again later.</p>";
  }
}
