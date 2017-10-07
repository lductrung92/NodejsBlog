var Category = require("../../models").Category;
var getSlug = require('speakingurl');

function showOptionCategories(categories, id = 0, parent_id = 0,  char = '') {
    categories.forEach(function(category) {
        console.log(category.id);
    });
}

module.exports = {
    index: function(req, res) {
        Category.findAll().then(function(categories){
            res.render("admin/category/list",{ categories: categories});
        }).error(function(err) {
            throw err;
        });
    },
    showFormInsert: function(req, res) {
        Category.findAll({
            where: {
                categoryId: 0
            },
            attributes: ['id', 'name']
        }).then(function(categories){
            res.render("admin/category/insert",{ categories: categories, csrfToken: req.csrfToken()});
        }).error(function(err) {
            throw err;
        });
    },
    insert: function(req, res) {
        req.checkBody('selCate', 'Genre name required').notEmpty(); 
        var errors = req.validationErrors();
        if(errors) {
            console.log(errors);
            res.end();
        } else {
            console.log(getSlug(req.body.txtSlug));
        }
        
    }
};