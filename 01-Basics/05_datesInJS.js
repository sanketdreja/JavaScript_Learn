// The Date Object in JavaScript
// The Date object is a built-in object in JavaScript that represents dates and times. It provides methods for working with dates, formatting, and performing various operations involving time.

// Creating a Date Object
// You can create a Date object in several ways:



// Without Arguments:

let currentDate = new Date();



// Creates a Date object representing the current date and time.
// With a Date String:


let dateString = "2023-01-01";
let specificDate = new Date(dateString);




// Creates a Date object for the specified date string.
// With Milliseconds Since Epoch:

let millisecondsSinceEpoch = 1609459200000; // January 1, 2023
let dateFromMilliseconds = new Date(millisecondsSinceEpoch);



// Creates a Date object for a specific date using the number of milliseconds since the Unix Epoch (January 1, 1970).
// Getting Date Components
// You can retrieve various components of a Date object:

// Year, Month, and Day:


let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // 0-indexed (0-11)
let day = currentDate.getDate();


// Hour, Minute, Second, and Millisecond:

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();



// Setting Date Components
// You can set individual components of a Date object:

currentDate.setFullYear(2023);
currentDate.setMonth(0); // January (0-indexed)
currentDate.setDate(1);
currentDate.setHours(12);
currentDate.setMinutes(30);
currentDate.setSeconds(45);
currentDate.setMilliseconds(500);



// Formatting Dates
// The Date object allows you to create formatted strings using various methods:

// Using toString():

let dateStringCurrent = currentDate.toString();

// Using toDateString(), toTimeString(), or toLocaleString():

let dateOnlyString = currentDate.toDateString();
let timeOnlyString = currentDate.toTimeString();
let localizedString = currentDate.toLocaleString();


// Custom Formatting:
// You can use methods like getFullYear(), getMonth(), etc., along with string concatenation, to create custom formatted strings.

// Working with UTC
// The Date object has UTC counterparts for some methods:

let utcYear = currentDate.getUTCFullYear();
let utcMonth = currentDate.getUTCMonth();
let utcDay = currentDate.getUTCDate();
// ... and so on


// Date Arithmetic
// You can perform arithmetic operations on Date objects:


let tomorrow = new Date();
tomorrow.setDate(currentDate.getDate() + 1);



// Comparing Dates
// To compare two dates, you can use comparison operators or convert them to timestamps and compare:


let date1 = new Date('2023-01-01');
let date2 = new Date('2023-01-02');

if (date1 < date2) {
  console.log('date1 is earlier than date2');
}
// Note
// Months are zero-indexed, meaning January is 0 and December is 11.
// Be cautious about time zone differences when working with dates.



//==================================================================================================================

// Creating a Date:

  


let myDate = new Date();
// This creates a new Date object representing the current date and time.

// Displaying Date Information:

  


console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);




// toString(): Returns a human-readable string representation of the date and time.
// toDateString(): Returns a human-readable string of the date (excluding time and timezone information).
// toLocaleString(): Returns a localized string representation of the date and time.
// typeof myDate: Outputs the type of the myDate variable.
// Creating a Specific Date:

  


let myCreatedDate = new Date("01-14-2023");



// This creates a Date object representing January 14, 2023. Note that the date format is "MM-DD-YYYY."

// Getting a Timestamp:

let myTimeStamp = Date.now();



// This gets the current timestamp in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).

// Displaying Current Date Information:

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());




// newDate: Creates a new Date object representing the current date and time.
// getMonth() + 1: Gets the month (note that months are zero-indexed, so adding 1 to get the correct month).
// getDay(): Gets the day of the week (0 for Sunday, 1 for Monday, and so on).
// Formatting Date with toLocaleString():

newDate.toLocaleString('default', {
    weekday: "long",
})


// This uses toLocaleString() to format the date with the full name of the weekday.

// In summary, the code demonstrates creating Date objects, displaying date information in various formats, creating a specific date, obtaining a timestamp, and formatting date information using toLocaleString().


//==================================================================================================================================

/** 
 * 
 * ertainly! Here's a detailed list of methods provided by the Date object in JavaScript:

Static Methods:
Date.now():

Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
Date.parse(dateString):

Parses a string representation of a date and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.
Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]]):

Accepts the same parameters as the longest form of the constructor and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.
Instance Properties:
Date.prototype.constructor:
The constructor function that created the instance object. For Date instances, the initial value is the Date constructor.
Instance Methods:
Date.prototype.getDate():

Returns the day of the month (1 – 31) for the specified date according to local time.
Date.prototype.getDay():

Returns the day of the week (0 – 6) for the specified date according to local time.
Date.prototype.getFullYear():

Returns the year (4 digits for 4-digit years) of the specified date according to local time.
Date.prototype.getHours():

Returns the hour (0 – 23) in the specified date according to local time.
Date.prototype.getMilliseconds():

Returns the milliseconds (0 – 999) in the specified date according to local time.
Date.prototype.getMinutes():

Returns the minutes (0 – 59) in the specified date according to local time.
Date.prototype.getMonth():

Returns the month (0 – 11) in the specified date according to local time.
Date.prototype.getSeconds():

Returns the seconds (0 – 59) in the specified date according to local time.
Date.prototype.getTime():

Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.
Date.prototype.getTimezoneOffset():

Returns the time-zone offset in minutes for the current locale.
Date.prototype.getUTCDate():

Returns the day (date) of the month (1 – 31) in the specified date according to universal time.
Date.prototype.getUTCDay():

Returns the day of the week (0 – 6) in the specified date according to universal time.
Date.prototype.getUTCFullYear():

Returns the year (4 digits for 4-digit years) in the specified date according to universal time.
Date.prototype.getUTCHours():

Returns the hours (0 – 23) in the specified date according to universal time.
Date.prototype.getUTCMilliseconds():

Returns the milliseconds (0 – 999) in the specified date according to universal time.
Date.prototype.getUTCMinutes():

Returns the minutes (0 – 59) in the specified date according to universal time.
Date.prototype.getUTCMonth():

Returns the month (0 – 11) in the specified date according to universal time.
Date.prototype.getUTCSeconds():

Returns the seconds (0 – 59) in the specified date according to universal time.
Date.prototype.getYear() (Deprecated):

Returns the year (usually 2–3 digits) in the specified date according to local time. Use getFullYear() instead.
Date.prototype.setDate(day):

Sets the day of the month for a specified date according to local time.
Date.prototype.setFullYear(year[, month[, day]]) :

Sets the full year (e.g., 4 digits for 4-digit years) for a specified date according to local time.
Date.prototype.setHours(hour[, minute[, second[, millisecond]]]) :

Sets the hours for a specified date according to local time.
Date.prototype.setMilliseconds(milliseconds):

Sets the milliseconds for a specified date according to local time.
Date.prototype.setMinutes(minute[, second[, millisecond]]) :

Sets the minutes for a specified date according to local time.
Date.prototype.setMonth(month[, day]) :

Sets the month for a specified date according to local time.
Date.prototype.setSeconds(second[, millisecond]) :

Sets the seconds for a specified date according to local time.
Date.prototype.setTime(time):

Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
Date.prototype.setUTCDate(day):

Sets the day of the month for a specified date according to universal time.
Date.prototype.setUTCFullYear(year[, month[, day]]) :

Sets the full year (e.g., 4 digits for 4-digit years) for a specified date according to universal time.
Date.prototype.setUTCHours(hour[, minute[, second[, millisecond]]]) :

Sets the hour for a specified date according to universal time.
Date.prototype.setUTCMilliseconds(milliseconds):

Sets the milliseconds for a specified date according to universal time.
Date.prototype.setUTCMinutes(minute[, second[, millisecond]]) :

Sets the minutes for a specified date according to universal time.
Date.prototype.setUTCMonth(month[, day]) :

Sets the month for a specified date according to universal time.
Date.prototype.setUTCSeconds(second[, millisecond]) :

Sets the seconds for a specified date according to universal time.
Date.prototype.setYear() (Deprecated):

Sets the year (usually 2–3 digits) for a specified date according to local time. Use setFullYear() instead.
Date.prototype.toDateString():

Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'.
Date.prototype.toISOString():

Converts a date to a string following the ISO 8601 Extended Format.
Date.prototype.toJSON():

Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().
Date.prototype.toLocaleDateString():

Returns a string with a locality-sensitive representation of the date portion of this date based on system settings.
Date.prototype.toLocaleString():

Returns a string with a locality-sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.
Date.prototype.toLocaleTimeString():

Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.
Date.prototype.toString():

Returns a string representing the Date.
Date.prototype.toTimeString():

Returns a string representing the time portion of the Date.
Date.prototype.toUTCString():

Converts a date to a string using the UTC time zone.
Date.prototype.valueOf():

Returns the primitive value of a Date object, the timestamp.
Please note that some methods are deprecated (getYear(), setYear(), etc.), and it's recommended to use their non-deprecated counterparts (getFullYear(), setFullYear(), etc.).
 */