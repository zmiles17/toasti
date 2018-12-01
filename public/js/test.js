//gina testing

//Unit Test
describe('validateRecipe', function() {
    it('should return false if name is empty ', function() {
        expect(validateRecipe('','mix ingredients', ['vodka','OJ'])).to.equal(false);
    });
    it('should return false if description is empty ', function() {
        expect(validateRecipe('Screwdriver','', ['vodka','OJ'])).to.equal(false);
    });
    it('should return false if ingrdient is empty ', function() {
        expect(validateRecipe('Screwdriver','mix ingredients', [])).to.equal(false);
    });

  });

// Functional/DOM/UI Test
describe('add recipe', function () {
    let server;

    before(function() {
        server = sinon.fakeServer.create(),
        server.respondWith('POST', '/recipe', [
            200, { 'Content-Type': 'application/json'}, JSON.stringify({data})
        ]);
    });

    after(function () {
        server.restore();
    })

    it('should add recipe on click', function () {
        // assign values for input boxes
        $('#Name').val('Screwdriver');
        $('#Description').val('Mix vodka and orange juice');
        $('#Ingredient1').val('1 cup vodka');
        $('#Ingredient2').val('1 1/2 cups orange juice');

        // mock server to handle Post
        server.respondWith('POST', '/recipe', [
            200, { 'Content-Type': 'application/json' }, JSON.stringify({result: 'success'})
          ]);
      
        //button trigger
        $('#addRecipe').trigger('click');

        //get expect
        server.respond();
        expect($('#showResult').text()).to.equal('Successfully added!');
    })

    it('should not add existing recipe on click', function () {
        // assign values for input boxes
        $('#Name').val('Screwdriver');
        $('#Description').val('Mix vodka and orange juice');
        $('#Ingredient1').val('1 cup vodka');
        $('#Ingredient2').val('1 1/2 cups orange juice');

        // mock server to handle Post
        server.respondWith('POST', '/recipe', [
            200, { 'Content-Type': 'application/json' }, JSON.stringify({result: 'error'})
          ]);
      
        //button trigger
        $('#addRecipe').trigger('click');

        //get expect
        server.respond();
        expect($('#showResult').text()).to.equal('Oops, the recipe already exists! Try again.');
    })

    it('should add ingredient on click', function () {
      
        //button trigger
        $('#addIngredient').trigger('click');

        //get Expect
        server.respond();
        expect($('.ingredient').length).to.be.gt(1);
    })

    it('should remove ingredient on click', function () {
      
        //button trigger
        $('#removeIngredient1').trigger('click');

        //get Expect
        server.respond();
        expect($('.ingredient').length).to.equal(1);
    })




})