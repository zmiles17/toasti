$('document').ready(function () {
  const search = function () {
    const searchterm = $('.search-bar').val();
     fetch(`/api/recipe?q=${searchterm}`).then(function(res) {
     return res.json();
     }).then(function (data) {
      const el = $('.search-results');
      el.empty();
      data.forEach(function (recipe) {
        const recipeEl = $('<div class="info">');
        recipeEl.append(`<h3 class="recipe-title">${recipe.name}</h3>`);

        //display name and stars on home page
        //on click, redirect to search results page
        //show each recipe inside div recipe container by using .show and .hide properties
        //make each title a clickable link

      
        recipeEl.append(`<p class="instruction-body">${recipe.instruction}</p>`);

        const ingredientsListEl = $(`<ul class="ingredient-list">`);
        recipe.ingredients.forEach(function (ingredient) {
          ingredientsListEl.append(`<li>${ingredient.name}</li>`);
        });
        recipeEl.append(ingredientsListEl)

        el.append(recipeEl);
      });
    })
  }
  $('.search-bar').keypress(function (e) {
    if (e.which == 13) {//Enter key pressed
      e.preventDefault();
      search();//Trigger search button click event
    }
  });
});