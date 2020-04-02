module.exports = (sequelize, type) => {
    return sequelize.define('books', {
        isbn: {
          type: type.STRING,
          primaryKey: true
        },
        title: {
            type: type.STRING(100),
            allowNull: false
        },
        edition: type.INTEGER,
        availableQuantity: {
            type: type.INTEGER,
            allowNull: false,
            field: 'available_quantity'
        },
        price: {
            type: type.DECIMAL(6,2),
            allowNull: false
        }
    },
    {
        freezeTableName: true
    });
}