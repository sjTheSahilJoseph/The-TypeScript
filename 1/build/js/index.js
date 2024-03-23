"use strict";
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
let a = 5;
let b = 3;
let c = 53;
console.log(a / b);
// No errors. Because now, we know that what are their data types.
// We can force TypeScript to not compile if there is any error in TypeScript.
// Using config file.
