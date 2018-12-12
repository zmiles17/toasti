const search = function () {
  const parsedUrl = new URL(window.location.href);//href is the full URL.Parsing the URL makes it easy to get the search param.
  const searchterm = parsedUrl.searchParams.get("q");//This is getting the query the user entered onto the index page.https://developer.mozilla.org/en-US/docs/Web/API/URL
  fetch(`/api/recipe?q=${searchterm}`).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.length === 0) {
      $(".recipe-column").empty();
      $(".rating-column").empty();
      $(".search-results").append("<p class='search-results-msg'>No search results found.</p>")
    } else {
    const el = $('.search-results');
    el.empty();
    data.forEach(function (recipe) {
      
      let theStars = recipe.TotalStars;
      let theVotes = recipe.TotalVotes;
      let starRndr = average(theStars,theVotes);

      const recipeEl = $('<div class="info">');

      const headerEl = $('<div class="recipe-header">');
      headerEl.append(`<a href="/selected_recipe?id=${recipe.id}" class="recipe-title">${recipe.name}</a>`); 
      headerEl.append(`<span id="recipe-rating"><div class="star-out"><div class="star-in"></div></div></span>`);//Christian's TotalStar class goes here
      $('.star-in').css("width", `${starRndr}%`);
      recipeEl.append(headerEl);
      
      el.append(recipeEl);
    });
  }
  })
}

$('document').ready(function () {
  search();
});
