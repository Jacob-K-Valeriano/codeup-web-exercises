// Show Me button
$( "#ShowMe" ).click(function() {
    $( ".invisible" ).toggle();
});


// Highlight dt elements
$("dt").click(function () {
    $(this).toggleClass("dt");
    // $(this).css("background","magenta");
});


// Yellow Highlight Button
$("#yellow").click(function() {
    $('ul').each(function(index, element) {
        $(element).children().last().toggleClass("highlight");
    });
});

// All LI's under H3 Clicked Bold
$("h3").click(function() {
    $(this).next().children().toggleClass("makeBold")
});

// First Li Blue
$("li").click(function() {
    $(this).parent().children().first().toggleClass("colorBlue")
});