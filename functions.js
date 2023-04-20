// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting(){
    return "HI!";
  }

  var hello = greeting()
  var hola = greeting()

  console.log(hello)
  console.log(hola)
  


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name){
    return `hi, ${name}!`;
  }

  var message = customGreeting("Michelle");
  var note = customGreeting("Chip");

  console.log(message)
  console.log(note)


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, second, last){
    return `HI ${first} ${second} ${last}, doing well?`
}

var name = greetPerson("Michelle",  "Rose",  "Villagran")
var greeting = greetPerson("Marc", "Vincent", "Villagran")

console.log(name)
console.log(greeting)

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.


function square(number){
    return  number*number
}
    var num1 = square(5)
    console.log(`${num1} is the square of 5`)


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(number, item){

    if (number>= 4) {
        return `${item} is stocked`;
    } else if (number === 3){
        return `${item}- runnign LOW`;
    } else if (number <= 0) {
        return `${item} - Cheese- OUT of Stock!`;
    } else {
        return `${item} - Salsa running Low`
    }
}





console.log(checkStock(4, "Coffee"));
// => "Coffee is stocked"

console.log(checkStock(3, "Tortillas"));
// => "Tortillas - running LOW"

console.log(checkStock(0, "Cheese"));
// => "Cheese - OUT of stock!"

console.log(checkStock(1, "Salsa"));
// => "Salsa - running LOW"