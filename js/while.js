"use strict"
var i = 1;

while (i <= 65536) {
    i = i+1
    console.log(i);
}



// DO WHILE

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

do {
    console.log('I have ' + allCones + ' left to sell');
    var conesLeft = Math.floor(Math.random() * 7) + 1;
    if (conesToSell <= allCones) {
        console.log("I sold" + conesLeft);
        allCones = allCones - conesLeft;
    } else if (allCones === 0) {
        console.log('I can go home.');
    } else {
        console.log('I dont have ' + conesLeft + 'cones to sell');
    }
} while (allCones !== 0);
