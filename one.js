//  Higher order functions
//a function that takes another function as a parameter
function applyOperation(a, b, operation) {
    return operation(a, b);
  }
  
  //  some functions to pass as parameters
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  // Calling  the applyOperation function with different operations
  console.log(applyOperation(4, 2, add));     
  console.log(applyOperation(4, 2, subtract));  



  

  // Second assignement question
  const getInitials = (firstName, lastName) => `${firstName.charAt(0)}${lastName.charAt(0)}`;
  const initials = getInitials('Roger', 'Waters');
  console.log(initials); // Output: RW

  
  

//Closures function
function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  
  return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // Output: 8


//hoisting example
console.log(x);
var x = 10;

foo(); 
function foo() {
  console.log("Hello from foo!");
}




console.log(name); // output: undefined
var name = 'John';



let name;
console.log(name); // Uncaught ReferenceError: name is not defined
name = 'John';

