(function(){
    "use strict";
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    var names = [ 'Jacob', 'Otis', 'Nala', 'Reece', 'Kobe'];
    console.log("There are " + names.length + " names in the names array.")

    console.log("For Loop:");

    for (var i = 0.; i < names.length; i++) {
        names[i]
        console.log("Name at index " + i + " is " + names[i])
    }

    console.log("ForEach loop:");

    names.forEach(function (element, index, array) {
        console.log('The name at index ' + index + ' is: ' +
            element);
    });





})();