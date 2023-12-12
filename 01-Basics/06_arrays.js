// Certainly! Arrays in JavaScript are a type of object used for storing and manipulating a collection of values. They are versatile and widely used in JavaScript programming. Here are the key aspects of arrays in JavaScript:

// 1. Creating Arrays:
// Arrays can be created using array literals or the Array constructor.

// Array Literal:




let fruits = ['apple', 'orange', 'banana'];


// Array Constructor:
let colors = new Array('red', 'green', 'blue');


// 2. Array Elements:
// Elements in an array can be of any data type, and different elements in the same array can have different data types.
let mixedArray = [1, 'hello', true, { key: 'value' }, [1, 2, 3]];

// 3. Accessing Elements:
// Array elements are accessed using zero-based indices.
// let fruits = ['apple', 'orange', 'banana'];
console.log(fruits[0]); // 'apple'


// 4. Array Length:
// The length property returns the number of elements in an array.
console.log(fruits.length); // 3


// 5. Modifying Arrays:
// Arrays are mutable, meaning you can change their contents by adding, modifying, or removing elements.

// Adding Elements:
fruits.push('grape'); // Adds 'grape' to the end
fruits.unshift('kiwi'); // Adds 'kiwi' to the beginning


// Removing Elements:
fruits.pop(); // Removes the last element
fruits.shift(); // Removes the first element



// Modifying Elements:
fruits[1] = 'pear'; // Modifies the element at index 1


// 6. Iterating Over Arrays:
// Arrays can be traversed using loops, such as for and forEach.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function (fruit) {
  console.log(fruit);
});


// 7. Array Methods:
// JavaScript provides a variety of built-in methods for working with arrays.

// Common Array Methods:
// push(), pop(): Add/remove elements from the end.
// unshift(), shift(): Add/remove elements from the beginning.
// splice(): Add/remove elements at a specified index.
// concat(): Concatenate arrays.
// slice(): Extract a portion of an array.
// indexOf(), lastIndexOf(): Find the index of an element.
// includes(): Check if an array contains a specific element.





// 8. Multidimensional Arrays:
// Arrays can contain other arrays, creating multidimensional arrays.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


// 9. Array Destructuring:
// Array destructuring allows you to extract values from arrays and assign them to variables in a concise way.
let [first, second, third] = fruits;
console.log(first); // 'apple'
console.log(second); // 'orange'



// 10. Array Spread Operator:
// The spread operator (...) can be used to create a new array by combining existing arrays.
let moreFruits = ['grape', 'kiwi'];
let allFruits = [...fruits, ...moreFruits];
// Arrays are fundamental to JavaScript and are used in various scenarios, from simple lists to complex data structures. Understanding how to work with arrays is crucial for effective JavaScript programming.


//=================================================================================================================================
// 1. Array Creation:
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);
// myArr: An array literal with numeric values.
// myHeros: An array of strings.
// myArr2: An array created using the Array constructor.



// 2. Accessing and Modifying Elements:
console.log(myArr[1]); // Accessing the element at index 1
myArr.push(6, 7); // Adding elements to the end
myArr.pop(); // Removing the last element
myArr.unshift(9); // Adding an element to the beginning
myArr.shift(); // Removing the first element



// 3. Array Methods:
console.log(myArr.includes(9)); // Checking if array includes 9
console.log(myArr.indexOf(3)); // Finding the index of element 3


// 4. Joining and Splitting Arrays:
const newArr = myArr.join(); // Joining array elements into a string
console.log(newArr);


// 5. Slice and Splice:
const myn1 = myArr.slice(1, 3); // Extracting elements from index 1 to 2 (not including 3)
const myn2 = myArr.splice(1, 3); // Removing elements starting from index 1, and removing 3 elements

console.log("A ", myArr);
console.log(myn1);
console.log("B ", myArr);
console.log("C ", myArr);
console.log(myn2);


// 6. Concatenation:
const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros); // This adds the entire array as a single element
// console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(dcHeros); // Concatenating arrays
console.log(allHeros);

// Using spread operator to concatenate arrays
const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);





// 7. Nested Arrays and Flattening:
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity); // Flattening nested arrays
console.log(realAnotherArray);




// 8. Array Utility Methods:
console.log(Array.isArray("Hitesh")); // Checking if the argument is an array
console.log(Array.from("Hitesh")); // Creating an array from a string
console.log(Array.from({ name: "hitesh" })); // Creating an array from an object



// 9. Array.of:
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Creating an array from individual values


/*

Here is a list of some commonly used methods of the Array object in JavaScript:

Manipulation Methods:

concat(...arrays): Combines arrays and returns a new array.
join(separator): Joins all elements into a string using the specified separator.
pop(): Removes and returns the last element.
push(element1, ..., elementN): Adds elements to the end of the array.
shift(): Removes and returns the first element.
unshift(element1, ..., elementN): Adds elements to the beginning of the array.
reverse(): Reverses the order of elements.
slice(start, end): Extracts a section of the array.
Iteration Methods:

forEach(callback(currentValue, index, array), thisArg): Calls a function for each element.
map(callback(currentValue, index, array), thisArg): Creates a new array by applying a function to each element.
filter(callback(element, index, array), thisArg): Creates a new array with elements that pass a test.
reduce(callback(accumulator, currentValue, index, array), initialValue): Applies a function to reduce the array to a single value.
some(callback(element, index, array), thisArg): Tests whether at least one element passes the test.
every(callback(element, index, array), thisArg): Tests whether all elements pass the test.
Searching and Sorting Methods:

indexOf(searchElement, fromIndex): Returns the first index at which a given element is found.
lastIndexOf(searchElement, fromIndex): Returns the last index at which a given element is found.
includes(element, fromIndex): Determines whether an array includes a certain element.
sort(compareFunction): Sorts the elements of an array.
find(callback(element, index, array), thisArg): Returns the first element that passes a test.
findIndex(callback(element, index, array), thisArg): Returns the index of the first element that passes a test.
Conversion Methods:

toString(): Returns a string representing the array.
toLocaleString(locales, options): Returns a localized string representing the array.
join(separator): Joins all elements into a string using the specified separator.
Mutating Methods:

splice(start, deleteCount, item1, item2, ...): Changes the contents of an array by removing or replacing existing elements.
copyWithin(target, start, end): Copies a sequence of array elements to another position in the array.
fill(value, start, end): Fills all the elements of an array with a static value.
Accessor Methods:

concat(...arrays): Combines arrays and returns a new array.
slice(start, end): Extracts a section of the array.
includes(element, fromIndex): Determines whether an array includes a certain element.
Length-related Methods:

length: Property representing the number of elements in an array.
push(element1, ..., elementN): Adds elements to the end of the array.
pop(): Removes and returns the last element.
shift(): Removes and returns the first element.
unshift(element1, ..., elementN): Adds elements to the beginning of the array.
*/
// This code covers various aspects of array manipulation, including creation, modification, joining, splitting, concatenation, flattening nested arrays, and using utility methods. Understanding these operations is essential for working effectively with arrays in JavaScript
