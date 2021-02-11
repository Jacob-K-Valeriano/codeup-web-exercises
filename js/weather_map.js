(function () {
    "use strict";

    var lat = 21.3069;
    var long = -157.8583;
    let searchInput = $("#input")



    weatherMap();

    // <!-------------------                        OPEN WEATHER REQUEST             ------------------------>

    function weatherMap() {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OWM_TOKEN,
            lat: lat,
            lon: long,
            units: "imperial",
            exclude: "minutely,hourly",
        }).done(function (data) {
            handleResponse(data)
        });
    }

    // Iterates through pulled data and generates cards with 5 day information

    function handleResponse(data) {
        let itemHTML = "";
        for (let i = 0; i < 5; i++) {
            let icon = data.daily[i].weather[0].icon
            let date = data.daily[i].dt;
            let date1 = new Date(date * 1000);
            let date2 = date1.toLocaleDateString("en-US")
            itemHTML += "<div class='weather-card one' >"
            itemHTML += "<div class='top'>"
            itemHTML += "<div class='wrapper'>"
            itemHTML += "<h1 class='heading'>" + data.daily[i].name + "</h1>"
            itemHTML += "<h3 class='location'>" + data.daily[i].weather[0].description + "</h3>"
            itemHTML += "<p class='temp'>"
            itemHTML += "<span class='tempValue'>" + "<img src='http://openweathermap.org/img/wn/" + icon + ".png'>" + "</span>";
            itemHTML += "<span class='deg'>" + data.daily[i].temp.max + "°F" + " / " + data.daily[i].temp.min + "°F" + "</span>"
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
            itemHTML += "<span class='windspeed'>" + data.daily[i].wind_speed + "</span>"
            itemHTML += "<span class='wind-speed'>" + "MPH" + "</span>"
            itemHTML += "</span>"
            itemHTML += "</li>"
            itemHTML += "<li class='active'>"
            itemHTML += "<span class='clouds'>" + "Clouds" + "</span>"
            itemHTML += "<span class='lnr lnr-cloud condition'>"
            itemHTML += "<span class='cloudHeight'>" + data.daily[i].clouds + "</span>"
            itemHTML += "<span class='footNotation'>" + "FT" + "</span>"
            itemHTML += "</li>"
            itemHTML += "<li class='active'>"
            itemHTML += "<span class='pressure'>" + "Pressure" + "</span>"
            itemHTML += "<span class='lnr lnr-pilcrow condition'>"
            itemHTML += "<span class='pressureNumber'>" + data.daily[i].pressure + "</span>"
            itemHTML += "</li>"
            itemHTML += "</ul>"
            itemHTML += "</div>"
            itemHTML += "</div>"
            itemHTML += "</div>"
        }
        $("#post").html(itemHTML);
    }




}());