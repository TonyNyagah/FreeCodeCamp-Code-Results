function myJsFunction() {
    /*
    gets predetermined users and streams
    */

    /*
    gets user input
    */
    let text = document.getElementById('user-input').value.toLowerCase().replace(/\s+/g, '');
    let userEndpoint = "https://wind-bow.glitch.me/twitch-api/users/";
    let streamEndpoint = "https://wind-bow.glitch.me/twitch-api/streams/";
    let userSearch = userEndpoint + text;
    let streamSearch = streamEndpoint + text;
    console.log(userSearch);
    fetch(userSearch).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(responseAsJson => {
            console.log(responseAsJson);
        })
        .catch(error => console.log('Looks like there was a problem: \n', error));

    console.log(streamSearch);
    fetch(streamSearch).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(responseAsJson => {
            console.log(responseAsJson);
        })
        .catch(error => console.log('Looks like there was a problem: \n', error));
}