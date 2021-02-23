"use strict";



var message = '';
var names = ['John', 'Paul', 'George', 'Ringo'];
for (var i = 0; i < names.length; i += 1) {
    message += 'Hello, ' + names[i] + '\n';
}


//to es6








// ============== Exponentiation

// var num1 = Math.pow(4, 2); // before ES6
// var num2 = 4**2; // ES6 onwards
// console.log(num1);
// console.log(num2);



// ============== Let and Const (block scope vs. function scope)

// var vs. let vs. const

// {
//     var a = 10;
// }

// {
//     let b = 20;
// }

// {
//     const c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// block scope applies to any code structure that can use curly braces (loops, conditional logic, functions, etc.)

// constants can't be reassigned

// const c = 30;
// c = 3;
// console.log(c);


// constants and let can't be redeclared in the same scope

// const c = "bob";

// Use constants for everything you can and let for everything else. Don't use var.


// ============== Template Strings

// ES5...

// "You had me at 'meat tornado'" - Ron Swanson

// let firstName = "Ron";
// let lastName = "Swanson";
// const amount = 30;
// console.log(`You have $${amount}.00`);
//
// let quote = "";
// quote += '"You had me at \'meat tornado\'" - ';
// quote += firstName + " " + lastName;
//
// console.log(quote);

// ES6 Template Strings...

// let easierQuote = `"You had me at 'meat tornado'" - ${firstName} ${lastName}`;
//
// console.log(easierQuote);

// Very helpful for building HTML with JS

// let items = ['apple', 'grape', 'orange'];
//
// let itemsHtml = `
//     <ul>
//         <li>${items[0]}</li>
//         <li>${items[1]}</li>
//         <li>${items[2]}</li>
//     </ul>
// `;
//
// console.log(itemsHtml);
// document.write(itemsHtml);

// ============== for ..of loop (works on node lists!!!)

// const numbers = ["one", "two", "three"];

// const people = [
//     {
//         firstN: 'bob',
//         lastN: 'smith'
//     },
//     {
//         firstN: 'sally',
//         lastN: 'smith'
//     }
// ];

// regular for loop
// for (var i = 0; i < people.length; i += 1) {
//     console.log(people[i].firstN);
// }
//
// forEach loop version
// people.forEach(function(person) {
//     console.log(person.firstN);
// });

// for...of loop
// for (let person of people) {
//     console.log(person.firstN);
// }


// for (let element of collection) {
//
// }
// for (let number of numbers) {
//     console.log(number);
// }

// ============== MINI EXERCISE

// // TODO: Refactor the following code to use ES6 syntax. The output should stay the same.
//
// var message = '';
// var names = ['John', 'Paul', 'George', 'Ringo'];
// for (var i = 0; i < names.length; i += 1) {
//     message += 'Hello, ' + names[i] + '\n';
// }
// console.log(message);



// ============== Arrow Functions

// function declaration
//     function addOne(arg1) {
//         return arg1 + 1;
//     }

// original function expression
//     const addOneA = function(arg1) {
//         return arg1 + 1;
//     };

// refactor to use arrow functions
//     const addOneB = (arg1) => {
//         return arg1 + 1;
//     };

// removed curly braces (if only one statement)
//     const addOneC = (arg1) => arg1 + 1;

// removed parens if one input only
//     const addOneD = arg1 => arg1 + 1;


// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(2));
// console.log(addOneD(2));


/*const addNames = function (fName, lName) {
    return `${fName} ${lName}`;
};*/

// const addNames = (fName, lName) => `${fName} ${lName}`;
//
// const firstName = prompt("Hello, enter your first name: ");
// const lastName = prompt("Enter your last name: ");
// alert(`Greetings, ${addNames(firstName, lastName)}`);

// const returnTwo = () => 2;



// ============== Default Parameter Values

// Common ES5 approach
//     let addArgsA = (num1, num2) => {
//         if (num1 === undefined) {
//             num1 = 2;
//         }
//         if (num2 === undefined) {
//             num2 = 2;
//         }
//         return num1 + num2;
//     };

// Shorter ES5 approach
//     let addArgsB = (num1, num2) => {
//         num1 = num1 || 2;
//         num2 = num2 || 2;
//         return num1 + num2;
//     };


// Even better ES6 approach

// let addArgsC = (num1 = 2, num2 = 2) => num1 + num2;

// Test output

// console.log("\nA output...");
// console.log(addArgsA());
// console.log(addArgsA(1));
// console.log(addArgsA(3, 3));
//
// console.log("\nB output...");
// console.log(addArgsB());
// console.log(addArgsB(1));
// console.log(addArgsB(3, 3));
//
// console.log("\nC output...");
// console.log(addArgsC());
// console.log(addArgsC(1));
// console.log(addArgsC(3, 3));


// ============== Object Assignment Shorthand

// variables to build object from...

// let breed = "Pug";
// let age = 3;
// let name = "Lexie";
// let isCute = true;

// ES5 way...

var dog = {
    breed: breed,
    age: age,
    name: name,
    isCute: isCute
};
//
console.log(dog.name);

// ES6 way...

const dog = {
    breed,
    age,
    name,
    isCute
};
//
console.log(dog.name);


// ============== Object / Array Destructuring

// object to destructure...

// const puppy = {
//     breed: "Lab",
//     age: 10,
//     name: "Sabrina",
//     isCute: true
// };

// let breed = puppy.breed;
// let age = puppy.age;
// let name = puppy.name;
// let isCute = puppy.isCute;

// let { breed, age, name, isCute } = puppy;
//
//
// //
// console.log(breed);
// console.log(age);
// console.log(name);
// console.log(isCute);

//
// const data = {
//     hum: ["32%", "35%"],
//     temp: {
//         degreesMetric: 34,
//         degreesImperial: 56
//     },
//     pressure: "1100ml",
//     extra: "asdfasd",
//     extra1: "sdfsdf"
// }
// //
// //
// function buildWeatherPanel({ hum, temp, pressure }) {
//     // let { hum, temp, pressure } = data;
//     let { degreesMetric, degreesImperial } = temp;
//     return `
//         <div class="card">
//             <p>${hum[1]}</p>
//             <p>${temp}</p>
//             <p>${pressure}</p>
//         </div>
//     `;
// }





// destructuring with arrays...

// let cats = ["CJ", "Claude", "Max"];

// let [ cat1, cat2, cat3 ] = cats;

// let cat1 = cats[0];
// let cat2 = cats[1];
// let cat3 = cats[2];
//
//
// console.log(cat1);
// console.log(cat2);
// console.log(cat3);


// ============== Destructuring Assignment w/ Functions

// destructuring...

// const getArea = ({ height, width }) => height * width;
//
// let shape = {
//     height: 20,
//     width: 10
// };
//
// let rectangle1 = {
//     height: 40,
//     width: 10
// }
//
// let rectangle2 = {
//     height: 20,
//     width: 40
// }
//
// console.log(getArea(shape));
// console.log(getArea(rectangle1));
// console.log(getArea(rectangle2));

// assignment...

// let height = 20;
// let width = 10;



// console.log(getArea({ height, width }));



# ES5 vs. ES6 Syntax Guide

### Exponentiation - shorthand for raising a number to a power

Raising a four to the second power:

    ES5

        ```
Math.pow(4, 2)
```

ES6

    ```
4**2
```

### Variable Declarations - new keywords with block scope

Defining a variable:

    ES5

        ```
var someValue;
```

ES6

    ```
let someValue;
// or
const someValue;
```

### Template Strings - shorthand for concatenating strings

Combining the strings "hello" and "world":

ES5

    ```
var hello = "hello";
var world = "world";
var str = hello + " " + world;
```

ES6

    ```
const hello = "hello";
const world = "world";
const str = `${hello} ${world`;
```

### For...Of Loop - a newer loop that can iterate over DOM nodes

Logging the inner text of all divs (nodelist):

ES5

```
const divs = document.querySelectorAll('div');
for (var i = 0; i < divs.length; i += 1) {
	console.log(divs[0].innerText);
}
    ```

ES6

```
const divs = document.querySelectorAll('div');
for (let div of divs) {
    console.log(div.innerText);
}
```

### Arrow Functions - shorthand for writing function expressions

Defining a function expression that simply returns a given input:

ES5

```
var returnInput = function(input) {
    return input;
}
returnInput(4); // returns 4
```

ES6

```
const returnInput = input => input;
returnInput(4); // returns 4
```

### Default Parameters Values - shorthand for defining default parameter values

Defining a log function that will log "hello" if no defined input:

ES5

```
var log = function(input) {
    if (input === undefined) {
        input = "hello";
    }
    console.log(input);
};
log(); // logs "hello"
```

ES6

```
const log = (input = "hello") => {
    console.log(input);
}
```

### Object Assignment - shorthand for building an object from variables

Creating an object from a first and last name variable:

ES5

```
var first = "bob";
var last = "smith";
var name = {
    first: first,
    last: last
};
```

ES6

```
const first = "bob";
const last = "smith";
const name = {
    first,
    last
};
```

### Destructuring - shorthand for creating variables from an object or array

Creating variables from object:

ES5

```
var name = {
    first: "bob",
    last: "smith"
};
var first = name.first;
var last = name.last;
console.log(first + " " + last);
```

ES6

```
const name = {
    first: "bob",
    last: "smith"
};
const { first, last } = name;
console.log(`${first} ${last}`);
```
