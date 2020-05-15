module.exports = (sequelize, type) => {
  return sequelize.define(
    "orders_details",
    {
      amount: {
        type: type.INTEGER,
        allowNull: false,
        validate: {
          isGreaterThanZero(value) {
            if (parseInt(value) <= 0) {
              throw new Error("Amount must be greater than zero.");
            }
          },
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
};
