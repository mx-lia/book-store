module.exports = (sequelize, type) => {
    return sequelize.define('genres', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
            type: type.STRING(100),
            allowNull: false,
            unique: true
        }
    },
    {
        freezeTableName: true
    });
}