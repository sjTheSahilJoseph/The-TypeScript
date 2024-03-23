// TypeScript is a strongly typed language.
// JavaScript is a loosely typed language.

// This relates to static typing, dynamic typing, But it is not the same.
// A language that is strongly typed can be either statically OR dynamically typed.
// TypeScript is a statically typed language.
// This means types are checked at compile time.

// JavaScript isa dynamically typed language.
// This means types are checked at run time.

// Some benefits of TypeScript are:
// Self-Documententing code
// Catch errors in Dev
// Great for teams.

// I can explicitely define a data type.
let a: string = "a";

// Now here in TypeScript, it'll give us an error.
// Although, the JS will work but it'll give us an error.
// a = 33; // invlaid
a = "aa"; // valid


// Declare a variable, and initialize a value later.
let b: number;
// b = '44'; // invalid
b = 44; // valid


// More data types.
let aa: number;
let bb: string;
let cc: boolean;

// any type.
// // Any means that this can be anything.
let dd: any;
dd = 33; // valid
dd = "dd"; // valid
dd = []; // valid



// Functions
// // Now, a & b is of type any implicitly.
// // We'll have to type them explicitly.
// function sum(a, b) {
// // Now it's good.
// /// This is also valid, now it'll return a string.
// function sum(a:number, b:string) {
function sum(a:number, b:number) {
    return a + b;
}


// We can assign type using union as well.
// // This means uu can be number, string or boolean. and so on.
let uu: number | string | boolean;
uu = 44; // valid
uu = 'ss';// valid



// Regex
// // We use RegExp type.
let regex:RegExp = /\w+/g;



