
$('document').ready(function () {
  const search = function () {
    const parsedUrl = new URL(window.location.href);//href is the full URL.Parsing the URL makes it easy to get the search param.
    const id = parsedUrl.searchParams.get("id");//This is getting the query the user entered onto the index page.https://developer.mozilla.org/en-US/docs/Web/API/URL
    fetch(`/api/recipe/${id}`).then(function (res) {
      return res.json();
    }).then(function (recipe) {
      
      const recipeName = recipe.name;
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${recipeName}`).then(function(data){
        var recipeThumb;
        if (data.data.drinks !== null) recipeThumb = data.data.drinks[0].strDrinkThumb;
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
        
        const recipeEl = $('<div class="info">');
        recipeEl.append(headerEl);
        recipeEl.append(`<p class="instruction-body">${recipe.instruction}</p>`);
        
        const ingredientsListEl = $(`<ol class="ingredient-list">`);
        recipe.ingredients.forEach(function (ingredient) {
          ingredientsListEl.append(`<li>${ingredient.name}</li>`);
        });
        
        recipeEl.append(ingredientsListEl);
        if (data.data.drinks !== null) recipeEl.append(`<img src=${recipeThumb} class="thumbnail">`);
        el.append(recipeEl);
        $('.theclick').on('click', rating);
      })
      })
    }
    search();
  });
  
