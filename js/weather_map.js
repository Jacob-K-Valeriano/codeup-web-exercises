// "use strict"
//
// var startLat = 21.3069
// var startLong = 157.8583
//
//
// function updateWeatherCardInfo(lat, lng) {
//     $.get("http://api.openweathermap.org/data/2.5/forecast?appid=bd3ec46a553181ff8da235a51eb233fd&units=imperial&lat="
//         + startLat + "&lon=" + startLong).done(function(data){
//
//
//         $('#city-name').html("Selected City: " + data.city.name);
//
//
// $('#mainTempMax1').html("<p>High & Low: " + roundTemperatures(data.list[0].main.temp_max)+ "&#8457 / "
//     + roundTemperatures(data.list[0].main.temp_min) + "&#8457</p>");
// $('#mainTempMin1').html("<p>Currently: " + roundTemperatures(data.list[0].main.temp) + "&#8457</p>");
// $('#wind1').html("<p>Humidity: " + data.list[0].main.humidity + "%</p>");
// $('#pressure1').html("<p>Wind Speed: " + data.list[0].wind.speed + "mph</p>");
//
//     });
// }
// //function call to trigger weather card builder
// updateWeatherCardInfo(startLat, startLong);


"use strict";

// ===================================   ** global vars  **    ============================================== \\

// var lat = 29.42;
// var lng = -98.49;

// ===================== ** weather card builder with AJAX request to weatherAPI ** ============================== \\

function updateWeatherCardInfo(lat, lng) {
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OWM_TOKEN,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {

        // console log to view all data
        console.log(data);

        //displays the city name of wherever the marker is dropped
        $('#city-name').html("Selected City: " + data.city.name);
        // console.log(data.list[0].weather[0].icon);
        //01d icon code

        //refactor building cards by using a loop of some kind. DRY:(
        //single day display card needed

        // weather card info for day 1
        $('#high-low-temp1').html("<p>High & Low: " + roundTemperatures(data.list[0].main.temp_max)+ "&#8457 / "
            + roundTemperatures(data.list[0].main.temp_min) + "&#8457</p>");
        $('#current-temp1').html("<p>Currently: " + roundTemperatures(data.list[0].main.temp) + "&#8457</p>");
        $('#humidity1').html("<p>Humidity: " + data.list[0].main.humidity + "%</p>");
        $('#windspeed1').html("<p>Wind Speed: " + data.list[0].wind.speed + "mph</p>");
        // $('#weather-icon').css('background-image', "http://openweathermap.org/img/w/10d.png");

        // weather card info for day 2
        $('#high-low-temp2').html("<p>High & Low: " + roundTemperatures(data.list[8].main.temp_max) + "&#8457 / "
            + roundTemperatures(data.list[8].main.temp_min) + "&#8457</p>");
        $('#current-temp2').html("<p>Currently: " + roundTemperatures(data.list[8].main.temp) + "&#8457</p>");
        $('#humidity2').html("<p>Humidity: " + data.list[8].main.humidity + "%</p>");
        $('#windspeed2').html("<p>Wind Speed: " + data.list[8].wind.speed + "mph</p>");

        //weather card info for day 3
        $('#high-low-temp3').html("<p>High & Low: " + roundTemperatures(data.list[16].main.temp_max) + "&#8457 / "
            + roundTemperatures(data.list[16].main.temp_min) + "&#8457</p>");
        $('#current-temp3').html("<p>Currently: " + roundTemperatures(data.list[16].main.temp) + "&#8457</p>");
        $('#humidity3').html("<p>Humidity: " + data.list[16].main.humidity + "%</p>");
        $('#windspeed3').html("<p>Wind Speed: " + data.list[16].wind.speed + "mph</p>");

        // weather card info for day 4
        $('#high-low-temp4').html("<p>High & Low: " + roundTemperatures(data.list[24].main.temp_max) + "&#8457 / "
            + roundTemperatures(data.list[24].main.temp_min) + "&#8457</p>");
        $('#current-temp4').html("<p>Currently: " + roundTemperatures(data.list[24].main.temp) + "&#8457</p>");
        $('#humidity4').html("<p>Humidity: " + data.list[24].main.humidity + "%</p>");
        $('#windspeed4').html("<p>Wind Speed: " + data.list[24].wind.speed + "mph</p>");

        // weather card info for day 5
        $('#high-low-temp5').html("<p>High & Low: " + roundTemperatures(data.list[24].main.temp_max) + "&#8457 / "
            + roundTemperatures(data.list[24].main.temp_min) + "&#8457</p>");
        $('#current-temp5').html("<p>Currently: " + roundTemperatures(data.list[24].main.temp) + "&#8457</p>");
        $('#humidity5').html("<p>Humidity: " + data.list[24].main.humidity + "%</p>");
        $('#windspeed5').html("<p>Wind Speed: " + data.list[24].wind.speed + "mph</p>");

    });
}
//function call to trigger weather card builder
updateWeatherCardInfo(lat, lng);


// =================================     ** google map functionality **      ================================= \\

function initMap() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        zoom: 13,
        center: {
            lat: lat,
            lng: lng
        }
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        draggable: true,
        position: {
            lat: lat,
            lng: lng
        },
        map: map
    });


    // event listener to store updated lat and lng when marker is dragged, info passed to
    google.maps.event.addListener(marker, 'dragend', function(e){
        var lat = marker.getPosition().lat();
        var lng = marker.getPosition().lng();

        updateWeatherCardInfo(lat, lng);
    });

}
// ===========================  ** additional function features & EVENTS ** =================================== \\

// function wrapped around weather temps to round to the nearest whole number
function roundTemperatures(num){
    return Math.round(num);
}

// click event to display 5 day forecast
$('#display-5-day-forecast').on('click', function(){
    $('div .card:hidden').show();
    $('#single-day-display').hide();
});

// click event to revert back to 3 day forecast
$('#display-3-day-forecast').on('click', function(){
    $('#day-four, #day-five').hide();
    $('#day-one, #day-two, #day-three').show();
    $('#single-day-display').hide();
});

// click event for single day display
$('#single-day-display-btn').click(function(){
    $('#day-one,#day-two, #day-three, #day-four, #day-five').hide();
    $('#single-day-display').show();
});

// slide up feat for weather buttons
// $('#weather-feat-1').