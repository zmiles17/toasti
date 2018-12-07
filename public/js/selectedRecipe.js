$('document').ready(function () {
  const search = function () {
    const parsedUrl = new URL(window.location.href);//href is the full URL.Parsing the URL makes it easy to get the search param.
    const id = parsedUrl.searchParams.get("id");//This is getting the query the user entered onto the index page.https://developer.mozilla.org/en-US/docs/Web/API/URL
    fetch(`/api/recipe/${id}`).then(function (res) {
      return res.json();
    }).then(function (recipe) {
      const el = $('.recipe');
      el.empty();

      const headerEl = $('<div class="recipe-header">');
      headerEl.append(`<h3 class="recipe-title">${recipe.name}</h3>`);
      headerEl.append(`<span class="recipe-rating">${recipe.TotalStars || 0}</h3>`);

      const recipeEl = $('<div class="info">');
      recipeEl.append(headerEl);
      recipeEl.append(`<p class="instruction-body">${recipe.instruction}</p>`);

      const ingredientsListEl = $(`<ol class="ingredient-list">`);
      recipe.ingredients.forEach(function (ingredient) {
        ingredientsListEl.append(`<li>${ingredient.name}</li>`);
      });

      recipeEl.append(ingredientsListEl);
      el.append(recipeEl);
    })
  }
  search();
});
