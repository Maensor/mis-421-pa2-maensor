var len;
var results = '';
var dt;

function apiSearch() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
            url: 'https://maensor-421-search-api.cognitiveservices.azure.com/bing/v7.0/search/?' + $.param(params),
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "05f3dc9eae2041edbc0b33d6b134d142");
            },
            type: "GET",
        })
        .done(function (data) {
            len = data.webPages.value.length;
            for (var i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert("error");
        });
}
$(document).ready(function () {
    $('#searchButton').click(function () {
        apiSearch();
    });
    $('#header').click(function () {
        $('body').css('background-image', 'url(https://images.unsplash.com/photo-1524461432866-0d3e7841904e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)');
    });
    $('#timeButton').click(function () {
        var dt = new Date();
        var hours = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours();
        var am_pm = dt.getHours() >= 12 ? "PM" : "AM";
        var minutes = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();
        var time = hours + ":" + minutes+ " " + am_pm;
    
                          
        $('#time').html(time);
        $("#time").dialog();
    });
});
