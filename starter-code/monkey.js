console.log("monkey.js loaded");

var Monkey = function (Name, species) {
	this.Name = Name;
	this.species = species;
	this.foodEaten = [];
	console.log('Monkey instantiated');
}


Monkey.prototype.eatSomething = function(food) {
	this.foodEaten.push(food);
}

Monkey.prototype.introduce = function() {
	console.log($(this.Name) + " is " + $(this.species) + " Eats " + $(this.foodEaten));
}



var Gurilla = new Monkey ('GuGu','Gurilla');
var Baboon = new Monkey ('BoBo','Baboon');
var Ape = new Monkey ('ApAp','Ape');
var Banana = new eatSomething('Banana');
Banana.eatSomething;
var Nut = new eatSomething('Nut');
var Apple = new eatSomething('Apple');


/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/
