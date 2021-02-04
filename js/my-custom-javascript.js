"use strict"

$(document).ready(function() {
        // alert( 'The DOM has finished loading!' );


        // ID SELECTORS
        // content1
        // $('#hdg1').css('color', 'red');
        // //
        // //
        // // content2
        // $('#p2').css('color', 'blue');
        // //
        // //
        // // content3
        // $('#p3').css('color', 'gold');


        // CLASS SELECTORS
        // border
        // $('.codeup').css({'border': '1px solid red'})


        // ELEMENT SELECTORS
        // fontSize
        // $('.changeSize').css('font-size', '20px')
        //
        // // highlight1
        //     $('h1').css('background-color', 'red');
        //
        //
        // // highlight2
        // $('.par').css('background-color', 'blue');
        //
        //
        // // highlight3
        // $('.list').css('background-color', 'gold');
        //
        // alertH1
        // $('#hdg1').html();
        // alert('ALERT H1');
        //
        // alert($('#hdg1').html());



        // MULTIPLE SELECTORS
        //    var combined =
        // //
        //        $('h1, p, li').css({
        //            'background-color': 'skyblue',
        //            'border': '5px solid gold',
        //            'color': 'white',
        //            'font-size': '30px',
        //
        //    });

        // MOUSE EVENTS

    // (function () {
    //     let hdG = $('#hdg1');
    //
    //     let backGround = function () {
    //         hdG.css('background-color', '');
    //         $(this).css('background-color', 'purple');
    //     }
    //     hdG.click(backGround);
    //
    // })()
    //




         $('#hdg1').click(
        function() {
            $(this).css('background-color', 'purple');
        });


    (function () {
        let paRs = $('p');

        let makeLarger = function () {
            paRs.css('font-size', '');
            $(this).css('font-size', '18px');
        }
        paRs.dblclick(makeLarger);

    })()

        // $('p').dblclick(
        // function() {
        //     $(this).css('font-size', '18px');
        // });

        $('li').hover(
            function() {
                $(this).css('color', 'red');
            },
            function() {
                $(this).css('color', 'black');
            }
        );



    $('h1, p, li').click(
        function() {
            $(this).css('font-size', '');
        },
        function() {
            $(this).css('font-size', '30px');
        }
    );



    // $('.hover').hover(
    //     function() {
    //         $(this).css('color', '', display, onpageshow());
    //     },
    //     function() {
    //         $(this).css('color', 'yellow ');
    //     }
    // );
    //





});