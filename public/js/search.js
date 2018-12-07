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
        let theStars = recipe.TotalStars;
        let theVotes = recipe.TotalVotes;

        let starRndr = average(theStars,theVotes);
        console.log(starRndr);
        const recipeEl = $('<div class="info">');
        recipeEl.append(`<h3 class="recipe-title">${recipe.name}</h3><div class="star-out"><div class="star-in"></div></div>`); //Christian's TotalStar class goes here
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