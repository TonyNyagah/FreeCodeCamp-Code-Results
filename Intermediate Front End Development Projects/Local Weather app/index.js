function coordinates() {
    var output = document.getElementById("out");
    var apiKey = "609e2ce1011e23134092815b5d9c7787";
    var html = "";

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    }

    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" +
            apiKey;

        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
        console.log(weatherURL);

        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

        $.getJSON(weatherURL, function(weatherData) {
            console.log(weatherData);
            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>' + '<br><p>Location is ' + weatherData.name + '.</p>';
        })
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }

    var options = {
        enableHighAccuracy: true
    }

    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error, options);
}