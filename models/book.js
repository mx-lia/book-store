module.exports = (sequelize, type) => {
  return sequelize.define(
    "books",
    {
      isbn: {
        type: type.STRING(13),
        primaryKey: true,
      },
      title: {
        type: type.STRING(100),
        allowNull: false,
      },
      description: type.TEXT,
      publicationDate: {
        type: type.DATEONLY,
        field: "publication_date",
      },
      language: { type: type.STRING(15), allowNull: false },
      format: {
        type: type.STRING,
        allowNull: false,
      },
      pages: {
        type: type.INTEGER,
        allowNull: false,
        validate: {
          isGreaterThanZero(value) {
            if (parseInt(value) <= 0) {
              throw new Error("Amount of pages must be greater or equal than zero.");
            }
          },
        },
      },
      availableQuantity: {
        type: type.INTEGER,
        allowNull: false,
        field: "available_quantity",
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
      price: {
        type: type.DECIMAL(6, 2),
        allowNull: false,
        validate: {
          isGreaterThanZero(value) {
            if (parseInt(value) <= 0) {
              throw new Error("Price must be greater than zero.");
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
