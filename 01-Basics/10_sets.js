
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

//========================================================================

// In JavaScript, the Set object has several methods for adding, removing, and manipulating elements. Here is a list of the commonly used methods for a Set:

// add(value): Adds a new element with the specified value to the Set. Returns the Set object.

let mySet = new Set();
mySet.add(1);
// delete(value): Removes the element with the specified value from the Set. Returns true if an element with the specified value was found and removed; otherwise, false.

mySet.delete(1);
// has(value): Returns a boolean indicating whether the Set contains a value or not.

console.log(mySet.has(1)); // false
// clear(): Removes all elements from the Set.

mySet.clear();
// size: Returns the number of elements in the Set.

console.log(mySet.size);
// forEach(callbackFn, thisArg): Calls a callback function once for each element in the Set, in insertion order.

mySet.forEach((value, key, set) => {
    console.log(value);
});
// keys(): Returns an iterator of the keys in the Set. (This is the same as the values() method.)

let keysIterator = mySet.keys();
for (let key of keysIterator) {
    console.log(key);
}
// values(): Returns an iterator of the values in the Set.

let valuesIterator = mySet.values();
for (let value of valuesIterator) {
    console.log(value);
}
// entries(): Returns an iterator of entries (key-value pairs) in the Set. Each entry is an array with two elements: the key and the value.

let entriesIterator = mySet.entries();
for (let entry of entriesIterator) {
    console.log(entry[0], entry[1]);
}
// These methods provide a variety of ways to interact with and manipulate Set objects in JavaScript.

