(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
        // https://javascript.info/object-methods R E F E R E N C E
    let person = {};
    person.firstName = "Jacob";
    person.lastName = "Valeriano";


    console.log(person.firstName);
    console.log(person.lastName);
    console.log("-------------------------------------------------------------------");

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName + "!"
    };

    console.log(person.sayHello());
    console.log("-------------------------------------------------------------------");


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the
     *
     *
     * 1.) name of the person,
     * 2.) the amount before the discount,
     * 3.) the discount, if any,
     * 4.) and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
        // function discountedPrice() {
        //     if(shoppers.amount > 200) {
        //         return ((shoppers.amount * .12) + shoppers.amount);
        //     }
        // }


    var shoppers = [
            {name: 'Cameron', amount: 180},     //
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];


    // ----------------------------------------------------
    //     NAMES

    for (var i = 0; i < shoppers.length; i += 1) {
        console.log(shoppers[i].name);
    }
    console.log("-------------------------------------------------------------------");

    // ----------------------------------------------------
    //     AMOUNT BEFORE DISCOUNT

    shoppers.forEach(function (shoppers) {
        console.log(shoppers.name + "'s original amount before discount is " + "$" + shoppers.amount);


        // ----------------------------------------------------
        //     DISCOUNT AND FINAL PRICE

        if (shoppers.amount > 200) {
            console.log(shoppers.name + " receives a 12% discount.");
            console.log(shoppers.name + "'s discounted price is $" + (shoppers.amount - (shoppers.amount * .12)));
            console.log("-------------------------------------------------------------------");
        } else {
            console.log(shoppers.name + " does not qualify for a discount.")
            console.log(shoppers.name + "'s final price is $" + shoppers.amount);
            console.log("-------------------------------------------------------------------");
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {

            title: "Smite",
            author: {
                firstName: "Hi-Rez",
                lastName: "Studios"
            }
        },
        {

            title: "Parry Hotter",
            author: {
                firstName: "R.K.",
                lastName: "Jowling"
            }
        },
        {

            title: "Gunger Hames",
            author: {
                firstName: "Cuzanne",
                lastName: "Sollins"
            }
        },
        {

            title: "Rord of the Lings",
            author: {
                firstName: "T.R.R.",
                lastName: "Jolkien"
            }
        },
        {

            title: "Fum of all SEARS",
            author: {
                firstName: "Com",
                lastName: "Tlancy"
            }
        }

    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // alt way
    // console.log('Book #1');
    // console.log('Title:' + books[0].title);
    // console.log('Author: ' + books[0].author.firstName + ' ' + books[0].author.lastName)


    for (var i = 0, len = books.length; i < len; i++) {
    }
    books.forEach(function (books, index) {
        console.log("Book #" + (index + 1) + " " + "Title:" + books.title + " Author: " + books.author.firstName + " " + books.author.lastName);
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        var nameArr = author.split(' ');
        var firstName = nameArr[0];
        var lastName = nameArr[1];
        return {
            title: title,
            author: {
                firstName: firstName,
                lastname: lastName
            }
        }
    }

    let booksUsingFunction =[
        createBook('Title 1', 'John1 Smith1'),
        createBook('Title 1', 'John1 Smith1'),
        createBook('Title 1', 'John1 Smith1')


]
    });


