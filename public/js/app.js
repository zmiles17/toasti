//**************gina code starts*****************************
const render = function(element, htmlStr){
    $(element).append(htmlStr)
}
$('#recipeName').on("keydown",function (e) {
    if (e.which == 9 || e.which == 13)  {
        e.preventDefault();
         $("#instruction").focus();
    };  
    $('#showResult').empty();    
});

$('#ingredientSection').on("keydown",'.ingredient',function (e) {
    if (e.which == 9 || e.which == 13)  {
        e.preventDefault();
        if($('.ingredient').length < 5){
            $('#btnAddIngredient').trigger("click");
        }            
    };  
});

//Add input field dynamically
$('#btnAddIngredient').click(function (e){
    e.preventDefault();
    if($('.ingredient').length < 5){
    let htmlStr = 
    `<span class="noBreak"><input id="ingredient" class="addRecipeInput ingredient" placeholder="e.g. 2 oz of Orange Juice" required/><button class='remove btn-fa'><i class="fas fa-times btn-style"></i></button></span><br />`    
    render('#addIngredient', htmlStr);
    $(".addRecipeInput").last().focus();
    }
})

//Remove input field from the front-end
$(document).on('click', '.remove', function() {
    let inputNeedToBeDeleted = $(this).parent();
    inputNeedToBeDeleted.next().remove(); //remove <br />
    inputNeedToBeDeleted.remove(); // then remove <span>
})

$('#frmAddRecipe').submit(function(e){
    e.preventDefault();
    let name = $('#recipeName').val();
    let instruction = $('#instruction').val();
    let ingredients = [];
    $('.ingredient').each(function(){
        let ingredient = $(this).val().trim();
        // if(ingredient != "")
             ingredients.push($(this).val());
             //console.log(ingredients);
    });

    if(validateRecipe(name, instruction, ingredients)){
        addNewRecipe(name, instruction, ingredients)
    }
})

const validateRecipe = function(name, instruction, ingredients) {

    if ((typeof name != 'string' || typeof instruction != 'string')  ) {       
        return false;
    }

    if (!(Array.isArray(ingredients))) {       
        return false;
    }

    if ((name ==='' || instruction === '' )) {       
        return false;
    }; 
    
    if ((ingredients.length == 0 )) {       
        return false;
    };
    return true;
}

const addNewRecipe = function(name, instruction, ingredients) {
    let recipe = {
        name: name,
        instruction: instruction,
        ingredient: ingredients
    };
    //console.log(recipe);
    $.post('/api/recipe', recipe)   
    .then(function(data){  
        console.log(data); 
        if(data.id) {
            console.log(data.id);
            $('#recipeName').val('');
            $('#instruction').val('');               
            $('#addIngredient').empty();
            $('#btnAddIngredient').trigger("click");
            $('#recipeName').focus();
            render('#showResult', "Thanks for your cocktail recipe.  It has been saved successfully!");
        }else{
            render('#showResult', data.reason);
        } 
    })    
};
//***************************gina code ends*************************************

$('document').ready(function () {
    /**
     * reads the value in the search bar 
     * redirects the user to the search results page
     * sets the query param "q" to the user's search term
     * @author vblaha
     */
    const resultsNavigation = function () {
        const searchterm = $('.search-bar').val();
        if (window) {
            //encodeURIComponent encodes the user input so the browser interprets it correctly
            //(prevents the browser from breaking when symbols are entered by the user)
            window.location = `/search_results?q=${encodeURIComponent(searchterm)}`;
        }
    }

    /**
     * listens to the search bar for the enter key to be pressed
     * triggers the results page
     * @author vblaha
     */
    $('.search-bar').keypress(function (e) {
        if (e.which == 13) {//Enter key pressed
            e.preventDefault();
            resultsNavigation();//Trigger search button click event
        }
    });

    let imageIndex = 0;
    const numImages = 7;

    function transition() {
        $(".image-container").css("background-image", `url(../assets/cocktail${imageIndex + 1}.jpg)`);
        imageIndex++;
        if ((imageIndex + 1) > numImages) imageIndex = 0;
    }

    setInterval(transition, 5000);
});
