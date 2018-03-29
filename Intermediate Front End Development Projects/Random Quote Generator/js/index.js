$(document).ready(function() {
  $("#getMessage").on("click", function() {
    /*
            // with getJSON
            $.getJSON("https://api.github.com/users/TonyNyagah", function(data) {
                $(".message").html(JSON.stringify(data));
            });
            */
    /*
            // with $.ajax()
            $.ajax({
                url: "https://api.github.com/users/TonyNyagah",
                dataType: "json",
                success: function(data){
                    $(".message").html(JSON.stringify(data));
                }
            });
            */
    // now get a random quote from a site with HTTPS
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
      headers: {
        "X-Mashape-Key": "hoTnRMrQUkmshFojXahmqJXa7cl8p1OY1uBjsnwNtkRylnK9sh"
      },
      method: "POST",
      contentType: "application/x-www-form-urlencoded",
      dataType: "json",
      success: function(data) {
        /* $(".message").html(JSON.stringify(data)); */
        var html = "";
        html +=
          "<blockquote>" +
          data.quote +
          "<footer><cite>" +
          data.author +
          "</cite></footer></blockquote>";
        $(".message").html(html);

        var encodedQuote = encodeURIComponent(data.quote);
        var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodedQuote;

        $("a").attr("href", tweetUrl);
        /*
                    console.log(data);
                    console.log(encodedQuote);
                    console.log(tweetUrl);
                    */
      }
    });
  });
});