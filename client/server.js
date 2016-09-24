var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(8000, function () {
    console.log('App listening on port 8000!');
});