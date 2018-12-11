
const average = function (allStars, allVotes) {
    let theAvg = Math.round(allStars / allVotes);
    let result = theAvg * 10;

    return result;
}

let initialVote = false;
let everyVote = 0;
let everyStar = 0;
const rating = async function (event) {
    event.preventDefault();

    let selected = $(this).index();
    let starRng = document.querySelectorAll('.thestar');
    let isSelected = false;
    let num;


    const parsedUrl = new URL(window.location.href);//href is the full URL.Parsing the URL makes it easy to get the search param.
    const id = parsedUrl.searchParams.get("id");//This is getting the query the user entered onto the index page.https://developer.mozilla.org/en-US/docs/Web/API/URL
    if (initialVote === false) {
        await fetch(`/api/recipe/${id}`).then(function (res) {
            return res.json();
        }).then(function (recipe) {
            everyVote = recipe.TotalVotes;
            everyStar = recipe.TotalStars;
        })
    }
    $.each(starRng, function (index, thestar) {
        if (isSelected) {
            $(thestar).removeClass('rated');
        }
        else {
            $(thestar).addClass('rated');
        }
        if (index === selected) {
            isSelected = true;
            num = index + 1;
        }
    });

    $('.recipe-rating').attr('star-rating', num);
    initialVote = true;
    let newStars = everyStar +=num;
    let updatedStars = {
        TotalStars: newStars,
        TotalVotes: everyVote+=1,
    }
    $.post(`/api/recipe/${id}`, updatedStars)

}