var path = require("path"),
    express = require("express"),
    bodyParser = require("body-parser"),
    routes = require("../routes/routes"),
    methodOverride = require('method-override'),
    morgan = require("morgan");
    


module.exports = function(app) {

    app.use(morgan("dev"));
    app.use(methodOverride());
    
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

    app.set("view engine", "ejs");
    app.use(express.static(path.join(__dirname, '../public')));

    app.set('port', process.env.LISTEN_PORT || 80);
    app.set("views", __dirname + "./../resources/views");

    routes(app);

    return app;
}
