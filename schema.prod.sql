-- db create
DROP DATABASE IF EXISTS x311v5btag9bv5mr;
CREATE DATABASE x311v5btag9bv5mr;

-- recipie table create
DROP TABLE IF EXISTS x311v5btag9bv5mr.recipes;
CREATE TABLE IF NOT EXISTS x311v5btag9bv5mr.recipes (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255) NOT NULL, `instruction` VARCHAR(20000) NOT NULL, `TotalStars` INTEGER, `TotalVotes` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
SHOW INDEX FROM x311v5btag9bv5mr.recipes FROM `x311v5btag9bv5mr`;

-- ingredients table create
DROP TABLE IF EXISTS x311v5btag9bv5mr.ingredients;
CREATE TABLE IF NOT EXISTS x311v5btag9bv5mr.ingredients (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(20000) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `recipeId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`recipeId`) REFERENCES x311v5btag9bv5mr.recipes(`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
SHOW INDEX FROM x311v5btag9bv5mr.ingredients FROM `x311v5btag9bv5mr`;

-- data load

-- vodka cranberry
INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (1,'Vodka Cranberry','Stir into glass over ice, garnish and serve',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz Vodka',NOW(),NOW(),1);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'5 oz Cranberry Juice',NOW(),NOW(),1);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 Lime wedge',NOW(),NOW(),1);

-- gin and tonic
INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (2,'Gin and Tonic','Stir over ice, garnish and serve',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz Gin',NOW(),NOW(),2);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'5 oz Tonic',NOW(),NOW(),2);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 Lime wedge',NOW(),NOW(),2);

-- screwdriver
INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (3,'Screwdriver','Stir over ice, garnish and serve',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz vodka',NOW(),NOW(),3);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'5 oz pulp-free orange juice',NOW(),NOW(),3);

-- lit
INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (4,'Long Island Iced Tea','Mix all contents in a highball glass and stir gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz Vodka',NOW(),NOW(),4);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz Tequila',NOW(),NOW(),4);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz Light rum',NOW(),NOW(),4);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz Gin',NOW(),NOW(),4);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 dash Coca-Cola',NOW(),NOW(),4);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'Twist of Lemon peel',NOW(),NOW(),4);

-- jack and coke
INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (5,'Jack and Coke','Mix all contents in a highball glass and stir gently.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz Jack Daniels Tennessee Whiskey',NOW(),NOW(),5);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'5 oz Coca Cola',NOW(),NOW(),5);

-- moscow mule
INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (6,'Moscow Mule',' Combine vodka and ginger beer in a copper mug or highball glass filled with ice. Add lime juice. Stir gently and garnish with a lime slice.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'4 oz Ginger beer',NOW(),NOW(),6);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 1/2 oz Vodka',NOW(),NOW(),6);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/6 oz Lime juice',NOW(),NOW(),6);

-- gimlet
INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (7,'Gimlet',' Mix and serve. Garnish with a slice of lime.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'One part sweetened Lime Juice',NOW(),NOW(),7);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'Four parts Gin',NOW(),NOW(),7);


INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (9,'Tequila Sunrise','Add tequila and orange juice in a tall glass, drizzle with grenadine.Garnish with an orange slice and maraschino cherry.',4,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz tequila',NOW(),NOW(),9);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'4 oz orange juice',NOW(),NOW(),9);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz grenadine',NOW(),NOW(),9);


INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (10,'Tegroni','Add all the ingredients to a mixing glass and fill with ice. Stir, and strain into a rocks glass filled with fresh ice or a chilled cocktail glass.Garnish with a grapefruit twist.',1,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz tequila',NOW(),NOW(),10);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz sweet vermouth',NOW(),NOW(),10);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz Campari',NOW(),NOW(),10);


INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (11,'Manhattan','Add all the ingredients into a mixing glass with ice, and stir until well-chilled. Strain into a chilled glass. Garnish with a brandied cherry.',4,3,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz bourbon or rye',NOW(),NOW(),11);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz sweet vermouth',NOW(),NOW(),11);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'dash Angostura bitters',NOW(),NOW(),11);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'dash Orange bitters',NOW(),NOW(),11);

INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (12,'Vieux Carre','Add all the ingredients to a mixing glass and fill with ice. Stir, and strain into a cocktail glass. Garnish with a cherry.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'4 dashes Dale DeGroff's Pimento Aromatic Bitters,NOW(),NOW(),12);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 tsp Benedictine',NOW(),NOW(),12);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'3/4 oz Sweet vermouth',NOW(),NOW(),12);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'3/4 oz Cognac',NOW(),NOW(),12);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'3/4 oz Dickel Rye Whiskey',NOW(),NOW(),12);

INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (13,'Aviation','Add all the ingredients to a shaker and fill with ice. Shake, and strain into a cocktail glass. Garnish with a brandied cherry.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2oz oz gin',NOW(),NOW(),13);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'3/4 oz fresh lemon juice',NOW(),NOW(),13);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/4 oz Creme de violette',NOW(),NOW(),13);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz maraschino liqueur',NOW(),NOW(),13);

INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (14,'Old Fashioned','Add the sugar, bitters and water into a rocks glass, and stir until sugar is nearly dissolved. Fill the glass with large ice cubes, add the bourbon, and gently stir to combine the flavors. Express the oil of an orange peel over the glass, then drop in.',2,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 tsp sugar',NOW(),NOW(),14);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'3 dashes Angostura bitters',NOW(),NOW(),14);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz bourbon',NOW(),NOW(),14);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 tsp water',NOW(),NOW(),14);


INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (15,'Mojito','In 10-oz glass, stir together lime juice and sugar until sugar dissolves. Add 1/4 cup crushed ice. Rub mint leaves over rim of glass, then tear leaves in half and add to glass. Gently stir for 15 seconds, then add rum, remaining crushed ice, and club soda. Gently stir for 15 seconds, then add rum, remaining crushed ice, and club soda. Gently stir for 5 seconds, then tuck mint sprigs into top of glass and insert tall straw.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz fresh lime juice',NOW(),NOW(),15);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz white rum',NOW(),NOW(),15);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz club soda',NOW(),NOW(),15);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'12 fresh mint leaves',NOW(),NOW(),15);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 tsp superfine sugar',NOW(),NOW(),15);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 cup crushed ice',NOW(),NOW(),15);

INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (16,'Lemon Drop','Coat the rim of a cocktail glass with sugar and set aside. Add all the ingredients into the shaker with ice and shake. Strain into the prepared glass.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'12 oz Vodka',NOW(),NOW(),16);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz ounce fresh lemon juice',NOW(),NOW(),16);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz simple syrup',NOW(),NOW(),16);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz triple sec',NOW(),NOW(),16);

INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (17,'French Negroni','Add ice to a shaker and pour in all the ingredients. Using a bar spoon, stir 40 to 45 revolutions or until thoroughly chilled. Strain into a martini glass over ice into a rocks glass. Garnish with a twist.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz Gin',NOW(),NOW(),17);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz Lillet',NOW(),NOW(),17);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz sweet red vermouth',NOW(),NOW(),17);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 orange twist',NOW(),NOW(),17);


INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (18,'Bahama Mama','Fill a collins glass with cracked ice. Pour all the ingredients in and stir.Garnish with a strawberry or maraschino cherry.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/4 oz coffee liqueur',NOW(),NOW(),18);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz dark rum',NOW(),NOW(),18);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz coconut liqueur',NOW(),NOW(),18);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/4 oz 151 proof rum',NOW(),NOW(),18);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'4 oz pineapple juice',NOW(),NOW(),18);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'juice o half a lemon',NOW(),NOW(),18);


INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (19,'Vesper','Add all the ingredients into a mixing glass with ice and stir. Strain into a chilled cocktail glass.Twist a slice of lemon peel over the drink, rub along the rim of the glass, and drop it in.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'3 oz Gin',NOW(),NOW(),19);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz Vodka',NOW(),NOW(),19);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz Lillet blanc',NOW(),NOW(),19);

INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (20,'Bloody Mary','Mix vodka, tomato juice, lemon juice, Worstershire sauce, Tabasco, salt. Pepper, celery salt and horseradish(if using) and pour in glass.Garnish with lemon or lime wedge, celery stalk, green onion or pickled green bean.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 1/2 oz vodka',NOW(),NOW(),20);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'3 oz tomato juice',NOW(),NOW(),20);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'juice of one lemon',NOW(),NOW(),20);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 teaspoon Worcestershire sauce',NOW(),NOW(),20);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'3 drops Tabasco sauce',NOW(),NOW(),20);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/4 teaspoon celery salt',NOW(),NOW(),20);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 tablespoon prepared horseradish',NOW(),NOW(),20);


INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (21,'Caipirhinha','In a double Old Fashioned glass, muddle the sugar and lime. Fill with ice and add the cachaca. Stir briefly and garnish with a lime wheel if desired.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 tsp sugar',NOW(),NOW(),21);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz Cachaca',NOW(),NOW(),21);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 lime, halved into wedges',NOW(),NOW(),21);


INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (22,'Mai Tai','Shake all ingredients(except grenadine) in a shaker with ice. Pour into a tall glass. Splash with grenadine.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz light rum',NOW(),NOW(),22);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz gold rum',NOW(),NOW(),22);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz orange Cointreau',NOW(),NOW(),22);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'juice of one lime',NOW(),NOW(),22);


INSERT INTO x311v5btag9bv5mr.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`, `createdAt`,`updatedAt`) VALUES (23,'Mint Julep','In a rocks glass, lightly muddle the mint and the syrup. Add the bourbon and pack tightly with crushed ice. Stir until the cup is frosted on the outside. Top with more crushed ice to form an ice dome and garnish with a few drops of bitters, if desired, and a mint sprig.',5,1,NOW(),NOW());
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/4 oz raw sugar syrup',NOW(),NOW(),23);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'8 mint leaves',NOW(),NOW(),23);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz bourbon',NOW(),NOW(),23);
INSERT INTO x311v5btag9bv5mr.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'bitters(optional)',NOW(),NOW(),23);