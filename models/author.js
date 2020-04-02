module.exports = (sequelize, type) => {
    return sequelize.define('authors', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        firstName: {
            type: type.STRING(100),
            allowNull: false,
            field: 'first_name'
        },
        secondName: {
            type: type.STRING,
            allowNull: false,
            field: 'second_name'
        }
    },
    {
        freezeTableName: true
    });
}