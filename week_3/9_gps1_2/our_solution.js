// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Jeff Keslin
//  2. Edgar Garza


// 0. "YOU SIGNED... WHO?!"




// 1. "Here they Come!"

var client1 = {name: "Adam Sandler",
              Age: 47,
              Quote: "That's your home! Are you too good for your home?!"};
              
var client2 = {name: "Kristen Bell",
               age: 33,
               quote: "Do you wanna build a snowman?"};
               
var client3 = {name: "Jim Carrey",
               Age: 52,
               Quote: "...So you're telling me there's a chance? YEAH?"};



// 2. "TIME IS MONEY!"

var shooterMcGavin = new client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
var adamSandler = new client("Adam Sandler", 47, "That's your Home! Are you too good for your home?!");
var jimCarrey = new client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

function client(name, age, quote) {
   this.name = name;
   this.age = age;
   this.quote = quote;
   };


//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";




// 3. "SHOW 'EM OFF!"
function client(name, age, quote) {
   this.name = name;
   this.age = age;
   this.quote = quote;
   this.display = function(){
            console.log(name + " is " + age + " and he's known for saying, " + quote);
        };
   };
   

// 4. "But wait, there's more!"

function client(name, age, quote) {
   this.name = name;
   this.age = age;
   this.quote = quote;
   this.showQuote = function(){
            console.log(this.quote);
        };
   };


// 5.  ** BONUS **


//  6.  Your Reflection:

// This was a great gps. While the beginning was fairly simple, once we arrived to parts 3 and 4, 
// that's when is the challenge started to really pick up. We needed to a ton of research during 
// to finish this challenge which might have been its purpose. The "this" property that was used 
// wasn't explained in the given resources so we had to work it out for ourselves. Now that I've done challenge #5 
// I feel like I have a much better handle on manipulating javascript objects and using functions inside objects, which is really cool!
// The code we wrote in GPS 1.2 makes a lot more sense to me now than it did when we first wrote it.
// 