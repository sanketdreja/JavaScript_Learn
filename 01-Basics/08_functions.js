// JavaScript, functions are first-class citizens, which means they are treated as objects and can be passed around, assigned to variables, and returned from other functions. Functions in JavaScript can be defined in various ways and are crucial for building modular and reusable code. Here's an in-depth explanation of functions in JavaScript:

// Function Declaration:
function add(a, b) {
    return a + b;
}
// Function Declaration Syntax: function functionName(parameters) { // function body }
// Functions declared using the function keyword are hoisted, meaning they can be called before they are declared in the code.
// Function Expression:
const subtract = function(a, b) {
    return a - b;
};
// Function Expression Syntax: const functionName = function(parameters) { // function body }
// Unlike function declarations, function expressions are not hoisted.
// Arrow Function:
const multiply = (a, b) => a * b;
// Arrow Function Syntax: (parameters) => expression
// Arrow functions are a concise way to write functions and have a lexical this binding.
// Anonymous Function:
const divide = function(a, b) {
    return a / b;
};
// Functions without a specified name are called anonymous functions.
// Often used in function expressions or as callbacks.
// Immediately Invoked Function Expression (IIFE):
(function() {
    console.log("IIFE executed");
})();
// An IIFE is a function that is defined and executed immediately after creation.
// Used to create a private scope and avoid polluting the global namespace.
// Function Parameters and Arguments:
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("John");
// Parameters: Named variables inside the function's parentheses.
// Arguments: Values passed to the function when it is called.
// Return Statement:
function square(num) {
    return num * num;
}

const res = square(4); // result will be 16
// The return statement specifies the value the function should return.
// If no return statement is present, the function returns undefined.
// Default Parameters:
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

const result = power(3); // result will be 9 (3^2)
// Default parameter values are used if an argument is not provided.
// Rest Parameters:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

const totalSum = sum(1, 2, 3, 4); // totalSum will be 10
// The rest parameter (...numbers) allows a function to accept an indefinite number of arguments as an array.
// Callback Functions:
function fetchData(url, callback) {
    // Code to fetch data from the provided URL
    const data = fetchDataFromURL(url);
    
    // Callback function is executed with the fetched data
    callback(data);
}

function processData(data) {
    console.log(`Processing data: ${data}`);
}

fetchData("https://example.com/api/data", processData);
// A callback function is a function passed as an argument to another function and executed after the completion of some asynchronous operation.
// Closures:
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}

const closureExample = outerFunction(5);
console.log(closureExample(3)); // Output: 8
// A closure is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing.
// Higher-Order Functions:
function multiplyBy(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
// Higher-order functions are functions that either take a function as an argument or return a function.
// Recursion:
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Output: 120
// Recursion is a technique where a function calls itself in order to solve a problem.
// Requires a base case to prevent infinite recursion.
// Function Scope and Lexical Scope:
function outer() {
    const outerVar = "I'm outside!";
    
    function inner() {
        const innerVar = "I'm inside!";
        console.log(outerVar); // Access outerVar from the outer scope
    }
    
    inner();
    console.log(innerVar); // Error: innerVar is not defined in this scope
}

outer();
// Function Scope: Variables declared inside