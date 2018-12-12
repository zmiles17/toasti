const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const db = require('./models');
const expect = chai.expect;
const routes = require('./routes/api-routes');


// Setting up the chai http plugin
chai.use(chaiHttp);

let request;


describe('GET /api/recipe', function () {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function () {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find all recipe', function (done) {
    // Add some data to the db to test with

    db.recipe.create({
      id: 1,
      instruction: 'Stir into glass over ice, garnish and serve',
      name: 'Negroni',
      ingredients: [
        { name: '1 oz Gin' },
        { name: '1 oz Campari' },
        { name: '1 oz Sweet Vermouth' }],
      image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg'
    }, {
        include: [db.ingredient]
      }).then(function () {
        db.recipe.create({
          id: 2,
          instruction: 'Stirred over ice, strained into a chilled glass, garnished, and served up',
          name: 'Manhatten',
          ingredients: [
            { name: '3/4 oz Sweet Vermouth' },
            { name: '2 1/2 oz Blended Bourbon' },
            { name: 'dash Angostura bitters' },
            { name: '2 or 3 Ice' },
            { name: '1 Maraschino cherry' },
            { name: '1 twist of Orange peel' }],
          image: 'https://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg'
        }, {
            include: [db.ingredient]
          }).then(function () {
            db.recipe.create({
              id: 3,
              instruction: 'Rub the rim of the glass with the lime slice to make the salt stick to it' + 'Take care to moisten only the outer rim and sprinkle the salt on it' + 'The salt should present to the lips of the imbiber and never mix into the cocktail' + 'Shake the other ingredients with ice, then carefully pour into the glass.',
              name: 'Margarita',
              ingredients: [
                { name: '1 1/2 oz Tequila' },
                { name: '1/2 oz Triple sec' },
                { name: '1 oz Lime juice' },
                { name: 'Salt' }],
              image: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg'
            }, {
                include: [db.ingredient]
              }).then(function () {
                db.recipe.create({
                  id: 4,
                  instruction: 'Mix all contents in a highball glass and sitr gently' + 'Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist',
                  name: 'Long Island Iced Tea',
                  ingredients: [
                    { name: '1/2 oz Vodka' },
                    { name: '1/2 oz Tequila' },
                    { name: '1/2 oz Light rum' },
                    { name: '1/2 oz Gin' },
                    { name: '1 dash Coca-Cola' },
                    { name: 'Twist of Lemon peel' }],
                  image: 'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg'
                }, {
                    include: [db.ingredient]
                  }).then(function () {

                    // Request the route that returns all examples
                    request.get('/api/recipe').end(function (err, res) {
                      let responseStatus = res.status;
                      let responseBody = res.body;

                      // Run assertions on the response

                      expect(err).to.be.null;

                      expect(responseStatus).to.equal(200);

                      expect(responseBody)
                        .to.be.an('array')
                        .that.has.lengthOf(4);

                      expect(responseBody[0])
                        .to.be.an('object')
                        .that.includes({
                          instruction: 'Stir into glass over ice, garnish and serve',
                          name: 'Negroni',
                          // image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg' 
                        });
                      expect(responseBody[0].ingredients).to.be.an('array');
                      expect(responseBody[0].ingredients.map(i => i.name)).to.deep.equal([
                        '1 oz Gin', '1 oz Campari', '1 oz Sweet Vermouth'
                      ])


                      expect(responseBody[1])
                        .to.be.an('object')
                        .that.includes({
                          instruction: 'Stirred over ice, strained into a chilled glass, garnished, and served up',
                          name: 'Manhatten',
                          // image: 'https://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg'  
                        });
                      expect(responseBody[1].ingredients).to.be.an('array');
                      expect(responseBody[1].ingredients.map(i => i.name)).to.deep.equal([
                        '3/4 oz Sweet Vermouth', '2 1/2 oz Blended Bourbon', 'dash Angostura bitters', '2 or 3 Ice', '1 Maraschino cherry', '1 twist of Orange peel',
                      ])

                      expect(responseBody[2])
                        .to.be.an('object')
                        .that.includes({
                          instruction: 'Rub the rim of the glass with the lime slice to make the salt stick to it' + 'Take care to moisten only the outer rim and sprinkle the salt on it' + 'The salt should present to the lips of the imbiber and never mix into the cocktail' + 'Shake the other ingredients with ice, then carefully pour into the glass.',
                          name: 'Margarita',
                          // image: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg' 
                        });
                      expect(responseBody[2].ingredients).to.be.an('array');
                      expect(responseBody[2].ingredients.map(i => i.name)).to.deep.equal([
                        '1 1/2 oz Tequila', '1/2 oz Triple sec', '1 oz Lime juice', 'Salt',
                      ])

                      expect(responseBody[3])
                        .to.be.an('object')
                        .that.includes({
                          instruction: 'Mix all contents in a highball glass and sitr gently' + 'Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist',
                          name: 'Long Island Iced Tea',
                          // image: 'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg' 
                        });
                      expect(responseBody[3].ingredients).to.be.an('array');
                      expect(responseBody[3].ingredients.map(i => i.name)).to.deep.equal([
                        '1/2 oz Vodka', '1/2 oz Tequila', '1/2 oz Light rum', '1/2 oz Gin', '1 dash Coca-Cola', 'Twist of Lemon peel',
                      ])

                      // The `done` function is used to end any asynchronous tests
                      done();
                    });
                  });
              });
          });
      });
  });

  it('should search for recipes matching name', function (done) {
    // Add some data to the db to test with

    db.recipe.create({
      id: 1,
      instruction: 'Stir into glass over ice, garnish and serve',
      name: 'Negroni',
      ingredients: [
        { name: '1 oz Gin' },
        { name: '1 oz Campari' },
        { name: '1 oz Sweet Vermouth' }],
      image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg'
    }, {
        include: [db.ingredient]
      }).then(function () {

        // q=Negroni  
        request.get('/api/recipe?q=Negroni').end(function (err, res) {
          let responseStatus = res.status;
          let responseBody = res.body;

          // Run assertions on the response

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an('array')
            .that.has.lengthOf(1);

          expect(responseBody[0])
            .to.be.an('object')
            .that.includes({
              instruction: 'Stir into glass over ice, garnish and serve',
              name: 'Negroni',
              // image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg' 
            });
          expect(responseBody[0].ingredients).to.be.an('array');
          expect(responseBody[0].ingredients.map(i => i.name)).to.deep.equal([
            '1 oz Gin', '1 oz Campari', '1 oz Sweet Vermouth'
          ])

          done();
        });

      });
  });

  it('should search for recipes matching ingredient', function (done) {
    // Add some data to the db to test with

    db.recipe.create({
      id: 1,
      instruction: 'Stir into glass over ice, garnish and serve',
      name: 'Negroni',
      ingredients: [
        { name: '1 oz Gin' },
        { name: '1 oz Campari' },
        { name: '1 oz Sweet Vermouth' }],
      image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg'
    }, {
        include: [db.ingredient]
      }).then(function () {

        // q=Gin
        request.get('/api/recipe?q=Gin').end(function (err, res) {
          let responseStatus = res.status;
          let responseBody = res.body;

          // Run assertions on the response

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an('array')
            .that.has.lengthOf(1);

          expect(responseBody[0])
            .to.be.an('object')
            .that.includes({
              instruction: 'Stir into glass over ice, garnish and serve',
              name: 'Negroni',
              // image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg' 
            });
          expect(responseBody[0].ingredients).to.be.an('array');
          expect(responseBody[0].ingredients.map(i => i.name)).to.deep.equal([
            '1 oz Gin', '1 oz Campari', '1 oz Sweet Vermouth'
          ])

          done();
        });
      });
  });

  it('should not return any results', function (done) {
    db.recipe.create({
      id: 1,
      instruction: 'Stir into glass over ice, garnish and serve',
      name: 'Negroni',
      ingredients: [
        { name: '1 oz Gin' },
        { name: '1 oz Campari' },
        { name: '1 oz Sweet Vermouth' }],
      image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg'
    }, {
        include: [db.ingredient]
      }).then(function () {

        // q=Gin
        request.get('/api/recipe?q=Veronica').end(function (err, res) {
          let responseStatus = res.status;
          let responseBody = res.body;

          // Run assertions on the response

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an('array')
            .that.has.lengthOf(0);

          done();
        });
      });
  });
});

describe('POST /api/recipe', function () {
  beforeEach(function () {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should save an example', function (done) {
    let reqBody = {
      instruction: 'Shake it, stir it, serve it up right',
      name: 'stealthy',
      ingredient: ['stealth', 'cunning', 'fortitude'],
      // image: 'https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg'
    };

    // POST the request body to the server
    request
      .post('/api/recipe')
      .send(reqBody)
      .end(function (err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('object')
          .that.includes({
            name: reqBody.name,
            instruction: reqBody.instruction
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});

describe('POST /api/recipe/update', function(done){
  it('update the total votes and stars for a recipe', function (done) {
  let reqBody = {
    id: 1,
    TotalStars: 4,
    TotalVotes: 3

  };
  // POST the request body to the server
  request
  .post('/api/recipe/update')
  .send(reqBody)
  .end(function (err, res) {
    var responseStatus = res.status;
    var responseBody = res.body;

    // Run assertions on the response

    expect(err).to.be.null;

    expect(responseStatus).to.equal(200);

    expect(responseBody)
      .to.be.an('object')
      .that.includes({
        id: reqBody.id,
        TotalStars: reqBody.TotalStars,
        TotalVotes: reqBody.TotalVotes
      });

    // The `done` function is used to end any asynchronous tests
    done();
  });
  })
});


