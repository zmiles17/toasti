//on submit, run search
//search should traverse the database for character matches in ingredients
//search should traverse the database for character matches in name
//return the results : a list of json objects back- the name, the instructions, the ingredients, the rating
//order the recipes by rating
//render the results 
$('document').ready(function () {
  const search = function () {
    const searchterm = $('.search-bar').val();
     fetch(`/api/recipe?q=${searchterm}`).then(function(res) {
       return res.json();
     }).then(function (data) {
      const el = $('.search-results');
      el.empty();
      data.forEach(function (recipe,index) {
        const recipeEl = $('<div class="recipe">');
        recipeEl.append(`<h3 class="recipe-title">${recipe.name}</h3>`);
        recipeEl.append(`<p class="instruction-body">${recipe.instruction}</p>`);

        const ingredientsListEl = $(`<ul class="ingredient-list">`);
        recipe.ingredients.forEach(function (ingredient) {
          ingredientsListEl.append(`<li>${ingredient.name}</li>`);
        });
        recipeEl.append(ingredientsListEl)

        el.append(recipeEl);
      })
    })
  }
  $('.search-bar').keypress(function (e) {
    if (e.which == 13) {//Enter key pressed
      e.preventDefault();
      search();//Trigger search button click event
    }
  });
});