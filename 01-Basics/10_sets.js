
// In JavaScript, the Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references. The key characteristic of a Set is that it only allows unique values, and it automatically eliminates duplicates. This makes it useful in scenarios where you need to store a collection of unique items.

// Here's how you can create, manipulate, and use a Set in JavaScript:

// Creating a Set:
// You can create a Set by using the Set constructor. Here's an example:


// Creating an empty Set
let mySet = new Set();

// Creating a Set with initial values
let anotherSet = new Set([1, 2, 3, 4, 5]);
// Adding and Removing Elements:
// To add an element to a Set, you can use the add method. To remove an element, you can use the delete method.


mySet.add(1);
mySet.add(2);
mySet.add(3);

mySet.delete(2); // Removes the value 2 from the Set
// Checking if an Element Exists:
// You can use the has method to check if a specific value exists in the Set.


console.log(mySet.has(1)); // true
console.log(mySet.has(2)); // false
// Getting the Size of the Set:
// The size property can be used to get the number of elements in a Set.


console.log(mySet.size); // 2
// Iterating Over a Set:
// You can iterate over the elements of a Set using the forEach method or using the for...of loop.


mySet.forEach(value => {
    console.log(value);
});

// Using for...of loop
for (let value of mySet) {
    console.log(value);
}
// Converting Set to Array:
// You can convert a Set to an array using the Array.from method or using the spread operator (...).


let myArray = Array.from(mySet);
// or
let myArray = [...mySet];
// Set Operations:
// Sets support various set operations like union, intersection, and difference. Here's an example of the union of two sets:


let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);

let unionSet = new Set([...setA, ...setB]);
console.log(unionSet); // Set { 1, 2, 3, 4, 5 }
// Remember that sets only store unique values, so the resulting unionSet won't contain duplicate values.

// This is a basic overview of working with Sets in JavaScript. Sets are a versatile and efficient way to handle collections of unique values in your code.