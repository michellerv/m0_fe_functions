// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World"
// The argument passed is "Hello"; includes() will determine if "Hello" is in the string "Hello World"
// The return value is true. 
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World".
// The argument passed is "Hello"; endsWith() will determine if "Hello World" ends with "Hello"
// The return value is false.
"Hello World".endsWith("Hello");

// The endsWith() method is called on the string "Hello World".
// The argument passed is "rld"; endsWith() will determine if "Hello World" ends with "rld".
// The return value is true. 
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.


// The includes() method is called on the favePlace variable, which stores the string object "me".
// The includes() method returns true if the data in the favePlace variable has the argument passed in. 
// In this example, the return value is true, because "Home" does include "me" in it.
// The console.log() statements prints the return value of the includes() method (true) to the console.
var favePlace = "Home";
console.log(favePlace.includes("me"))


// The toUpperCase() method is called on the emotions variable, which stores the sting object "Happy".
// The toUppercase () method will change the string object  in the emotions variablle to be all uppercase.
// In this example, the return value is HAPPY, because the method turned the string object uppercase.
// The console.log()statements prints the return value of the toUpperCase() method (HAPPY) to the console.
var emotions = "Happy";
console.log(emotions.toUpperCase())


// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.