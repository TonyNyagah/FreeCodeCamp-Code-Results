let streamapi = "https://wind-bow.glitch.me/twitch-api/streams/";
let channelapi = "https://wind-bow.glitch.me/twitch-api/channels/";
let channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "ninja", "beohoff", "ESL_SC2", "OgamingSC2", "comster404", "brunofin"];

function allStreamCall(streamchannel) {
    /* variables to hold relevant data */
    let logo, name, game, status, statusdesc, channel_link;

    let streamchannel_url = streamapi + streamchannel;
    let channel_url = channelapi + streamchannel;

    // call streaming channels API to see if it is streaming or not and if yes then what it is streaming

    fetch(streamchannel_url).then(response => {
        return response.json();
    }).then(streamData => {
        // console.log(streamData);
        if (streamData.status == '404') { /* if user not found */
            game = streamData.message;
            status = "offline";
            statusdesc = "";
        } else if (streamData.status == '422') { /* if user unavailable or closed their account */
            game = streamData.message;
            status = "offline";
            statusdesc = "";
        } else {
            streamData = streamData.stream;
            if (streamData === null) { /* means user is offline */
                game = "offline";
                status = "offline";
                statusdesc = "";
                logo = "http://www.gravatar.com/avatar/3c069b221c94e08e84aafdefb3228346?s=47&d=http%3A%2F%2Fwww.techrepublic.com%2Fbundles%2Ftechrepubliccore%2Fimages%2Ficons%2Fstandard%2Ficon-user-default.png";
            } else {
                game = streamData.channel.game;
                status = "online";
                statusdesc = ":" + streamData.channel.status;
            }
        }
        // call channels api to get channel informations like channel display name, logo and link url etc.
        fetch(channel_url).then(response => {
            return response.json();
        }).then(channelData => {
            console.log(channelData);
            name = channelData.display_name;
            logo = channelData.logo;
            channel_link = channelData.url;
            if (channelData.status == '404') { /* if channel not found */
                name = streamchannel;
                channel_link = "#";
                logo = "https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
            } else if (channelData.status == '422') { /* if channel unavailable or closed their account */
                name = streamchannel;
                channel_link = "#";
                logo = "https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
            } else if (logo === null) { /* if channel does not have a logo then show the following logo */
                logo = "https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
            }

            // prepare a row for the outcome in html
            let outcome = "\
      <div class='row' id='" + status + "'>\
        <div class='col-md-3 col-xs-4'>\
          <span class='logo'><img class='img img-circle' src='" + logo + "'></span>\
          <a href='" + channel_link + "'>\
            <span class='name text-center'>" + name + "</span>\
          </a>\
        </div>\
        <div class='col-md-9 col-xs-8 text-center' id='statusdescription'>\
          <span class='game'>" + game + "</span>\
          <span class='status'>" + statusdesc + "</span>\
        </div>\
      </div>";
            console.log(outcome);

            if (status == 'offline')
                $('.res').append(outcome);
            else
                $('.res').prepend(outcome);
        });
    });
};


$(document).ready(function() {
    /**
     * Calling allStreamCall function on every channel
     */
    channels.forEach(channel => {
        allStreamCall(channel);
    });

    /**
     * Show all channels when clicked on All button
     */
    $('#all').click(function() {
        var all = $('.res .row');
        all.each(function(index) {
            $(this).css({ 'display': 'block' });
        });
    });

    /**
     * Show Only online streaming channels and hide the offline ones.
     */
    $('#online').click(function() {
        var online = $('.res .row');
        online.each(function(index) {
            var toggle = $(this).attr('id');
            if (toggle == 'online') {
                $(this).css({ 'display': 'block' });
            } else if (toggle == 'offline') {
                $(this).css({ 'display': 'none' });
            }
        });
    });

    /**
     * Show Only offline channels
     */
    $('#offline').click(function() {
        var offline = $('.res .row');
        offline.each(function(index) {
            var toggle = $(this).attr('id');
            if (toggle == 'online') {
                $(this).css({ 'display': 'none' });
            } else if (toggle == 'offline') {
                $(this).css({ 'display': 'block' });
            }
        });
    });
});