//**************gina code starts*****************************
const render = function(element, htmlStr){
    $(element).append(htmlStr)
}

//Add input field dynamically
$('#btnAddIngredient').click(function (){
    if($('.ingredient').length < 5){
    let htmlStr = 
    `<span class="noBreak"><input id="ingredient" class="addRecipeInput ingredient" placeholder="e.g. 2 oz of Orange Juice" required/><button class='remove btn-fa'><i class="fas fa-times btn-style"></i></button></span><br />`    
    render('#addIngredient', htmlStr);
    }
    // let ingredientsLength = ('.ingredient').length;
    // $('.ingredient').each(function(){
    //     if ($(this).val() !== ''){
    //         let htmlStr = 
    //          `<span class="noBreak"><input id="ingredient" class="addRecipeInput ingredient" placeholder="e.g. 2 oz of Orange Juice" required/><button class='remove btn-fa'><i class="fas fa-times btn-style"></i></button></span><br />`    
    //          render('#addIngredient', htmlStr);
    //     }
        // if (($(this).val() !== '') && (ingredientsLength < 5)){
        //     let htmlStr = 
        //      `<span class="noBreak"><input id="ingredient" class="addRecipeInput ingredient" placeholder="e.g. 2 oz of Orange Juice" required/><button class='remove btn-fa'><i class="fas fa-times btn-style"></i></button></span><br />`    
        //      render('#addIngredient', htmlStr);
        // }else{
        //     render('#addIngredient', "Please enter an ingredient.");
        // }
        //let ingredient = $(this).val().trim();
        // if(ingredient != "")
             //ingredients.push($(this).val());
             //console.log(ingredients);
    });
    // ingredientList.forEach(e => {
    //     if (e.val() !== ''){
    //         let htmlStr = 
    //         `<span class="noBreak"><input id="ingredient" class="addRecipeInput ingredient" placeholder="e.g. 2 oz of Orange Juice" required/><button class='remove btn-fa'><i class="fas fa-times btn-style"></i></button></span><br />`    
    //         render('#addIngredient', htmlStr);
    //     }else{
    //         render('#addIngredient', "Please enter an ingredient.");
    //     }
    // })
    // if($('.ingredient').length < 5){
        
    //     if($('#ingredient').val() != ''){
    //         let htmlStr = 
    //         `<span class="noBreak"><input id="ingredient" class="addRecipeInput ingredient" placeholder="e.g. 2 oz of Orange Juice" required/><button class='remove btn-fa'><i class="fas fa-times btn-style"></i></button></span><br />`    
    //         render('#addIngredient', htmlStr);
    //     }else{
    //         render('#addIngredient', "Please enter an ingredient.");
    //     }        
    // }else{
    // $('#btnAddIngredient').hide()
    // render('#addIngredient', "You have entered 5 ingredients!");
    // }
//})

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

    if ((typeof name || typeof instruction) != 'string' ) {       
        console.log('All fields need to be a string!');
        return false;
    }

    if (!(Array.isArray(ingredients))) {       
        console.log('ingredients need to be an array!');
        return false;
    }

    if ((typeof name || typeof instruction || typeof ingredient) === '' ) {       
        console.log('All fields are required!');
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
            $('.ingredient').val('');
            $('#recipeName').focus();
        }else{
            render('#addIngredient', "error");
        } 
    //    console.log("The recipe successfully added!");
    })
    // .catch(function(err){
    //     console.log(err);
    // });
    render('#showResult', "Thanks for your cocktail recipe.  It has been saved successfully!");

    
};

//***************************gina code ends*************************************


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

    function transition() {
        $(".image-container").css("background-image", `url(../assets/cocktail${imageIndex + 1}.jpg)`);
        imageIndex++;
        if ((imageIndex + 1) > numImages) imageIndex = 0;
    }

    setInterval(transition, 5000);
});
