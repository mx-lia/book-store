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
        defaultValue: sequelize.fn("GETDATE"),
        allowNull: false,
      },
      text: {
        type: type.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
