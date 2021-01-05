"use strict";
console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var favColor = prompt('What is your favorite color?');
alert('Awesome, ' + favColor + ' is my favorite color too!');


var littleMermaidRentalDays = parseInt(prompt('How many days did you rent Little Mermaid?'));
var brotherBearRentalDays = parseInt(prompt('How many days did you rent Brother Bear?'));
var herculesRentalDays = parseInt(prompt('How many days did you rent Hercules?'));
var dailyRentalRateDollars = parseInt(prompt('What is the daily rental rate per movie?'));


var totalRentalCostDollars = (littleMermaidRentalDays + brotherBearRentalDays + herculesRentalDays)
    * dailyRentalRateDollars;

alert('Your total cost is $' + totalRentalCostDollars );



var googlePayRate = parseInt(prompt('What is your pay rate per hour at Google?'));
var amazonPayRate = parseInt(prompt('What is your pay rate per hour at Amazon?'));
var fbPayRate = parseInt(prompt('What is your pay rate per hour at Facebook?'));

var googleHoursWorked = parseInt(prompt('How many hours did you work at Google?'));
var amazonHoursWorked = parseInt(prompt('How many hours did you work at Amazon?'));
var fbHoursWorked = parseInt(prompt('How many hours did you work at Facebook?'));

var weeklyPay = prompt(
    googlePayRate * googleHoursWorked +
             amazonPayRate * amazonHoursWorked +
             fbPayRate * fbHoursWorked );

alert('Congrats! you made $ ' + weeklyPay );



var numberOfItems; parseInt(prompt('How many items were purchased?')) // number
var offerIsExpired= false;
var isPremiumMember = false;

var productDiscountApplied = (isPremiumMember && !offerIsExpired) || (numberOfItems >= 2 && offerIsExpired )

alert("offer is valid :" + productDiscountApplied);
















