const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const db = require('./models');
const expect = chai.expect;
const routes = require('./routes/api-routes');


// Setting up the chai http plugin
chai.use(chaiHttp);

let request;


describe('GET /api/recipes', function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find all recipes', function(done) {
    // Add some users to the db to test with
    db.Recipe.bulkCreate([
      { instructions: 'Stir into glass over ice, garnish and serve', 
        name: 'Negroni', 
        ingredient: '1 oz Gin, 1 oz Campari, 1 oz Sweet Vermouth', 
        image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg' 
       },
      { instructions: 'Stirred over ice, strained into a chilled glass, garnished, and served up', 
        name: 'Manhatten', 
        ingredient: '3/4 oz Sweet Vermouth, 2 1/2 oz Blended Bourbon, dash Angostura bitters, 2 or 3 Ice, 1 Maraschino cherry, 1 twist of Orange peel', 
        image: 'https://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg'  
      },
      { instructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it' + 'Take care to moisten only the outer rim and sprinkle the salt on it' + 'The salt should present to the lips of the imbiber and never mix into the cocktail' + 'Shake the other ingredients with ice, then carefully pour into the glass.', 
        name: 'Margarita', 
        ingredient: '1 1/2 oz Tequila, 1/2 oz Triple sec, 1 oz Lime juice, Salt', 
        image: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg'  
      },
      { instructions: 'Mix all contents in a highball glass and sitr gently' + 'Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist', 
        name: 'Long Island Iced Tea', 
        ingredient: '1/2 oz Vodka, 1/2 oz Tequila, 1/2 oz Light rum, 1/2 oz Gin, 1 dash Coca-Cola, Twist of Lemon pee', 
        image: 'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg' 
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get('/api/recipes').end(function(err, res) {
        let responseStatus = res.status;
        let responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf();

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({ 
          instructions: 'Stir into glass over ice, garnish and serve', 
          name: 'Negroni', 
          ingredient: '1 oz Gin, 1 oz Campari, 1 oz Sweet Vermouth', 
          image: 'https://www.thecocktaildb.com/images/media/drink/tutwwv1439907127.jpg' 
         });

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({ 
          instructions: 'Stirred over ice, strained into a chilled glass, garnished, and served up', 
          name: 'Manhatten', 
          ingredient: '3/4 oz Sweet Vermouth, 2 1/2 oz Blended Bourbon, dash Angostura bitters, 2 or 3 Ice, 1 Maraschino cherry, 1 twist of Orange peel', 
          image: 'https://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg'  
         });

        expect(responseBody[2])
        .to.be.an('object')
        .that.includes({ 
        instructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it' + 'Take care to moisten only the outer rim and sprinkle the salt on it' + 'The salt should present to the lips of the imbiber and never mix into the cocktail' + 'Shake the other ingredients with ice, then carefully pour into the glass.', 
        name: 'Margarita', 
        ingredient: '1 1/2 oz Tequila, 1/2 oz Triple sec, 1 oz Lime juice, Salt', 
        image: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg' 
       });

        expect(responseBody[3])
        .to.be.an('object')
        .that.includes({ 
        instructions: 'Mix all contents in a highball glass and sitr gently' + 'Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist', 
        name: 'Long Island Iced Tea', 
        ingredient: '1/2 oz Vodka, 1/2 oz Tequila, 1/2 oz Light rum, 1/2 oz Gin, 1 dash Coca-Cola, Twist of Lemon pee', 
        image: 'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg' 
       });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});

describe('POST /api/recipes', function() {
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should save an example', function(done) {
    let reqBody = {
      instructions: 'Shake it, stir it, serve it up right',
      name: 'stealthy',
      ingredients: 'stealth, cunning, fortitude',
      image: 'https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg'
    };

    // POST the request body to the server
    request
      .post('/api/recipes')
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('object')
          .that.includes(reqBody);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});

