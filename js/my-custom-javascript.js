"use strict"

$(document).ready(function() {
        alert( 'The DOM has finished loading!' );


        // ID SELECTORS
        // var content1 = $('.heading').css('color', 'red');
        //
        //
        // var content2 = $('#p2').css('color', 'blue');
        //
        //
        // var content3 = $('#p3').css('color', 'gold');


        // CLASS SELECTORS
        // var border = $('.codeup').css({'border': '1px solid red'})


        // ELEMENT SELECTORS
        // var fontSize = $('.changeSize').css({'font-size': '20px'})
        //
        // var highlight1 = $('.codeup').css('background-color', 'red');
        //
        //
        // var highlight2 = $('.par').css('background-color', 'blue');
        //
        //
        // var highlight3 = $('.list').css('background-color', 'gold');
        //
        // var alertH1 = $('#hdg1').html();
        // alert('ALERT H1');
        //

        // MULTIPLE SELECTORS
           var combined = $('h1, p, ul').css({
                   'background-color': 'blue',
                   'border': '5px solid gold',
                   'color': 'white',
                   'font-size': '20px',

           });


});