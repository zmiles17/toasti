let totalRtngs = 0;
let totalVotes = 0;
let didRate = false;


const average = function(num1){
    totalVotes++;
    sum = num1 + totalRtngs
    let result = sum/totalVotes

    return result;

}
//search function should not be null

//search function should not allow integers

//search function should not 

module.exports = {
    average: average
}

let imageIndex = 0;
const numImages = 7;

function transition () {
    $(".image-container").css("background-image", `url(../assets/cocktail${imageIndex+1}.jpg)`);
    imageIndex++;
    if((imageIndex+1)>numImages) imageIndex = 0;
}

setInterval(transition, 5000);

