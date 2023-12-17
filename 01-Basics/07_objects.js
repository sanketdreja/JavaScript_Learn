// ! In JavaScript, an object is a complex data type that allows you to store and organize data in a structured way. Objects are a fundamental part of the language, and they play a crucial role in representing and manipulating data. Here are the key aspects of objects in JavaScript:

// 1. Object Creation:
// Objects in JavaScript can be created using two main methods:

// Object Literal:

const personOne = {
  name: "John",
  age: 30,
  isStudent: false,
};
// Object Constructor:

const person = new Object();
person.name = "John";
person.age = 30;
person.isStudent = false;



// 2. Properties:
// Objects consist of properties, which are key-value pairs. Each property has a name (or key) and a corresponding value.

const person = {
  name: "John",
  age: 30,
  isStudent: false,
};
// Accessing Properties:
console.log(person.name); // Output: John



// 3. Methods:
// Properties in JavaScript objects can also hold functions, which are called methods.

const car = {
  brand: "Toyota",
  model: "Camry",
  start: function () {
    console.log("Engine started!");
  },
};


// Calling Methods:
car.start(); // Output: Engine started!


// 4. Object Manipulation:
// Objects are mutable, meaning their properties and methods can be modified or added even after the object is created.

// Adding Properties:
person.gender = "Male";

// Updating Properties:
person.age = 31;


// Deleting Properties:
delete person.isStudent;



// 5. Object Iteration:
// You can loop through the properties of an object using various methods.

// for...in Loop:

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}




// Object.keys, Object.values, Object.entries:
// Object.keys(obj):

// Returns an array of a given object's own enumerable property names.
// const obj2 = { a: 1, b: 2, c: 3 };
// const keys2 = Object.keys(obj2);
// Output: ['a', 'b', 'c']


// Object.values(obj):

// Returns an array of a given object's own enumerable property values.
// const obj3 = { a: 1, b: 2, c: 3 };
// const values3 = Object.values(obj3);
// Output: [1, 2, 3]


// Object.entries(obj):

// Returns an array of a given object's own enumerable property [key, value] pairs.
// const obj4 = { a: 1, b: 2, c: 3 };
// const entries4 = Object.entries(obj4);
// Output: [['a', 1], ['b', 2], ['c', 3]]
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);




// 6. Object as a Reference Type:
// Objects in JavaScript are reference types. When you assign an object to a variable, you are actually assigning a reference to the object, not the object itself.

const obj1 = { name: "John" };
const obj2 = obj1; // obj2 now refers to the same object as obj1
obj2.name = "Jane";
console.log(obj1.name); // Output: Jane



// 7. Prototypes and Inheritance:
// JavaScript is a prototype-based language, and objects can inherit properties and methods from other objects.

function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

const carNew = new Vehicle("Toyota", "Camry");





// 8. JSON (JavaScript Object Notation):
// Objects in JavaScript can be converted to JSON format and vice versa.

// Object to JSON:

// const jsonString = JSON.stringify(person);
// JSON to Object:

const jsonObj = JSON.parse(jsonString);



// 9. Object Destructuring:
// Object destructuring allows you to extract properties from objects and assign them to variables.

const { name, age } = person;
console.log(name, age);



// 10. Object.freeze:
// The Object.freeze() method can be used to make an object immutable.

const frozenObj = Object.freeze(person);
// Any attempt to modify frozenObj will result in an error
// Understanding these fundamental concepts will help you work effectively with objects in JavaScript. Objects are versatile and powerful, and they are used extensively in the language to represent and organize data.


//================================================================================================================================


// In JavaScript, objects have a variety of built-in methods that can be used for various operations. Here's a list of some commonly used methods on objects:

// Object Methods:
// Object.keys(obj):

// Returns an array of a given object's own enumerable property names.
const obj2 = { a: 1, b: 2, c: 3 };
const keys2 = Object.keys(obj2);
// Output: ['a', 'b', 'c']


// Object.values(obj):

// Returns an array of a given object's own enumerable property values.
const obj3 = { a: 1, b: 2, c: 3 };
const values3 = Object.values(obj3);
// Output: [1, 2, 3]


// Object.entries(obj):

// Returns an array of a given object's own enumerable property [key, value] pairs.
const obj4 = { a: 1, b: 2, c: 3 };
const entries4 = Object.entries(obj4);
// Output: [['a', 1], ['b', 2], ['c', 3]]


// Object.assign(target, source1, source2, ...):

// Copies the values of all enumerable properties from one or more source objects to a target object.
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
// Output: { a: 1, b: 2, c: 3 }


// Object.freeze(obj):

// Freezes an object: other code can't delete or modify any properties.
const obj5 = { a: 1, b: 2 };
Object.freeze(obj5);
// obj is now immutable


// Object.seal(obj):

// Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
const obj6 = { a: 1, b: 2 };
Object.seal(obj6);
// Can't add or remove properties from obj



// Object.create(proto, [propertiesObject]):

// Creates a new object with the specified prototype object and properties.
const obj7 = Object.create(null);
// obj has no prototype, no inherited properties



// Object.hasOwnProperty(prop):

// Returns a boolean indicating whether the object has the specified property.
const obj8 = { a: 1, b: 2 };
obj8.hasOwnProperty('a'); // true



// Object.toString():

// Returns a string representation of the object.
const obj9 = { a: 1, b: 2 };
obj.toString(); // '[object Object]'



// Object.getOwnPropertyNames(obj):

// Returns an array of all properties (including non-enumerable properties except for Symbol properties) found directly in a given object.
const obj10 = { a: 1, b: 2 };
Object.getOwnPropertyNames(obj10); // ['a', 'b']
// These are just a few of the many methods available for working with objects in JavaScript. Depending on your needs, you might find other methods or combinations of these methods more suitable

//================================================================================================================================




// Singleton Pattern
// Singleton pattern ensures a class has only one instance and provides a global point to that instance.

// Example:
const Singleton = (function () {
    let instance;

    function createInstance() {
        // Private constructor
        const object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true (both references point to the same instance)




// Object.create
// Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// Example:
const parentObject = {
    greet: function () {
        console.log("Hello from parent object!");
    },
};

const childObject = Object.create(parentObject);
childObject.greet(); // Output: Hello from parent object!




// Object Literals
// Object literals provide a convenient syntax for creating and initializing objects.

// Example:
const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    greeting: function () {
        console.log("Hello JS user");
    },
    greetingTwo: function () {
        console.log(`Hello JS user, ${this.name}`);
    },
};

console.log(JsUser.email); // Access property using dot notation
console.log(JsUser["email"]); // Access property using bracket notation
console.log(JsUser[mySym]); // Access property using a symbol
// Object Freeze
// Object.freeze() method freezes an object. A frozen object can't be modified - no adding, updating, or deleting properties.

// Example:
const JsUserOne = {
    name: "Hitesh",
    email: "hitesh@google.com",
};
Object.freeze(JsUserOne);

JsUserOne.email = "hitesh@microsoft.com"; // This won't change the email property
console.log(JsUserOne);




// Destructuring Assignment
// Destructuring assignment allows you to assign values from objects or arrays to variables.

// Example:
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
};

const { courseInstructor: instructor } = course;

console.log(instructor); // Output: hitesh






// Spread Operator
// The spread operator (...) is used to expand elements of an array or object.

// Example:
const objOne = { 1: "a", 2: "b" };
const objTwo = { 3: "a", 4: "b" };
const objThree = { ...objOne, ...objTwo };

console.log(objThree); // Output: {1: "a", 2: "b", 3: "a", 4: "b"}




// Array Destructuring
// Destructuring assignment can also be used with arrays.

// Example:
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "a@gmail.com" },
    { id: 3, email: "b@gmail.com" },
];

const secondUserEmail = users[1].email;
console.log(secondUserEmail); // Output: a@gmail.com

