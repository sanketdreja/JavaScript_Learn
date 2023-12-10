
const name="asdfghjkl";
const repoCount =50;
// console.log( name +" "+ repoCount);

// console.log(`My name is ${name}, with a repoCount of ${repoCount}`);

const gameName=new String("WarCommander");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.charCodeAt(2));

// console.log(gameName.indexOf("a"));


const newString=gameName.substring(0,4);

// console.log(newString);

// // more Details need for negative values in slice
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

const anotherName=gameName.slice(0,4);


// console.log(anotherName);

const newString2="   WarPilot   ";

// console.log(newString2);
// console.log(newString2.trim());



/*  
// The replace() method of String values returns a new string with one, some,
 or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, 
and the replacement can be a string or a function called for each match. 
If pattern is a string, only the first occurrence will be replaced. 
The original string is left unchanged.

*/

const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
// console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"




const url ="https://warCommander.com/abc%20sdfg";
// console.log(url);

let replaceVariable=url.replace("%20","-");
// console.log(replaceVariable);

// console.log(url.includes("%20"));

/*
 The split() method of String values takes a pattern and divides this
  string into an ordered list of substrings by searching for the pattern, 
 puts these substrings into an array, and returns the array.
*/

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
// console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
// console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
// console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]




/*
    The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

*/



const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

