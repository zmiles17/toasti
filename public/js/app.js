//search function should not be null

//search function should not allow integers

//search function should not 

$('#frmAddRecipe').submit(function(e){
    e.preventDefault();
    let name = $('#recipeName').val();
    let instruction = $('#instruction').val();
    let ingredients = [];
    $('.ingredient').each(function(){
        let ingredient = $(this).val().trim();
        // if(ingredient != "")
             ingredients.push($(this).val());
    });

    if(validateRecipe(name, instruction, ingredients)){
        addNewRecipe(name, instruction, ingredients)
    }
})

$('#btnAddIngredient').click(function createNewInput(){
    let $newInputBox = $(
        `<div class="ingredientSection"><input id="ingredient" placeholder="Ingredients" class="ingredient" required/><button class='remove btn-fa'><i class="fas fa-times btn-style"></i></button></div>`
    )
})
//   // This function constructs a todo-item row
//   function createNewRow(todo) {
//     var $newInputRow = $(
//       `<p class='list-group-item todo-item'>
//       <button class='delete'><i ${todo.complete? "class='far fa-dot-circle btn-style'":"class='far fa-circle btn-style'"}></i></button>
//       <span> ${todo.text}</span></p><br />`
//     );

//     $newInputRow.find("button.delete").data("id", todo.id);
//     $newInputRow.find("input.edit").css("display", "none");
//     $newInputRow.data("todo", todo);
//     // if (todo.complete) {
//     //   $newInputRow.find("span").css("text-decoration", "line-through");
//     // }
//     return $newInputRow;
//   }

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

//validateRecipe('cocktail', 'mix well', ['Vodka', 'OJ']);

const addNewRecipe = function(name, instruction, ingredients) {
    let recipe = {
        name: name,
        instruction: instruction,
        ingredient: ingredients
    };
    $.post('/api/recipe', recipe)
    .then(function(data){
        console.log('data saved');
    })
    // $.ajax({url: '/api/recipe', method: 'POST', data: recipe})
    // .then(function(data){
    //     console.log('data saved');
    // })   
};


