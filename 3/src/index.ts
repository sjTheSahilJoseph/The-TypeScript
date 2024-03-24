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



