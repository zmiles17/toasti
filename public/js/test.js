describe('average', function(){
    it('should return the average of ratings for recipe', function(){
        expect (average(4,6)).to.equal(5);
    });
})

describe('ratingRender', function(){
    it('should ')
})
describe('search', function () {

  let server;

  beforeEach(function () {
    server = sinon.fakeServer.create();
    total = 0;
  });

  afterEach(function () {
    server.restore();
  });

  it('should run search on click', function () {

    server.respondWith('GET', '/api/search', [
      200, { 'Content-Type': 'application/json' }, JSON.stringify({
        instructions: 'Stir into glass over ice, garnish and serve',
        name: 'Negroni',
        ingredient: '1 oz Gin, 1 oz Campari, 1 oz Sweet Vermouth',
        image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg'
      })
    ]);

    $('#search').trigger('submit');

    server.respond();
    expect($('#name-0').text()).to.equal('Negroni');
    expect($('#instructions-0').text()).to.equal('Stir into glass over ice, garnish and serve');
    expect($('#image-0').atr('src')).to.equal('https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg');
    expect($('#ingredients-0').html()).to.equal('<ul><li>1 oz Gin</li><li>1 oz Campari</li><li>1 oz Sweet Vermouth</li></ul>');
    //may need to go back in and redo the ul structure
  });


});
