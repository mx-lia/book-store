module.exports = (sequelize, type) => {
  return sequelize.define(
    "books_genres",
    {},
    {
      freezeTableName: true,
    }
  );
};
