/**
 * Created by camel on 2015-10-14.
 */
'use strict';
var app = app || {};
app.apiCalls = (function () {
    return {
        loadDoc: function () {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    console.log(xhttp.responseText);
                    document.querySelector(".content").innerHTML = xhttp.responseText;
                }
            };
            xhttp.open("GET", "http://localhost:3000/movies", true);
            xhttp.send();
        },
        getAllTitles: function () {
            var url = 'http://localhost:3000/movies';
            $.get(url, function (responseData) {
                console.log(responseData);
                for(var i = 0; i < responseData.length; i++) {
                    $(".content").append("<p>" + responseData.records[i].title + "</p>");
                }
            });
        }
    };
}()
);
