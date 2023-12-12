/*

In JavaScript, a variable is a symbolic name (an identifier) that is associated with a value.
 Variables are used to store and manipulate data in a program. 
  Here are the key aspects of JavaScript variables:

  Declaration:

   Variables in JavaScript are declared using the var, let, or const keyword.
    var was traditionally used but has some quirks and is now mostly replaced by let and const.


*/

let myVariable; // Declaration using let
const pi = 3.14; // Declaration and initialization using const

/*Initialization:

Variables can be declared and initialized at the same time.*/

let myVariable1 = 10; // Declaration and initialization
/*
  Data Types:
JavaScript is dynamically typed, meaning you don't need to specify the data type explicitly.
 The interpreter determines the type at runtime.
Common data types include numbers, strings, booleans, objects, arrays, functions, etc.

*/


let num = 42;          // Number
let str = "Hello";     // String
let bool = true;       // Boolean
let arr = [1, 2, 3];    // Array
let obj = { key: 'value' };  // Object
/*Scope:

Variables in JavaScript have function scope or block scope, depending on whether they are declared using var, let, or const.

Variables declared with var are function-scoped, while those declared with let and const are block-scoped.*/


if (true) {
  var x = 10; // Function-scoped
  let y = 20; // Block-scoped
}

/* 

Hoisting:

Variables declared with var are hoisted to the top of their scope, 
which means they are moved to the top during the compilation phase.
Variables declared with let and const are also hoisted but not initialized until the actual declaration statement is reached.
 */

console.log(a); // undefined (hoisted but not initialized)
var a = 5;

console.log(b); // ReferenceError (not hoisted)
let b = 10;

/* 

Mutable vs. Immutable:

Variables declared with var and let are mutable, meaning their values can be changed.
Variables declared with const are immutable, meaning their values cannot be re-assigned once initialized.

*/

let mutableVar = 5;
mutableVar = 10; // Valid

const immutableVar = 5;
// immutableVar = 10; // Error





const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;


/*
  const accountId: Declares a constant variable accountId with a value of 144553. Constants cannot be reassigned once they are initialized.

let accountEmail: Declares a variable accountEmail using the let keyword and assigns it the initial value of "hitesh@google.com". This variable can be reassigned later.

var accountPassword: Declares a variable accountPassword using the var keyword and assigns it the initial value of "12345". 
Unlike const and let, variables declared with var are function-scoped, which means they are not restricted to block scope.

accountCity = "Jaipur": Assigns the value "Jaipur" to a variable accountCity. Note that the variable is not explicitly declared using var, let, or const. In JavaScript, if a variable is not declared using any of these keywords, it becomes a global variable. This is generally not recommended, as it can lead to unexpected behavior.

let accountState;: Declares a variable accountState without initializing it. This variable can be assigned a value later.

*/





// accountId = 2 // not allowed

/*
This line is commented out, but it's attempting to reassign a value to the constant variable accountId, which is not allowed. Constants, as the name suggests, cannot be reassigned.
*/


accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";
/*
These lines reassign new values to the variables accountEmail, accountPassword, and accountCity.
*/


console.log(accountId);
// Outputs the value of accountId to the console.


/*
Prefer not to use var because of issue in block scope and functional scope.
This is a comment suggesting that using var is not preferred due to issues related to block scope and functional scope.
The comment likely refers to the fact that variables declared with var are function-scoped and can lead to unexpected behavior when used inside blocks.
 
*/




console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
Outputs a table to the console with the values of the specified variables. The values are displayed in a tabular format for easy inspection.

In summary, the code declares and initializes variables using const, let, and var, and then reassigns values to some of them. 
It also includes a comment suggesting a preference for not using var due to scoping issues.
 Finally, it prints a table to the console displaying the values of the specified variables.
*/





