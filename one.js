//  a function that takes another function as a parameter
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
  console.log(applyOperation(4, 2, add));       // Output: 6
  console.log(applyOperation(4, 2, subtract));  // Output: 2
  