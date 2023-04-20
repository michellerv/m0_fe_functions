// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() {
  return "Hello, what is your name?";
 }
    console.log (askForName()) ;
  
// I changed where the curly brackets went and where the console.log
//was located. The function was declared as askForName with parenthesese,
//the function is then called later to print. The return shows what should
//be printed when the function is called. 



// EX 2:
function addThreeNums(first, second, third) 
{
var sum = first + second + third;
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

//I changed the position of the first curly bracket so the code block can be
//seen easier. I added a semi-colon after the var sum line for consistency. 
//I added sonsole.log so that the argument's return value could be printed.

// EX 3:
function makeFreshPesto()   {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");   
 }

makeFreshPesto();

//I added the full word function to display what method I will be using. 
//I put some spaces between the curly bracket after makeFreshPesto, as well as afer the final
//console.log line to clearly see the code block. 

//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }