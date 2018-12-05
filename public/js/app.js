//search function should not be null

//search function should not allow integers

//search function should not 

$('document').ready(function () {
    //this function is redirecting to the search-results.html
    const resultsNavigation = function () {
        const searchterm = $('.search-bar').val();
        if (window) {
            //encodeURIComponent encodes the user input so the browser interprets it correctly
            //(prevents the browser from breaking when symbols are entered by the user)
            window.location = `/search_results?q=${encodeURIComponent(searchterm)}`;
        }
    }

    $('.search-bar').keypress(function (e) {
        if (e.which == 13) {//Enter key pressed
            e.preventDefault();
            resultsNavigation();//Trigger search button click event
        }
    });
let imageIndex = 0;
const numImages = 7;

function transition () {
    $(".image-container").css("background-image", `url(../assets/cocktail${imageIndex+1}.jpg)`);
    imageIndex++;
    if((imageIndex+1)>numImages) imageIndex = 0;
}

setInterval(transition, 5000);
});
