module.exports = (sequelize, type) => {
  return sequelize.define(
    "authors",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: type.STRING(100),
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: type.STRING,
        allowNull: false,
        field: "last_name",
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["first_name", "last_name"],
        },
      ],
      freezeTableName: true,
    }
  );
};
