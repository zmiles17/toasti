//on submit, run search
//search should traverse the database for character matches in ingredients
//search should traverse the database for character matches in name
//return the results : a list of json objects back- the name, the instructions, the ingredients, the rating
//order the recipes by rating
//render the results 

$('document').ready(function () {
    const search = function () {
      const parsedUrl = new URL(window.location.href);//href is the full URL.Parsing the URL makes it easy to get the search param.
      const searchterm = parsedUrl.searchParams.get("q");//This is getting the query the user entered onto the index page.https://developer.mozilla.org/en-US/docs/Web/API/URL
      fetch(`/api/recipe?q=${searchterm}`).then(function (res) {
        return res.json();
      }).then(function (data) {
        const el = $('.search-results');
        el.empty();
        data.forEach(function (recipe) {
          const recipeEl = $('<div class="info">');
          recipeEl.append(`<h3 class="recipe-title">${recipe.name}</h3>`); //Christian's TotalStar class goes here
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
    search();
  });
