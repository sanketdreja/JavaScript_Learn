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






