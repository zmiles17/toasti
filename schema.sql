-- db create
DROP DATABASE IF EXISTS recipedb;
CREATE DATABASE recipedb;

-- recipie table create
DROP TABLE IF EXISTS recipedb.recipes;
CREATE TABLE IF NOT EXISTS recipedb.recipes (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255) NOT NULL, `instruction` VARCHAR(20000) NOT NULL, `TotalStars` INTEGER, `TotalVotes` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
SHOW INDEX FROM recipedb.recipes FROM `recipeDB`;

-- ingredients table create
DROP TABLE IF EXISTS recipedb.ingredients;
CREATE TABLE IF NOT EXISTS recipedb.ingredients (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(20000) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `recipeId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`recipeId`) REFERENCES recipedb.recipes(`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
SHOW INDEX FROM recipedb.ingredients FROM `recipeDB`;

-- data load

-- vodka cranberry
INSERT INTO recipedb.recipes (`id`,`name`,`instruction`,`TotalStars`,`TotalVotes`,`image`, `createdAt`,`updatedAt`) VALUES (1,'Cape Cod','Stir into glass over ice, garnish and serve',5,3,null,NOW(),NOW());
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz Vodka',NOW(),NOW(),1);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'5 oz Cranberry Juice',NOW(),NOW(),1);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 Lime wedge',NOW(),NOW(),1);

-- gin and tonic
INSERT INTO recipedb.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`,`image`, `createdAt`,`updatedAt`) VALUES (2,'Gin and Tonic','Stir over ice, garnish and serve',5,1,null, NOW(),NOW());
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz Gin',NOW(),NOW(),2);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'5 oz Tonic',NOW(),NOW(),2);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 Lime wedge',NOW(),NOW(),2);

-- screwdriver
INSERT INTO recipedb.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`,`image`, `createdAt`,`updatedAt`) VALUES (3,'Screwdriver','Stir over ice, garnish and serve',5,1,null, NOW(),NOW());
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 oz vodka',NOW(),NOW(),3);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'5 oz pulp-free orange juice',NOW(),NOW(),3);

-- lit
INSERT INTO recipedb.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`,`image`, `createdAt`,`updatedAt`) VALUES (4,'Long Island Iced Tea','Mix all contents in a highball glass and stir gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist',5,1,null, NOW(),NOW());
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz Vodka',NOW(),NOW(),4);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz Tequila',NOW(),NOW(),4);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz Light rum',NOW(),NOW(),4);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/2 oz Gin',NOW(),NOW(),4);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 dash Coca-Cola',NOW(),NOW(),4);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'Twist of Lemon peel',NOW(),NOW(),4);

-- jack and coke
INSERT INTO recipedb.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`,`image`, `createdAt`,`updatedAt`) VALUES (5,'Jack and Coke','Mix all contents in a highball glass and stir gently.',5,1,null, NOW(),NOW());
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 oz Jack Daniels Tennessee Whiskey',NOW(),NOW(),5);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'5 oz Coca Cola',NOW(),NOW(),5);

-- moscow mule
INSERT INTO recipedb.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`,`image`, `createdAt`,`updatedAt`) VALUES (6,'Moscow Mule',' Combine vodka and ginger beer in a copper mug or highball glass filled with ice. Add lime juice. Stir gently and garnish with a lime slice.',5,1,null, NOW(),NOW());
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'4 oz Ginger beer',NOW(),NOW(),6);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 1/2 oz Vodka',NOW(),NOW(),6);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1/6 oz Lime juice',NOW(),NOW(),6);

-- gimlet
INSERT INTO recipedb.recipes (`id`,`name`,`instruction`, `TotalStars`,`TotalVotes`,`image`, `createdAt`,`updatedAt`) VALUES (7,'Gimlet',' Mix and serve. Garnish with a slice of lime.',5,1,null, NOW(),NOW());
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'One part sweetened Lime Juice',NOW(),NOW(),7);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'Four parts Gin',NOW(),NOW(),7);

-- french 
INSERT INTO recipedb.recipes (`id`,`name`,`instruction`,`TotalStars`,`TotalVotes`,`image`, `createdAt`,`updatedAt`) VALUES (8,'French 75','Using zester or paring knife, slice peel from lemon in long, thin spiral. Reserve lemon for another use and set peel aside.In cocktail shaker, combine gin, lemon juice, and simple syrup. Add ice and shake vigorously for 20 seconds. Strain into chilled Champagne flute and top with sparkling wine. Curl lemon peel around finger to create twist at least 6 inches long. Garnish drink with twist and serve immediately.',5,1,null, NOW(),NOW());
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 1/2 ounces gin',NOW(),NOW(),8);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'3/4 ounce fresh lemon juice',NOW(),NOW(),8);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'2 ounces dry sparkling wine, such as brut Champagne, chilled',NOW(),NOW(),8);
INSERT INTO recipedb.ingredients (`id`,`name`,`createdAt`,`updatedAt`,`recipeId`) VALUES (DEFAULT,'1 lemon',NOW(),NOW(),8);