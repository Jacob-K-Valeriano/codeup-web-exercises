"use strict"

// Create Your Own Promise
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

//
// {
//
//     const wait = (milliseconds) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, milliseconds);
//         });
//     };
//
//
//
//     wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//     wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
// }


//--------  MINI EXERCISE 3

/* TODO: make a GET request using fetch to the url below to get an array of five cat fact objects.
    Log the text property of the first cat fact object. Be sure to log possible errors in a catch.
 */
// {
//     const catFactsURL = 'https://cat-fact.herokuapp.com/facts';
//
//     fetch(catFactsURL)
//         .then(response => response.json())
//         .then(data => {
//             let fact1 = data[0].text
//             console.log("Fact #1: " + fact1);
//         })
//         .catch(console.error);
//
// }


// or (([{ catFact } ])

// -------- MINI EXERCISE 4

/* TODO: Create a new endpoint on https://hookbin.com/ and use fetch to send some POST requests.
    Experiment with sending different shapes of data in the body of the request.
 */
// {
//     fetch('https://hookb.in/03wZypKyZBf1yykKOzMB')
//         .then(response => response.json())
//         .then(data => console.log(data));
//
// }

{

    const lastPush = (user) => {
        fetch("https://api.github.com/users/" + user + "/events", {headers: {"Authorization": "githubKey"}})
            .then(response => response.json())
            .then(data => {
                console.log(data[0]);
                $('#lastPush').html(data[0].created_at);
               $('#username').html(data[0].actor.display_login);
            })
    };

   lastPush("Jacob-K-Valeriano");


}