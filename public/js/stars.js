
const average = function(allStars, allVotes){
    let theAvg = Math.round(allStars/allVotes);
    let result = theAvg * 10;
    
    return result;
}

const rating = function(event){
    event.preventDefault();

    let selected = $(this).index();
    let starRng = document.querySelectorAll('.thestar');
    let isSelected = false;
    let num = 0;

    $.each(starRng, function (index, thestar) {
        //console.log(thestar)
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

}
