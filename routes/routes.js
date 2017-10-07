var express = require('express'),
    routes = express.Router(),
    admin = require("../app/controlles/admin/index");
    
module.exports = function(app) {
    routes.get('/administrator/dashboard', admin.DashboardController.index);

    //categories
    routes.get('/administrator/category/list', admin.CategoryController.index);
    routes.get('/administrator/category/insert', admin.CategoryController.showFormInsert);
    routes.post('/administrator/category/insert', admin.CategoryController.insert);

    app.use(routes);
}