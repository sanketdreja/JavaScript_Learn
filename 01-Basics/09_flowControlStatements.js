// Flow control in JavaScript involves managing the order of execution of statements in your code. This is crucial for building dynamic and responsive applications. Here, I'll explain the key aspects of flow control in JavaScript.

// Conditional Statements:
// 1. if Statement:
// The if statement allows you to execute a block of code if a specified condition is true.
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}





// 2. else Statement:
// The else statement allows you to execute a block of code if the condition in the if statement is false.
let y = 3;
if (y > 5) {
    console.log("y is greater than 5");
} else {
    console.log("y is not greater than 5");
}





// 3. else if Statement:
// The else if statement provides an additional condition to check if the first if condition is false.
let z = 3;
if (z > 5) {
    console.log("z is greater than 5");
} else if (z === 5) {
    console.log("z is equal to 5");
} else {
    console.log("z is less than 5");
}





// Looping Statements:
// 1. for Loop:
// The for loop is used to repeatedly execute a block of code as long as a condition is true.
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// 2. while Loop:
// The while loop continues to execute a block of code as long as the specified condition is true.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}



// 3. do-while Loop:
// Similar to the while loop, but it ensures that the block of code is executed at least once, even if the condition is initially false.
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);




// 4. for...in Loop:
// Iterates over the enumerable properties of an object.
const person = { name: "John", age: 30, job: "Developer" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}





// 5. for...of Loop:
// Introduced in ES6, it iterates over iterable objects like arrays and strings.
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}




// Control Statements:
// 1. break Statement:
// Exits the loop or switch statement.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}



// 2. continue Statement:
// Skips the current iteration and continues with the next one.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// 3. switch Statement:
// Used to perform different actions based on different conditions.
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    // ... other cases
    default:
        console.log("It's another day");
}
// These are the fundamental aspects of flow control in JavaScript. Understanding how to use conditional statements, loops, and control statements is essential for writing efficient and logical JavaScript code



//=========================================================================================================================

// Certainly! Let's compile the data in detail with examples for each topic.

// 1. Basic for Loop:
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}
// 2. Nested for Loops:
for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
       console.log(`${i} * ${j} = ${i * j}`);
   }
}
// 3. for Loop with Arrays:
let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
// 4. break and continue:
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}
// 5. while Loop:
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}
// 6. do-while Loop:
let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
// 7. for...of Loop:
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
// 8. for...in Loop:
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// 9. forEach Loop:
const programming = ["js", "rb", "py", "java", "cpp"];
programming.forEach(function (val) {
    console.log(val);
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});




//================================================================================================================
// 1. forEach Method:
const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    console.log(item);
    // Note: forEach doesn't return a new array.
});

console.log(values); // Output: undefined
// 2. filter Method:
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);

console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]
// 3. filter Method with Array of Objects:
const books = [
    // ... (array of book objects)
];

let userBooks = books.filter((bk) => bk.genre === 'History');

userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History");

console.log(userBooks); // Output: Books meeting the filter criteria
// 4. map Method:
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = myNumers.map((num) => num * 10 + 1).filter((num) => num >= 40);

console.log(newNumber); // Output: [41, 51, 61, 71, 81]
// 5. reduce Method:
const myNumns = [1, 2, 3];

const myTotal = myNumns.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal); // Output: 6

const shoppingCart = [
    // ... (array of item objects)
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: Sum of prices in the shoppingCart

JavaScript, the switch statement is a control flow statement that is used to evaluate an expression against multiple possible case values. It provides a way to execute different code blocks based on the value of the expression. The basic syntax of the switch statement looks like this:

javascript
Copy code
switch (expression) {
  case value1:
    // code to be executed if expression matches value1
    break;
  case value2:
    // code to be executed if expression matches value2
    break;
  // additional cases as needed
  default:
    // code to be executed if none of the cases match expression
}
Here's a detailed explanation of the different components of the switch statement:

switch keyword: This initiates the switch statement.

expression: The value that you want to compare against the different cases. The result of this expression is compared with the values in each case.

case value: Each case represents a possible value that expression might have. If the expression matches a case value, the code block associated with that case is executed. If there is no match, the program moves to the next case.

break statement: This is used to exit the switch statement after a case has been matched and its code block executed. If you omit the break statement, the program will continue to execute the code for subsequent cases even if their conditions are not met.

default: This is an optional case that is executed if none of the previous cases match the value of the expression. It is similar to the else statement in an if-else structure.

Here's an example:

javascript
Copy code
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week!");
    break;
  case "Friday":
    console.log("TGIF! It's Friday!");
    break;
  default:
    console.log("It's a regular day.");
}
In this example, if day is "Monday," it will print "It's the start of the week!" If day is "Friday," it will print "TGIF! It's Friday!" Otherwise, it will print "It's a regular day."

Keep in mind that the switch statement can be a cleaner and more readable alternative to a series of if-else statements when you have multiple conditions to check against a single value.

    In JavaScript, values are broadly classified as either "truthy" or "falsy" based on their inherent boolean evaluation. When a non-boolean value is used in a boolean context (e.g., in an if statement), JavaScript will implicitly convert the value to a boolean to determine its truthiness or falsiness. Understanding truthy and falsy values is important when working with conditions and logical operations.

Here's a breakdown of truthy and falsy values in JavaScript:

Truthy Values:
A value is considered truthy if it coerces to true when used in a boolean context. The following values are truthy:

Non-empty Strings: Any non-empty string is truthy.

javascript
Copy code
if ("Hello") {
    // This block will be executed
}
Non-zero Numbers: Any non-zero number is truthy.

javascript
Copy code
if (42) {
    // This block will be executed
}
Objects: All objects, including arrays and functions, are truthy.

javascript
Copy code
if ({ key: 'value' }) {
    // This block will be executed
}
Arrays: Non-empty arrays are truthy.

javascript
Copy code
if ([1, 2, 3]) {
    // This block will be executed
}
Functions: Any defined function is truthy.

javascript
Copy code
function myFunction() {
    return true;
}

if (myFunction) {
    // This block will be executed
}
Truthy Expressions: Expressions that evaluate to true.

javascript
Copy code
if (5 > 3) {
    // This block will be executed
}
Falsy Values:
A value is considered falsy if it coerces to false when used in a boolean context. The following values are falsy:

Empty Strings: An empty string is falsy.

javascript
Copy code
if ("") {
    // This block will NOT be executed
}
Zero: The number zero is falsy.

javascript
Copy code
if (0) {
    // This block will NOT be executed
}
null: The null value is falsy.

javascript
Copy code
if (null) {
    // This block will NOT be executed
}
undefined: The undefined value is falsy.

javascript
Copy code
if (undefined) {
    // This block will NOT be executed
}
NaN: The Not-a-Number value is falsy.

javascript
Copy code
if (NaN) {
    // This block will NOT be executed
}
Falsy Expressions: Expressions that evaluate to false.

javascript
Copy code
if (10 < 5) {
    // This block will NOT be executed
}
Understanding truthy and falsy values is crucial when working with conditions and logical operators, as it allows you to write more concise and readable code. Keep in mind that the boolean evaluation of values may vary in different contexts, and it's important to be aware of potential coercion when using non-boolean values in conditions




