
const average = function(allStars, allVotes){
    let theAvg = Math.round(allStars/allVotes);
    let result = theAvg * 10;
    
    return result;
}


const newAverage = function(newStars, allStars, allVotes){
    allVotes++;
    let sum = newStars + allStars;
    let theAvg = Math.round(sum/allVotes);
    let result = theAvg * 10;

    return result;
}
