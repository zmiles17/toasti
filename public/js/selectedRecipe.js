/**
 * renders the recipe to the selectedRecipe results page
 * @param {object} recipe - this is the full recipe to show the user
 * @param {string} recipeThumb - this is the url of the thumbnail image of the recipe
 * @author vlbaha
 */
const renderRecipe = function(recipe, recipeThumb) {
  const el = $('.recipe');
  el.empty();

  const headerEl = $('<div class="recipe-header">');
  headerEl.append(`<h3 class="recipe-title" id="recipe-title">${recipe.name}</h3>`);
  headerEl.append(`<span class="recipe-rating" star-rating="1">

  <button class="theclick"><span class="thestar"></span></button>
  <button class="theclick"><span class="thestar"></span></button>
  <button class="theclick"><span class="thestar"></span></button>
  <button class="theclick"><span class="thestar"></span></button>
  <button class="theclick"><span class="thestar"></span></button>
  </span>`);

  const recipeEl = $('<div id="info">');
  recipeEl.append(headerEl);
  recipeEl.append(`<p class="instruction-body">${recipe.instruction}</p>`);

  const ingredientsListEl = $(`<ol class="ingredient-list">`);
  recipe.ingredients.forEach(function (ingredient) {
    ingredientsListEl.append(`<li>${ingredient.name}</li>`);
  });

  recipeEl.append(ingredientsListEl);
  if (recipeThumb !== undefined) recipeEl.append(`<img src=${recipeThumb} class="thumbnail">`);
  el.append(recipeEl);
  $('.theclick').on('click', rating);

}

/**
 * search looks in the browser's url for a query parameter "id"
 * takes the value and uses it as a selected recipe
 * calls the backend server 
 * takes the id and returns the recipe and ingredients
 * calls to a third party API to find an image matched to recipe.name
 * displays the recipe instructions, ingredients, and rating to the user
 * @author vblaha
 */
const search = function () {
  const parsedUrl = new URL(window.location.href);//href is the full URL.Parsing the URL makes it easy to get the search param.
  const id = parsedUrl.searchParams.get("id");//This is getting the query the user entered onto the index page.https://developer.mozilla.org/en-US/docs/Web/API/URL

  $.get(`/api/recipe/${id}`).then(function (recipe) {
    const recipeName = recipe.name;
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${recipeName}`).then(function (data) {
      let recipeThumb;
      if (data.data.drinks !== null) recipeThumb = data.data.drinks[0].strDrinkThumb;
      renderRecipe(recipe, recipeThumb)
    })
  })
}

$('document').ready(function () {
  search();
});

