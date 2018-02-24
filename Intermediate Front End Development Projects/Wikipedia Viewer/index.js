$(document).ready(function() {
    console.log("READY!");
    $("input").on("keydown", function search(e) {

        var searchTerm = $('#mySearch').val();

        if (e.keyCode == 13) {

            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
            console.log(url);

            $.ajax({
                type: "GET",
                url: url,
                async: false,
                dataType: "json",
                success: function(data) {
                    // console.log(data[1][0]);
                    // console.log(data[2][0]);
                    // console.log(data[3][0]);
                    $('.suggestions').html('');
                    for (var i = 0; i < data[1].length; i++) {
                        $('.suggestions').prepend("<li><a href= " + data[3][i] + " target='_blank'" + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                    }
                },
                error: function(errorMessage) {
                    alert("Error");
                }
            });
        }
    });
});