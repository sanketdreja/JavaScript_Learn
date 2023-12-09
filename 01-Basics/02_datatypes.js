"use strict"; //treat all js code as newer version  
// console.log(3+20);


let name="abc";
let age=18;
let isLoggedIn=true;

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

let score="33";

// console.log(typeof score);
// console.log(typeof (score));

let numberScore=Number(score);
// console.log(typeof numberScore);

/*
    "33" => 33
    "33abc"=>NaN
    true=1  false=0;

*/

let loggedInVariable=1;
let booleanLoggedInVariable= Boolean(loggedInVariable);

// console.log(booleanLoggedInVariable);


/*
    when loggedInVariable=1 > output:- true
    when loggedInVariable=0 > output:- false

    when loggedInVariable="" > output:- false
    when loggedInVariable="abc" > output:- true

    */


    let someNumber=33;
    let stringNumber=String(someNumber);
    console.log(stringNumber);
    console.log(typeof stringNumber);
