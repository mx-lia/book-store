module.exports = (sequelize, type) => {
    return sequelize.define('book_genres', {}, {
        freezeTableName: true
    });
}