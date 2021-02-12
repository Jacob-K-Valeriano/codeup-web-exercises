'use strict';

//---------------- MAPBOX ----------------------//>

mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-97.7431, 30.2672],
    zoom: 9,
});

//---------------- ADDS MARKER ----------------------//>

var marker = new mapboxgl.Marker()
    .setLngLat([-97.7431, 30.2672])
    .addTo(map)
    .setDraggable(true);

//---------------- RETURNS LAT/LONG OF MARKER ----------------------//>

function onDragEnd () {
    reverseGeocode(marker.getLngLat(), MAPBOX_TOKEN).then(function(results) {
        $('#current-city').text(results);
        console.log(results);
    });
}

//---------------- ALLOWS MARKER TO UPDATE LOCATION ----------------------//>

marker.on('dragend', function () {
    onDragEnd();
    var lngLat = marker.getLngLat();
    let weatherOptions = {
        lat: lngLat.lat,
        lon: lngLat.lon,
        appid: OWM_TOKEN,
        exclude: 'minutely, current, hourly',
        units: 'imperial'
    };
    $('#weather').html('');
    locationWeather();
});

//---------------- GEOCODE AND REVERSE GEOCODE ----------------------//>

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            return data.features[0].center;
        });
}
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}

//---------------- GETS VALUE OF SEARCH INPUT ----------------------//>

var searchInput = $('#input-place').keyup(function() {
    var value = $(this).val();
});

//---------------- GEOCODE SEARCH ---------------------------------//>

$('#submit').click(function () {
    geocode(searchInput.val(), MAPBOX_TOKEN).then(function(results) {
        map.setCenter(results);
        marker.setLngLat(results);
        map.setZoom(9);
//---------------- UPDATES CURRENT CITY WITH SEARCH RESULT ---------------------------------//>
        reverseGeocode(marker.getLngLat(), MAPBOX_TOKEN).then(function(results) {
            $('#current-city').text(results);
            console.log(results);
        });
        $('#weather').html('');


        var weatherForecast = 'https://api.openweathermap.org/data/2.5/onecall';
        var weatherOptions = {
            lat: results[1],
            lon: results[0],
            appid: OWM_TOKEN,
            exclude: 'minutely, current, hourly',
            units: 'imperial'

        };

        $.get(weatherForecast, weatherOptions).done(function (data) {
            console.log(data);
            let itemHTML = '';
            $.each(data.daily, function (index, value) {
                // let icon = value.daily[i].weather[0].icon
                let date = new Date(value.dt * 1000);
                let description = value.weather[0].description;
                let tempMax = value.temp.max;
                let tempMin = value.temp.min;
                let iconCode = value.weather[0].icon;
                let iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                let wind = value.wind_speed;
                let clouds = value.clouds;
                let pressure = value.pressure;
                if (index === 5) {
                    return false
                }
                itemHTML += "<div class='weather-card one' >"
                itemHTML += "<div class='top'>"
                itemHTML += "<div class='wrapper'>"
                itemHTML += "<h1 class='heading'>" + date + "</h1>"
                itemHTML += "<h3 class='location'>" + description + "</h3>"
                itemHTML += "<p class='temp'>"
                itemHTML += "<span class='tempValue'>" + iconurl + ".png'</span>";
                itemHTML += "<span class='deg'>" + tempMax + "°F" + " / " + tempMin + "°F" + "</span>"
                itemHTML += "</p>"
                itemHTML += "</div>"
                itemHTML += "</div>"
                itemHTML += "<div class='bottom'>"
                itemHTML += "<div class='wrapper'>"
                itemHTML += "<ul class='forecast'>"
                itemHTML += "<li class='active'>"
                itemHTML += "<div class='bottom'>"
                itemHTML += "<span class='wind'>" + "Wind" + "</span>"
                itemHTML += "<span class='lnr lnr-flag condition'>"
                itemHTML += "<span class='windspeed'>" + wind + "</span>"
                itemHTML += "<span class='wind-speed'>" + "MPH" + "</span>"
                itemHTML += "</span>"
                itemHTML += "</li>"
                itemHTML += "<li class='active'>"
                itemHTML += "<span class='clouds'>" + "Clouds" + "</span>"
                itemHTML += "<span class='lnr lnr-cloud condition'>"
                itemHTML += "<span class='cloudHeight'>" + clouds + "</span>"
                itemHTML += "<span class='footNotation'>" + "FT" + "</span>"
                itemHTML += "</li>"
                itemHTML += "<li class='active'>"
                itemHTML += "<span class='pressure'>" + "Pressure" + "</span>"
                itemHTML += "<span class='lnr lnr-pilcrow condition'>"
                itemHTML += "<span class='pressureNumber'>" + pressure + "</span>"
                itemHTML += "</li>"
                itemHTML += "</ul>"
                itemHTML += "</div>"
                itemHTML += "</div>"
                itemHTML += "</div>"
            });

            $('#weather').append(itemHTML);

        });
    });
});

//---------------- UPDATES WEATHER WITH MARKERS LOCATION ON DRAG ---------------------------------//>

function locationWeather () {
    var lngLat = marker.getLngLat();
    var weatherForecast = 'https://api.openweathermap.org/data/2.5/onecall';
    var weatherOptions = {
        lat: lngLat.lat,
        lon: lngLat.lng,
        appid: OWM_TOKEN,
        exclude: 'minutely, current, hourly',
        units: 'imperial'

    };
    $.get(weatherForecast, weatherOptions).done(function (data) {
        console.log(data);
        let itemHTML = '';
        $.each(data.daily, function (index, value) {
            // let icon = value.daily[i].weather[0].icon
            let date = new Date(value.dt * 1000);
            let description = value.weather[0].description;
            let tempMax = value.temp.max;
            let tempMin = value.temp.min;
            let iconCode = value.weather[0].icon;
            let iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
            let wind = value.wind_speed;
            let clouds = value.clouds;
            let pressure = value.pressure;
            if (index === 5) {
                return false
            }
            itemHTML += "<div class='weather-card one' >"
            itemHTML += "<div class='top'>"
            itemHTML += "<div class='wrapper'>"
            itemHTML += "<h1 class='heading'>" + date + "</h1>"
            itemHTML += "<h3 class='location'>" + description + "</h3>"
            itemHTML += "<p class='temp'>"
            itemHTML += "<span class='tempValue'>" + iconurl + ">" + "</span>";
            itemHTML += "<span class='deg'>" + tempMax + "°F" + " / " + tempMin + "°F" + "</span>"
            itemHTML += "</p>"
            itemHTML += "</div>"
            itemHTML += "</div>"
            itemHTML += "<div class='bottom'>"
            itemHTML += "<div class='wrapper'>"
            itemHTML += "<ul class='forecast'>"
            itemHTML += "<li class='active'>"
            itemHTML += "<div class='bottom'>"
            itemHTML += "<span class='wind'>" + "Wind" + "</span>"
            itemHTML += "<span class='lnr lnr-flag condition'>"
            itemHTML += "<span class='windspeed'>" + wind + "</span>"
            itemHTML += "<span class='wind-speed'>" + "MPH" + "</span>"
            itemHTML += "</span>"
            itemHTML += "</li>"
            itemHTML += "<li class='active'>"
            itemHTML += "<span class='clouds'>" + "Clouds" + "</span>"
            itemHTML += "<span class='lnr lnr-cloud condition'>"
            itemHTML += "<span class='cloudHeight'>" + clouds + "</span>"
            itemHTML += "<span class='footNotation'>" + "FT" + "</span>"
            itemHTML += "</li>"
            itemHTML += "<li class='active'>"
            itemHTML += "<span class='pressure'>" + "Pressure" + "</span>"
            itemHTML += "<span class='lnr lnr-pilcrow condition'>"
            itemHTML += "<span class='pressureNumber'>" + pressure + "</span>"
            itemHTML += "</li>"
            itemHTML += "</ul>"
            itemHTML += "</div>"
            itemHTML += "</div>"
            itemHTML += "</div>"

        });

        $('#weather').append(itemHTML);
    });

}

// // ---------------- INITIAL WEATHER ON LOAD ----------------------//>
// function starterWeather () {
//     var weatherForecast = 'https://api.openweathermap.org/data/2.5/onecall';
//     var weatherOptions = {
//         lat: 30.2672,
//         lon: -97.7431,
//         appid: OPEN_WEATHER_APPID,
//         exclude: 'minutely, current, hourly',
//         units: 'imperial'
//
//
//     }
//
//
//     };