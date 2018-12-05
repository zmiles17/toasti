
const average = function(allStars, allVotes){
    let result = allStars/allVotes

    return result;
}


const newAverage = function(newStars, allStars, allVotes){
    allVotes++;
    let sum = newStars + allStars
    let result = sum/allVotes

    return result;
}
