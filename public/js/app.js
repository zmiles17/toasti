//search function should not be null

//search function should not allow integers

//search function should not 

function transition1 () {
    $(".image-container").css("background-image", "url(../assets/cocktail.jpg)");
}

function transition2 () {
    $(".image-container").css("background-image", "url(../assets/cocktail2.jpg)");
}

function transition3 () {
    $(".image-container").css("background-image", "url(../assets/cocktail3.jpg)");
}

function transition4 () {
    $(".image-container").css("background-image", "url(../assets/cocktail4.jpg)");
}

function transition5 () {
    $(".image-container").css("background-image", "url(../assets/cocktail5.jpg)");
}
function transition6 () {
    $(".image-container").css("background-image", "url(../assets/cocktail6.jpg)");
}
function transition7 () {
    $(".image-container").css("background-image", "url(../assets/cocktail7.jpg)");
}

setInterval(function(){
    setTimeout(transition1, 5000);
    setTimeout(transition2, 10000);
    setTimeout(transition3, 15000);
    setTimeout(transition4, 20000);
    setTimeout(transition5, 25000);
    setTimeout(transition6, 30000);
    setTimeout(transition7, 35000);
}, 40000)

