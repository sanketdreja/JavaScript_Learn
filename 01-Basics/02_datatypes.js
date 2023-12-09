"use strict"; //treat all js code as newer version
// console.log(3+20);

let name = "abc";
let age = 18;
let isLoggedIn = true;

/*
    number =>  2 to the power of 53 minus 1 2^53-1 values
    bigint = > usually not used unless extremely big number;
    string="";
    boolean => true /false;
    null => standalone value 
    undefined =>
    symbol => for Unique values mostly used in react 


    object =>
*/

// console.log(typeof undefined);// output:-undefined (its a stand alone value )
// console.log(typeof null);// output:-object

// typeof is operator  use to get the type of the value;

// Converstion operation

let score = "33";

// console.log(typeof score);
// console.log(typeof (score));

let numberScore = Number(score);
// console.log(typeof numberScore);

/*
    "33" => 33
    "33abc"=>NaN
    true=1  false=0;

*/

let loggedInVariable = 1;
let booleanLoggedInVariable = Boolean(loggedInVariable);

// console.log(booleanLoggedInVariable);

/*
    when loggedInVariable=1 > output:- true
    when loggedInVariable=0 > output:- false

    when loggedInVariable="" > output:- false
    when loggedInVariable="abc" > output:- true

    */

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ==============Operations=========================

let value = 3;
let negValue = -value;
// console.log(negValue);

// Basic operation - arithmetic
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);

let str1 = "Hello ";
let str2 = "World";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+"2");

// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log(true);//true
// console.log(+true); // 1
// console.log(+""); // 0

let gameCounter = 100;
// console.log(gameCounter++);//100
// console.log(++gameCounter);//102

let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// Comparator operator

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);

// strictly avoid comparsion of different datatypes

// console.log("2" > 1);//true
// console.log("02" > 1); //true

// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//true


// console.log(undefined>0);//false
// console.log(undefined==0);//false
// console.log(undefined>=0);//false


// the reason is that an equality check == and comparison > < >= <= work differently
// comparison converts null to number  ,treating as 0.
// that why null>=0 is true and null> 0 is false

// === strict check that is are the value equaly and of same dataTypes

// console.log("2"===2);//false

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

