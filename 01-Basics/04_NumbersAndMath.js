// Numbers in JavaScript:
// JavaScript has a single numeric data type, which is a floating-point number. This means that all numbers in JavaScript, whether integer or floating-point, are represented as 64-bit floating-point values.

// Number Literals:
// You can represent numbers in JavaScript using literals:

let integerNumber = 42;        // Integer
let floatingPointNumber = 3.14; // Floating-point



// Mathematical Operations:
// JavaScript supports various mathematical operations:

let sum = 5 + 3;       // Addition
let difference = 7 - 2; // Subtraction
let product = 4 * 6;    // Multiplication
let quotient = 8 / 2;   // Division
let remainder = 9 % 4;  // Modulus (remainder)
let power = 2 ** 3;     // Exponentiation



// NaN (Not a Number):
// If a mathematical operation results in an undefined or unrepresentable value, JavaScript returns NaN:


let resultNaN = 0 / 0; // NaN



// Infinity and -Infinity:
// JavaScript also has positive infinity and negative infinity:


let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;



// Type Coercion:
// JavaScript performs automatic type coercion when different types are involved in operations:

let x = 5;
let y = "10";
let result = x + y; // result is the string "510"



// Math Object in JavaScript:
// The Math object in JavaScript provides a set of properties and methods for mathematical operations. It is not a constructor, so you don't create instances of it.

// Common Math Methods:
Math.abs(-5);        // Absolute value: 5
Math.round(4.7);      // Round to the nearest integer: 5
Math.floor(4.7);      // Round down to the nearest integer: 4
Math.ceil(4.3);       // Round up to the nearest integer: 5
Math.random();        // Random number between 0 (inclusive) and 1 (exclusive)
Math.max(1, 2, 3);     // Maximum value: 3
Math.min(1, 2, 3);     // Minimum value: 1
Math.pow(2, 3);        // Exponentiation: 8
Math.sqrt(9);          // Square root: 3
Math.log(10);          // Natural logarithm: 2.302585092994046
Math.exp(2);           // Exponential function: 7.3890560989306495
Math.sin(Math.PI/2);   // Sine function: 1
Math.cos(Math.PI);     // Cosine function: -1
Math.tan(Math.PI/4);   // Tangent function: 1


// Notes:
// Be cautious with floating-point arithmetic, as it can lead to precision issues.
// Use parseInt or parseFloat for explicit conversion of strings to numbers.
// Always check for NaN when performing mathematical operations with user input.
// These features make JavaScript suitable for various numeric computations and mathematical tasks.


//===============================================================================================================================


// 1. Declaration and Logging of score


const score = 400;

//: Declares a constant variable score with the value 400.
// console.log(score);: This line is commented out. If uncommented, it would log the value of score to the console.
// 2. Creation and Operations on balance


const balance = new Number(100);
//: Creates a Number object with a value of 100. Note that using new Number() is less common; usually, primitive number types are used.
// console.log(balance);: This line is commented out. If uncommented, it would log the Number object to the console.
// console.log(balance.toString().length);: If uncommented, it would log the length of the string representation of balance.
// console.log(balance.toFixed(1));: If uncommented, it would log the string representation of balance with one decimal place.





// 3. Operations on otherNumber

const otherNumber = 123.8966;
 //Declares a constant variable otherNumber with the value 123.8966.
// console.log(otherNumber.toPrecision(4));: If uncommented, it would log the string representation of otherNumber with precision of 4.





// 4. Formatting hundreds using toLocaleString



const hundreds = 1000000;
//: Declares a constant variable hundreds with the value 1000000.
// console.log(hundreds.toLocaleString('en-IN'));: If uncommented, it would log the string representation of hundreds formatted with a comma as a thousand separator.




// 5. Math Operations



// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(Math);: If uncommented, it would log the entire Math object, which contains various mathematical methods.
// Other console.log() statements perform operations using the Math object, such as absolute value, rounding, ceiling, flooring, finding minimum and maximum, and generating random numbers within specified ranges.
