// This is a solo challenge

// Your mission description:
// Ned Stark must travel from Winterfell to King's Landing
// and slay Prince Joffrey. Then Return to Winterfell and 
// proclaim that King's Landing is now ruled by House Stark and that he is the one true Ruler of The 7 Kingdoms!

// Pseudocode
// define object constructor function for cities
// Initialize Winterfell and King's Landing with the properties:
// Ruler, position
// the position variable should be an object with parameters x, y
// define object constructor function to create characters
// Initialize Ned Stark and Prince Joffrey with the properties:
// Name, Title, Home, position, Quote
// use Move method to change Ned Stark's position from Winterfell to King's Landing
// use Duel Mehod to slay prince Joffrey and change Ruler of King's Landing to Ned Stark, and delete title of Joffrey.
// use Move method to return Ned Stark's location to Winterfell
// print Ned Stark's quote to the console

// Initial Code
position = {}

winterfell = {
	name: "Winterfell",
	ruler: ruler,
	position: {x: 100, y:100}
}

kingsLanding = {
	name: "King's Landing",
	ruler: ruler,
	position: {x: 20, y: 30}
}

function movechar(x, y){
	this.position.x = x
	this.position.y = y
}

function duel(){
	console.log("Sorry, " + this.enemy.name + " but your reign as " + this.enemy.title + " has come to an end!")
	delete this.enemy.title
	delete this.enemy.position
	this.enemy = "vanquished"
}

function Character(name, title, home, position, enemy, quote){
	this.name = name;
	this.title = title;
	this.home = home;
	this.position = position;
	this.enemy = enemy;
	this.quote = quote;
	this.movechar = movechar;
	this.duel = duel;
}

joffrey = {}
var nedStark = new Character("Ned Stark", "King of Winterfell", winterfell, winterfell.position, joffrey, "I am the one true King of the 7 Kingdoms!")
winterfell.ruler = nedStark
var joffrey = new Character("Prince Joffrey", "Prince of the South",kingsLanding, kingsLanding.position, nedStark,"I'm an evil little child!")
kingsLanding.ruler = joffrey;
nedStark.enemy = joffrey;

	//travel to King's Landing
nedStark.movechar(20, 30)
	//slay Prince Joffrey
nedStark.duel()
	//travel back to Winterfell
nedStark.movechar(100,100)
	//proclaim your right to the throne!
console.log(nedStark.quote)



// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 