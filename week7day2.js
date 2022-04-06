//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFood(obj){
  console.log('favorite Pizzas:');
  for(p in obj.pizza){
    console.log(`${obj.pizza[p]}`);
  } console.log(`Tacos: ${obj.tacos}`);
  console.log(`Burgers: ${obj.burgers}`);
  console.log('Ice Cream:');
  for (i in obj.ice_cream){
    console.log(`${obj.ice_cream[i]}`);
    console.log(`Shakes: ${obj.shakes[0].oberwise}, ${obj.shakes[0].dunkin}, ${obj.shakes[0].culvers}, ${obj.shakes[0].mcDonalds}, ${obj.shakes[0].cupids_candies},`);
  } 
 }

favFood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.addAge = (num)=>{ this.age += num; }
  }
  Person.prototype.printInfo = function(){
      console.log(this.name);
      console.log(this.age)
  }
  
  var p= new Person('Michael',56);
  p.printInfo();
  p.addAge(1);
  p.printInfo();

  var p= new Person('Kyle',28);
  p.printInfo();
  p.addAge(3);
  p.printInfo();


// =0============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
  let word = x => {
    if (x.length > 10){
      console.log('Big Word');
    } else{
      console.log('Small Word');
    }
  }

  console.log(word())
