(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
     planetsArray = planetsString.split("|");
    console.log(planetsArray);


    var brPlanets = planetsArray.join("<br/>");
    console.log(brPlanets);

    B O N U S
    var arr = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    var list = "<ul>";

    for(let i = 0; i < arr.length; i++) {
        list += "<li>" + arr[i] + "</li>";
    }
    list += "</ul>";

    var strList = list.split(',');

    // var listOfPlanets = "<ul><li>" + planetsArray.join("</li>" + "<li>") + "</li></ul>";
    // console.log(listOfPlanets);
    // document.getElementById("here").innerHTML = listOfPlanets
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */



})();
