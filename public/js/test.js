//christian test

//Unit
describe('average', function () {
    it('should return the average percentage for star render', function () {
        expect(average(10, 2)).to.equal(100);
    });
})

//****************Gina code starts*************************************
//Unit Test

describe('validateRecipe', function () {
    it('should return false if name is not a string ', function () {
        expect(validateRecipe(123, 'mix ingredients', ['vodka', 'OJ'])).to.equal(false);
    });
    it('should return false if instruction is not a string ', function () {
        expect(validateRecipe('Screwdriver', [], ['vodka', 'OJ'])).to.equal(false);
    });
    it('should return false if ingrdient is not an [] ', function () {
        expect(validateRecipe('Screwdriver', 'mix ingredients', 'OJ')).to.equal(false);
    });

    it('should return false if name is empty ', function () {
        expect(validateRecipe('', 'mix ingredients', ['vodka', 'OJ'])).to.equal(false);
    });
    it('should return false if description is empty ', function () {
        expect(validateRecipe('Screwdriver', '', ['vodka', 'OJ'])).to.equal(false);
    });
    it('should return false if ingrdient is empty ', function () {
        expect(validateRecipe('Screwdriver', 'mix ingredients', [])).to.equal(false);
    });
    it('should return true for if above criteria are met ', function () {
        expect(validateRecipe('Screwdriver', 'mix ingredients', ['vodka', 'OJ'])).to.equal(true);
    });

});

// Functional/DOM/UI Test
describe('add recipe', function () {
    let server;

    before(function () {
        server = sinon.fakeServer.create();
    });

    after(function () {
        server.restore();
    })

    it('should add recipe on click', function (done) {
        this.timeout(3000);
        // assign values for input boxes
        $('#recipeName').val('Screwdriver');
        $('#instruction').val('Mix vodka and orange juice');
        $('#ingredient').val('1 cup vodka');

        // mock server to handle Post
        server.respondWith('POST', '/api/recipe', [
            200, { 'Content-Type': 'application/json' },
            JSON.stringify({
                id: 12312312,
                name: 'Screwdriver',
                instruction: 'Mix vodka and orange juice',
                ingredients: [
                    { name: '1 cup vodka' }],
            })
        ]);

        //button trigger
        $('#btnAddRecipe').trigger('click');

        //get expect
        server.respond();
        expect($('#showResult').text()).to.equal('Thanks for your cocktail recipe.  It has been saved successfully!');
        done();
    })

    it('should not add existing recipe on click', function (done) {
        this.timeout(3000);
        // assign values for input boxes
        $('#recipeName').val('Screwdriver');
        $('#instruction').val('Mix vodka and orange juice');
        $('#ingredient').val('1 cup vodka');
        $('#showResult').empty();

        // mock server to handle Post
        server.respondWith('POST', '/api/recipe', [
            200, { 'Content-Type': 'application/json' }, JSON.stringify({ reason: 'Oops, the recipe already exists! Try again.' })
        ]);


        //button trigger
        $('#btnAddRecipe').trigger('click');

        //get expect
        server.respond();
        expect($('#showResult').text()).to.equal('Oops, the recipe already exists! Try again.');
        done();
    })

    it('should add ingredient on click', function () {

        //button trigger
        $('#btnAddIngredient').trigger('click');

        //get Expect
        server.respond();
        expect($('.ingredient').length).to.be.gt(1);
    })

    it('should remove ingredient on click', function () {

        //button trigger
        $('.remove').trigger('click');

        //get Expect
        server.respond();
        expect($('.ingredient').length).to.equal(0);
    })
})
//****************Gina code ends*************************************

describe('search', function () {

    let server;

    beforeEach(function () {
        server = sinon.fakeServer.create();
        total = 0;
    });

    afterEach(function () {
        server.restore();
    });

    it('should render recipe', function () {
        const recipe = {
            instruction: 'Stir into glass over ice, garnish and serve',
            name: 'Negroni',
            ingredients: [
                { name: '1 oz Gin' },
                { name: '1 oz Campari' },
                { name: '1 oz Sweet Vermouth' }],
        };

        // call the fn under test
        renderRecipe(recipe);

        // server.respond();

        expect($('#recipe-title').text()).to.equal('Negroni');
        expect($('.instruction-body').text()).to.equal('Stir into glass over ice, garnish and serve');
        expect($('.ingredient-list').html()).to.equal('<li>1 oz Gin</li><li>1 oz Campari</li><li>1 oz Sweet Vermouth</li>');
        
        // reset dom
        $('.recipe').empty()
    });


});



