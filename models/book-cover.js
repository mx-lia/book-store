module.exports = (sequelize, type) => {
    return sequelize.define('books_covers', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        fileName: {
            type: type.STRING(100),
            allowNull: false,
            field: 'file_name'
        },
        fileExtension: {
            type: type.STRING(4),
            allowNull: false,
            field: 'file_extension'
        },
        image: {
            type: type.BLOB,
            allowNull: false
        }
    },
    {
        freezeTableName: true
    });
}