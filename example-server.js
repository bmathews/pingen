var express = require('express');
var app = express();
var markor = require('./markor');

// e.g, GET /1x/ff3300/marker.png?text=20
app.get('/:size/:color/marker.png', function(req, res) {
    var stream = markor(req.params.color, req.query.text, null, req.params.size === '2x' ? true : false);
    res.setHeader("Content-Type", "image/png");
    stream.on('data', function(chunk) {
        res.write(chunk);
    });
    stream.on('end', function () {
        res.end();
    });
});

// e.g, GET /2x/ff3300/fa-headpones/marker.png?text=20
app.get('/:size/:color/:icon/marker.png', function(req, res) {
    var stream = markor(req.params.color, req.query.text, req.params.icon, req.params.size === '2x' ? true : false);
    res.setHeader("Content-Type", "image/png");
    stream.on('data', function(chunk) {
        res.write(chunk);
    });
    stream.on('end', function () {
        res.end();
    });
});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});