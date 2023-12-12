/*
JavaScript is a dynamically-typed language, meaning that variables are not bound to a specific data type at the time of declaration but can hold values of any type during the execution of the program. Here are the primary data types in JavaScript:

1. Primitive Data Types:
These are the basic building blocks of data.
a. Number:
Represents numeric values, including integers and floating-point numbers.
*/


let numberOne = 42;       // integer
let floatNum = 3.14; // floating-point number
/*
b. String:
Represents a sequence of characters (text).
*/

let stringOne = "Hello, World!";
/*c. Boolean:
Represents either true or false.
*/

let isTrue = true;
let isFalse = false;
/*
d. Null:
Represents the intentional absence of any object value.
*/


let nullValue = null;
/*e. Undefined:
Represents an uninitialized variable or a variable without a value.
*/


let undefinedValue;
/* f. BigInt:
Represents integers with arbitrary precision. */

let bigIntNum = 9007199254740992n;
// The n at the end indicates it's a BigInt.
/*
2. Composite Data Types:
These are composed of multiple primitive data types.
a. Object:
Represents a collection of key-value pairs. */


let person = {
  name: "John",
  age: 30,
  city: "New York"
};
/**b. Array:
Represents an ordered list of values.
 */

let colors = ["red", "green", "blue"];
/*3. Special Data Types:
a. Symbol:
Represents a unique identifier.*/


let sym = Symbol("uniqueSymbol");
/**4. Derived Data Types:
These are objects that are derived from the primitive data types.
a. Function:
Represents a reusable set of statements. */

function add(a, b) {
  return a + b;
}
/**b. Date:
Represents a date and time.
 */

let today = new Date();
/**c. RegExp:
Represents a regular expression for pattern matching.

 */
let regex = /[a-z]+/;
/**Type Coercion:
JavaScript is loosely typed, which means that it can perform type coercion (automatic conversion of one data type to another) during operations. */


let i = 5;
let j = "10";
let result = x + y; // result is the string "510"
// In this example, the number 5 is implicitly converted to a string and concatenated with the string "10".


 //================================================================================================================================
"use strict"; // treat all JS code as newer version
/**This is a directive that enables strict mode in JavaScript. Strict mode helps catch common coding errors and prevents the use of certain "bad" practices. For instance, it makes assignments to undeclared variables throw an error and disables some features that are prone to errors. */

// alert( 3 + 3) // we are using nodejs, not a browser
/**This line is a commented-out alert statement. The alert() function is commonly used in browsers to display a dialog box with a specified message. Since you're using Node.js (which doesn't have a UI), this line is commented out to avoid causing issues. */

console.log(3 + 3) // code readability should be high
/**This line logs the result of the addition of 3 and 3 to the console. The code is formatted across multiple lines for readability, which is a good practice for maintaining clean and understandable code. */

console.log("Hitesh")
// This line logs the string "Hitesh" to the console.

let name = "hitesh"
let age1 = 18
let isLoggedIn2 = false
let state;
/** These lines declare and initialize several variables:

name is assigned the string value "hitesh".
age is assigned the number value 18.
isLoggedIn is assigned the boolean value false.
state is declared but not assigned a value, so it is implicitly assigned the value undefined.
 */


// These are comments that briefly describe various data types in JavaScript.
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique
// object


console.log(typeof undefined); // undefined
console.log(typeof null); // object
/**These lines use typeof operator to log the type of undefined and null to the console. Note that it prints "object" for null, which is a known quirk in JavaScript. The typeof null returning "object" is considered a mistake in the language, but it's kept for backward compatibility. */


//================================================================================================================================


// Type conversion, also known as type casting or coercion, refers to the process of converting a value from one data type to another in JavaScript. There are two types of type conversion: implicit (automatic) and explicit (manual).

// 1. Implicit Type Conversion:
// JavaScript automatically performs implicit type conversion when operators expect values of a certain type. This is also known as type coercion. Here are some examples:


let num1 = 5;          // Number
let strOne = "10";       // String

let result1 = num + str; // JavaScript converts num to a string and performs string concatenation
console.log(result);    // "510"
/**In this example, the + operator is used for both addition and string concatenation. JavaScript automatically converts the number 5 to a string before performing the concatenation.




2. Explicit Type Conversion:
Developers can manually convert values from one type to another using explicit type conversion. This can be done using functions or methods provided by JavaScript or by using the operators.

a. String Conversion:
Using the String() function: */

let num2 = 42;
let strTwo = String(num); // Explicit conversion to string
/** Alternatively, you can use the toString() method:
 */

let num3 = 42;
let strThree = num.toString(); // Using toString() method
/**b. Number Conversion:
Using the Number() function: */


let str4 = "42";
let num4 = Number(str); // Explicit conversion to number
// Using the parseInt() or parseFloat() functions:


let str5 = "42.5";
let num5 = parseInt(str);    // Converts to integer (42)
let floatNum5 = parseFloat(str); // Converts to float (42.5)
/** c. Boolean Conversion:
Using the Boolean() function: */

let value = "hello";
let bool = Boolean(value); // Explicit conversion to boolean
/**Values that are considered "falsy" when converted to boolean include 0, "", null, undefined, and NaN. All other values are considered "truthy."

Common Scenarios for Type Conversion:
Concatenating Strings and Numbers: */


let num6 = 5;
let str6 = "The value is: " + num; // Implicit conversion of num to string
// Comparing Values:


let num7 = 10;
let str7 = "10";

if (num7 == str7) {
  // Implicit conversion for comparison (true)
}
/**
 * The == operator performs type coercion. If the operands are of different types, JavaScript tries to convert one or both of the operands to an appropriate type.
 User Input: 
 */


let userInput = prompt("Enter a number:");
let num8 = Number(userInput); // Explicit conversion of user input to number
// Mathematical Operations:


let str9 = "5";
let num9 = str * 2; // Implicit conversion of str to number for multiplication




//================================================================================================================================



/** Operators in JavaScript are symbols or keywords that perform operations on operands. Operands can be values or variables. Here's an overview of the main types of operators in JavaScript:

1. Arithmetic Operators:
Perform arithmetic operations on numbers.
 */
let a1 = 5;
let b1 = 2;

console.log(a1 + b1); // Addition: 7
console.log(a1 - b1); // Subtraction: 3
console.log(a1 * b1); // Multiplication: 10
console.log(a1 / b1); // Division: 2.5
console.log(a1 % b1); // Modulus (remainder): 1
console.log(a1 ** b1); // Exponentiation: 25
/** 2. Comparison Operators:
Compare two values and return a boolean result.
 */
let x = 5;
let y = 10;

console.log(x == y); // Equal to: false
console.log(x != y); // Not equal to: true
console.log(x > y);  // Greater than: false
console.log(x < y);  // Less than: true
console.log(x >= y); // Greater than or equal to: false
console.log(x <= y); // Less than or equal to: true
/** 3. Logical Operators:
Combine or manipulate boolean values.
 */
let p = true;
let q = false;

console.log(p && q); // Logical AND: false
console.log(p || q); // Logical OR: true
console.log(!p);     // Logical NOT: false
/** 4. Assignment Operators:
Assign values to variables. */

let numberTwo = 10;
numberTwo += 5; // Addition assignment: numberTwo = numberTwo + 5
numberTwo -= 3; // Subtraction assignment: numberTwo = numberTwo - 3
numberTwo *= 2; // Multiplication assignment: numberTwo = numberTwo * 2
numberTwo /= 4; // Division assignment: numberTwo = numberTwo / 4
/** 5. Unary Operators:
Operate on a single operand.
 */
let m = 5;
console.log(-m);  // Unary minus: -5
console.log(+m);  // Unary plus: 5 (no change)
console.log(++m); // Prefix increment: 6
console.log(m--); // Postfix decrement: 6 (then a becomes 5)
/** 6. Ternary (Conditional) Operator:
A shorthand for an if-else statement.
 */
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult
/** 7. String Concatenation Operator:
Concatenates two strings.
 */
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe
/** 8. Typeof Operator:
Returns a string indicating the type of a variable.
 */
let num = 42;
let str = "Hello";
console.log(typeof num); // number
console.log(typeof str); // string
/** 9. Bitwise Operators:
Perform bitwise operations on integers.
 */
let a = 5; // binary: 0101
let b = 3; // binary: 0011

console.log(a & b); // Bitwise AND: 1
console.log(a | b); // Bitwise OR: 7
console.log(a ^ b); // Bitwise XOR: 6
console.log(~a);    // Bitwise NOT: -6
console.log(a << 1); // Left shift: 10
console.log(a >> 1); // Right shift: 2




//================================================================================================================================
// Variable Declaration and Initialization:

let score = "hitesh";
/**Declares a variable score and initializes it with the string value "hitesh".
Type Conversion - Number:
 */
let valueInNumber = Number(score);
/** Uses the Number() function to convert the string value "hitesh" to a number. Since "hitesh" is not a valid representation of a number, valueInNumber will be assigned the special value NaN (Not a Number).
 */




// Type Conversion - Boolean:
let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
/** Uses the Boolean() function to convert the string value "hitesh" to a boolean. Any non-empty string is considered truthy, so booleanIsLoggedIn will be true. */


// Type Conversion - String:

let someNumber = 33;
let stringNumber = String(someNumber);
/*
Uses the String() function to convert the number 33 to a string. The variable stringNumber will hold the string value "33".
 */





// Operations:

let negValue = -value;
// Negates the value of value. If value is 3, then negValue will be -3.

let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
// Concatenates two strings, resulting in the value of str3 being "hello hitesh".
// Concatenation vs Addition:

console.log("1" + 2);     // "12"
console.log(1 + "2");     // "12"
console.log("1" + 2 + 2);  // "122"
console.log(1 + 2 + "2");  // "32"
/** JavaScript performs string concatenation when one of the operands is a string using the + operator.
Mathematical Operations:

*/
console.log(2 + 2);       // 4
console.log(2 - 2);       // 0
console.log(2 * 2);       // 4
console.log(2 ** 3);      // 8 (exponentiation)
console.log(2 / 3);       // 0.666...
console.log(2 % 3);       // 2 (remainder)
/** Demonstrates various mathematical operations.
Unary Operators:
 */
console.log(+true);       // 1 (unary plus)
console.log(+ "");        // 0 (unary plus)
/** Unary plus converts its operand to a number.
Increment Operator: */

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);  // 101
// Initializes num1, num2, and num3 to the value 4 and increments gameCounter using the prefix increment operator ++.
// Link to Study:https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



//==============================================================================================================================





