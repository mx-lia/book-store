module.exports = (sequelize, type) => {
  return sequelize.define(
    "books_covers",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      contentType: {
        type: type.STRING(10),
        allowNull: false,
        field: "content_type",
      },
      image: {
        type: type.BLOB,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
