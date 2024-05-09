/*

// TypeScript file extension is .ts

// TypeScript is a superset of JavaScript.
// It'll compile into JavaScript.
// TypeScript is made by Microsoft.

// Install typescript using npm as global.
// npm install typescript -g

// we use tsc file.ts file.js
// tsc for compiling typescript file to destination javascript file.

// We can watch on the ts file, to aumatically recompile.
// With the -w flag.
// But this is not good if we are working on multiple files.

// Normally, we would have a src where we write typeScript, and we'll compile into js in build folder outside of src, + html.
// We can do that using typescript config file.

let firstName = 'sj';

console.log(firstName);

// Now after setting up the project with typescript.
// And modifying the typescript config file.
// We can write typescript and it'll automatically compile or recompile all those ts files.

// In compiled js, we can see "use strict".
// We can almost control everything of typescript compilation from typescript config file.

// If we delete a ts file, it'll not automatically delete the js file.

// By default, if we write any ts file even at root, it'll compile that and put that on root.
// But we can elemincate that using config file.

// let a = 5;
// let b = '3';
// let c = 53;

// TypeScript will give errors but at the same time, it'll compile into js and it'll run well.
// But TypeScript will give errors to solve.
// console.log(a/b);


// We can specifiy the data type like this in TypeScript.
let a:number = 5;
let b:number = 3;
let c:number = 53;
console.log(a/b);
// No errors. Because now, we know that what are their data types.

// We can force TypeScript to not compile if there is any error in TypeScript.
// Using config file.



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



// Arrays

let stringArray = ["one", "two", "three"];

// TypeScript is internally thinking using union that string | number | boolean.
let arr = ["one", 1, true];

// stringArray[0] = 3; // Wrong

// TypeScript has no problem of switching the order of union.
// Although right now, it's not explicitely written.
arr[0] = 3; // Valid



// By default, an empty array is teated as any.
let test = [];

// We can explicitly define the type using type[].

// Empty string array.
let brr: string[] = [];

// Empty union array.
// // with (union)[]
let brrr: (number | boolean)[] = [];


// If we want to be more strict, even with the order or that data type.
// Then we can use Tuple.
let Tup: [string, number, boolean] = ['s', 3, true];


// We can initialize union with tuple but the condition is that there should not be any difference.
let mix: (string | number | boolean)[] = ['a', 22, false];

mix = Tup; // No worries.

// Tup = mix; // Not valid.

// We cannot change size of tuple, but we can of array.


// Objects.
let obj1: object;
// obj1 is now of an object type.
// But in JS, array is also the type of object.
// So we can do that.
obj1 = []; // No problem.

let obj2: {
    // Here we can define the properties of this object key values type
    name: string
    age: number
}

// But if we have to annotate the object type
// We can use type.
// Which means we can define our own type.
type Obj3Type = {
    name: string,
    active: boolean,
    albums: (string | number)[]
};

let obj3: Obj3Type = {
    name: "sj",
    active: true,
    albums: [
        "sj", 3, "323", "dfs",
    ]
};
// But now, if there is some property missing, it'll give an error.
// Or we can't add another property later.
// obj3.years = 43; // error.
// // WE can use ?: to make a property optional.


type Obj4Type = {
    name?: string,
    active?: boolean,
    albums?: (string | number)[]
};

let obj4: Obj4Type = {
    name: "sj",
    active: true,
    albums: [
        3, 34, 34
    ]
};

// With functions
const greetObj = (param1: Obj4Type) => {
    // If there is a property in a object, which is optional.
    // And we use it, it'll give undefined.
    // But if we apply some method, then we'll get error.
    // We can make it optional by ?.
    console.log("hello ", param1.name?.toLowerCase());

    // We can also do narrowing, using if else
    if (param1.name) {
    return console.log("hello ", param1.name?.toLowerCase());
    }
    return "hi";
    // But we need to make this function to return something if it doesn't go to if block.
}

greetObj(obj4);


// We can use Interface as well, instead of type.
// But the syntax is without =.

interface ss {
    name?: string,
    age: number
}

let sss:ss = {
    name: "SJ",
    age: 32
}

// Enum
// Enums are unlike most typescript features, enums are not a type-level addition to
// JavaScript but something added to the language and runtime.

enum Grade {
    U,
    D,
    C
}

console.log(Grade.U);// 0
console.log(Grade.D);// 1

// These are enumerated.
// Starts from 0.
// We can change the value of U = 1; Everything will adapt
enum Grade2 {
    U = 1,
    D,
    C
}

console.log(Grade2.U);// 1
console.log(Grade2.D);// 2







*/

