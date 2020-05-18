module.exports = (sequelize, type) => {
  return sequelize.define(
    "favourite_books",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
