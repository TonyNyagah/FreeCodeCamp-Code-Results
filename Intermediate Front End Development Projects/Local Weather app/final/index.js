var apiKey = "609e2ce1011e23134092815b5d9c7787";

$(document).ready(function() {
    //check if geolocation is available
    if (navigator.geolocation) {
        console.log("Geolocation is available.");

        function success(position) {


            var units = 'metric';
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + '&units=' + units + "&appid=" +
                apiKey;

            $.getJSON(weatherURL, function(weatherData) {


                var weatherIconURL = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

                $('#location').html(weatherData.name + ", " + weatherData.sys.country);
                $('#temp').html(weatherData.main.temp + "°C");
                $('#condition').html(weatherData.weather[0].description);
                $('#weatherIcon').attr('src', weatherIconURL);

                $('#temp').on('click', function() {
                    if (units === 'metric') {

                        //console.log('Metric units.')

                        $('#temp').html('');
                        var fahrenheit = Math.round((weatherData.main.temp * 1.8) + 32);
                        $('#temp').html(fahrenheit + "°F");
                        units = 'imperial';
                    } else {
                        $('#temp').html('');
                        $('#temp').html(weatherData.main.temp + "°C");
                        units = 'metric';
                    }
                })
            })

        };

        function error() {
            console.log("Unable to retrieve your location.");
            $('#location').html("Unable to retrieve your location.");
        }

        var options = {
            enableHighAccuracy: true
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
        $('#location').html("Your browser doesn't support geolocation.");
    }
});