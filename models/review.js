module.exports = (sequelize, type) => {
  return sequelize.define(
    "reviews",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: type.DATEONLY,
        allowNull: false,
        defaultValue: sequelize.fn("GETDATE"),
        validate: {
          max: sequelize.fn("GETDATE"),
        },
      },
      text: {
        type: type.TEXT,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
