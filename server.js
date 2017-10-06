var express = require("express"),
    app = express(),
    config = require('./config/configure'),
    path = require("path");

app = config(app);

app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});