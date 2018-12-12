
const average = function (allStars, allVotes) {
    let theRtng = allStars / allVotes;
    let theAvg = (theRtng / 5)*100;
    let result = Math.round(theAvg/10)*10;

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


    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");
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
        id: id,
        TotalStars: newStars,
        TotalVotes: everyVote+=1,
    }
    $.post('/api/recipe/update', updatedStars)
}