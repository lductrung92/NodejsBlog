var Category = require("../../models").Category;

module.exports = {
    index: function(req, res) {
        Category.findAll().then(function(categories){
            res.render("admin/category/list",{ categories: categories});
        }).error(function(err) {
            throw err;
        });
    },
    
};