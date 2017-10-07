var Sequelize = require('sequelize'),
    connect = require("../../config/database");

var sequelize = connect();

const Category = sequelize.define('categories', {
    categoryId: {type: Sequelize.INTEGER},
    autolysis: {type: Sequelize.INTEGER},
    name: {type: Sequelize.STRING},
    slug: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    status: {type: Sequelize.BOOLEAN}
});

Category.hasMany(Category, {foreignKey: 'categoryId', as:'category'});
Category.belongsTo(Category, {foreignKey: 'id', targetKey: 'categoryId'});

Category.sync();

module.exports = Category;