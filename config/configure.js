var path = require("path"),
    express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require('cookie-parser'),
    expressValidator = require('express-validator'),
    routes = require("../routes/routes"),
    methodOverride = require('method-override'),
    csrf = require('csurf'),
    morgan = require("morgan");
   


module.exports = function(app) {

    app.use(morgan("dev"));
    app.use(methodOverride());
    
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
    app.use(expressValidator());
    app.use(cookieParser());
    app.use(csrf({ cookie: true }));

    app.set("view engine", "ejs");
    app.use(express.static(path.join(__dirname, '../public')));

    app.set('port', process.env.LISTEN_PORT || 80);
    app.set("views", __dirname + "./../resources/views");

    routes(app);

    app.use(function (err, req, res, next) {
        if (err.code !== 'EBADCSRFTOKEN') return next(err);
      
        // handle CSRF token errors here
        res.status(403);
        res.send('form tampered with');
    });

    return app;
}
