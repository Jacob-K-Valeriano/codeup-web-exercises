"use strict"
var random = Math.floor((Math.random()*50)+1)

console.log ("Random odd number to skip is: " + random);

for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        // skip even numbers.
        continue;
    }

    if (random === i) {
        console.log("Yikes! skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }

    if (i >= 49) {
        break;
    }
}
