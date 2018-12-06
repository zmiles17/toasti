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

        const headerEl = $('<div class="recipe-header">');
        headerEl.append(`<a href="/selected_recipe?id=${recipe.id} class="recipe-title">${recipe.name}</a>`); 
        headerEl.append(`<span class="recipe-rating">${recipe.TotalStars || 0}</h3>`);//Christian's TotalStar class goes here
      
        recipeEl.append(headerEl);
        
        el.append(recipeEl);
      });
    })
  }
  search();
});
