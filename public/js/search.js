/**
 * search looks in the browser's url for a query parameter "q"
 * takes the value and uses it as a search term
 * calls the backend server
 * takes the search term and matches on recipe name or ingredient name
 * returns a list of recipes
 * calculates average rating for displayed recipes and sets width for gold star css for rating display. 
 * displays the link and rating.
 * @author vblaha
 * @author christiangraves 
 */
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
      headerEl.append(`<span id="recipe-rating"><div class="star-out"><div class="star-in"style="width:${starRndr}%;"></div></div></span>`);
      
      recipeEl.append(headerEl);
    
      el.append(recipeEl);
    });
  }
  })
}

$('document').ready(function () {
  search();
});
