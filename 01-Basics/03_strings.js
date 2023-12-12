/** In JavaScript, a string is a sequence of characters enclosed in single (') or double (") quotes. Strings are one of the primitive data types, and they are used to represent textual data. Here are some key aspects of strings in JavaScript:

1. String Declaration:
Strings can be declared using single or double quotes.
 */

let singleQuotes = 'Hello, World!';
let doubleQuotes = "Hello, World!";


// It's common to use either single or double quotes consistently, but you can also use one inside the other:


let mixedQuotes = 'This is a string with "double quotes" inside.';
/** 2. String Concatenation:
Strings can be concatenated using the + operator. */


let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenation
/** 3. String Length:
The length property is used to get the length of a string.
 */

let greeting1 = "Hello, World!";
console.log(greeting1.length); // 13
/** 4. String Indexing:
Characters in a string can be accessed using zero-based indexing.
 */

let greeting = "Hello, World!";
console.log(greeting[0]); // "H"
console.log(greeting[7]); // "W"
/** 5. Escape Characters:
Special characters can be represented using escape sequences.
 */

let stringWithEscape = "This is a line\nbreak.";
let stringWithQuote = "He said, \"Hello!\"";
// Common escape sequences include \n for a new line, \t for a tab, \" for a double quote, and \' for a single quote.

/** 6. String Methods:
JavaScript provides a variety of built-in methods for working with strings.

 */
let text = "Hello, World!";
console.log(text.toUpperCase());    // "HELLO, WORLD!"
console.log(text.toLowerCase());    // "hello, world!"
console.log(text.indexOf("World")); // 7
console.log(text.slice(0, 5));      // "Hello"
// Other common methods include concat(), trim(), charAt(), replace(), and more.

/** 7. Template Literals (ES6 and later):
Template literals provide a convenient way to create multiline strings and embed expressions.
 */

let name = "John";
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
/** 8. Immutable Nature:
Strings in JavaScript are immutable, meaning their values cannot be changed once they are created. Operations that appear to modify a string actually create a new string.
 */

let originalString = "Hello";
let modifiedString = originalString + ", World!";
console.log(originalString); // "Hello"
console.log(modifiedString); // "Hello, World!"
/** 9. String Conversion:
Values of other data types can be converted to strings using the String() function or the toString() method. */


let num = 42;
let strNum = String(num);   // "42"
let strNumAlt = num.toString(); // "42"


//====================================================================================================================
// Let's dive into the details of each string method in JavaScript:

// 1. charAt(index):
// Returns the character at the specified index.

let str = "Hello";
console.log(str.charAt(0)); // "H"
// 2. charCodeAt(index):
// Returns the Unicode value of the character at the specified index.

let str0 = "Hello";
console.log(str0.charCodeAt(0)); // 72

// 3. concat(string1, string2, ...):
// Concatenates two or more strings.

let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // "Hello World"


// 4. includes(searchString, position):
// Checks if a string contains another string. Returns a boolean.

let str3 = "Hello World";
console.log(str3.includes("World")); // true


// 5. indexOf(searchValue, fromIndex):
// Returns the index of the first occurrence of a specified value in a string.
let str4 = "Hello World";
console.log(str4.indexOf("o")); // 4


// 6. endsWith(searchString, length):
// Checks if a string ends with another string. Returns a boolean.
let str5 = "Hello World";
console.log(str5.endsWith("World")); // true


// 7. startsWith(searchString, position):
// Checks if a string starts with another string. Returns a boolean.
let str6 = "Hello World";
console.log(str6.startsWith("Hello")); // true


// 8. lastIndexOf(searchValue, fromIndex):
// Returns the index of the last occurrence of a specified value in a string.
let str7 = "Hello World";
console.log(str7.lastIndexOf("o")); // 7


// 9. length:
// Returns the length of a string.
let str8 = "Hello";
console.log(str8.length); // 5

// 10. toLowerCase():
// - Converts a string to lowercase.


let str9 = "Hello";
console.log(str9.toLowerCase()); // "hello"


// 11. toUpperCase():

// - Converts a string to uppercase.

let str10 = "Hello";
console.log(str10.toUpperCase()); // "HELLO"



// 12. slice(start, end):

// - Extracts a section of a string and returns a new string.

let str11 = "Hello World";
console.log(str11.slice(0, 5)); // "Hello"



// 13. substring(start, end):

// - Similar to `slice`, but doesn't support negative indexes.

let str12 = "Hello World";
console.log(str12.substring(0, 5)); // "Hello"


// 14. substr(start, length):
// - Extracts a specified number of characters from a string.

let str13 = "Hello World";
console.log(str13.substr(6, 5)); // "World"

// 15. replace(searchValue, replaceValue):
// - Replaces a specified value with another value in a string.

let str14 = "Hello World";
console.log(str14.replace("World", "Universe")); // "Hello Universe"


// 16. trim():
// - Removes whitespace from both ends of a string.

let str15 = "   Hello   ";
console.log(str15.trim()); // "Hello"


// 17. split(separator, limit):
// - Splits a string into an array of substrings based on a specified separator.

let str16 = "apple,orange,banana";
console.log(str16.split(",")); // ["apple", "orange", "banana"]


//  Keep in mind that strings in JavaScript are immutable, so these methods return new strings rather than modifying the existing ones.