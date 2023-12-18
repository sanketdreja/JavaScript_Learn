// In JavaScript, a Map is a built-in object that allows you to store key-value pairs, where both the keys and values can be of any data type. Unlike the simpler object literal notation ({}), a Map provides a more flexible and feature-rich way to manage key-value relationships. Here's a detailed explanation of using Map in JavaScript:

// Creating a Map:
// You can create a Map using the Map constructor, and you can pass an iterable (like an array) containing key-value pairs during the creation:

// Creating an empty Map
let myMap = new Map();

// Creating a Map with initial values
let anotherMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
// Adding and Retrieving Values:
// You can use the set method to add or update key-value pairs and the get method to retrieve the value associated with a specific key:

myMap.set("name", "John");
myMap.set(42, "Answer to the Ultimate Question");
let value = myMap.get("name"); // Retrieves the value associated with the key 'name'
console.log(value); // 'John'
// Checking if a Key Exists:
// The has method can be used to check if a key exists in the Map:

console.log(myMap.has("name")); // true
console.log(myMap.has("age")); // false
// Deleting Key-Value Pairs:
// You can remove a key-value pair from a Map using the delete method:

myMap.delete("name");
// Getting the Size of the Map:
// The size property can be used to get the number of key-value pairs in a Map:

console.log(myMap.size); // Returns the number of key-value pairs in the Map
// Iterating Over a Map:
// You can iterate over the entries, keys, or values of a Map using the forEach method or using the for...of loop:

// Iterating over entries
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Using for...of loop to iterate over keys or values
for (let key of myMap.keys()) {
  console.log(key);
}

for (let value of myMap.values()) {
  console.log(value);
}
// Clearing a Map:
// You can remove all key-value pairs from a Map using the clear method:

// myMap.clear();
// Map Keys and Values can be Any Type:
// Unlike object keys, which are always converted to strings, Map keys and values can be of any data type:

let complexMap = new Map();
let objKey = {};
let funcValue = function () {
  console.log("Hello!");
};

complexMap.set(objKey, "Object Key");
complexMap.set(funcValue, "Function Value");

console.log(complexMap.get(objKey)); // 'Object Key'
console.log(complexMap.get(funcValue)); // 'Function Value'
// Map as an Alternative to Objects:
// While objects in JavaScript serve a similar purpose by allowing you to store key-value pairs, Map has some advantages, such as better support for non-string keys, maintaining key order, and providing convenient methods for working with keys and values.

// In summary, Map is a versatile and powerful data structure in JavaScript for managing key-value pairs with more flexibility than plain objects. It's especially useful when dealing with non-string keys or when you need to maintain the order of insertion.

//=========================================================================

// In JavaScript, the Map object has several methods for adding, removing, and manipulating key-value pairs. Here is a list of commonly used methods for a Map:

// set(key, value): Adds a new key-value pair or updates the value for an existing key in the Map. Returns the Map object.

let myMap = new Map();
myMap.set("key1", "value1");
// get(key): Returns the value associated with the specified key, or undefined if the key is not found.

let value = myMap.get("key1");
// has(key): Returns a boolean indicating whether the Map contains a key or not.

console.log(myMap.has("key1")); // true
// delete(key): Removes the key-value pair with the specified key from the Map. Returns true if an element with the specified key was found and removed; otherwise, false.

myMap.delete("key1");
// clear(): Removes all key-value pairs from the Map.

myMap.clear();
// size: Returns the number of key-value pairs in the Map.

console.log(myMap.size);
// forEach(callbackFn, thisArg): Calls a callback function once for each key-value pair in the Map, in insertion order.

myMap.forEach((value, key, map) => {
  console.log(key, value);
});
// keys(): Returns an iterator of the keys in the Map.

let keysIterator = myMap.keys();
for (let key of keysIterator) {
  console.log(key);
}
// values(): Returns an iterator of the values in the Map.

let valuesIterator = myMap.values();
for (let value of valuesIterator) {
  console.log(value);
}
// entries(): Returns an iterator of entries (key-value pairs) in the Map.

let entriesIterator = myMap.entries();
for (let entry of entriesIterator) {
  console.log(entry[0], entry[1]);
}
// Symbol.iterator: Allows the Map object to be iterated directly using a for...of loop.

for (let [key, value] of myMap) {
  console.log(key, value);
}
// These methods provide various ways to interact with and manipulate Map objects in JavaScript.
