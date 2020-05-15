const argon2 = require("argon2");
const rolesConfig = require("../config/roles-config");

module.exports = (sequelize, type) => {
  return sequelize.define(
    "customers",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: type.INTEGER,
        defaultValue: rolesConfig.CUSTOMER_ROLES.user,
      },
      firstName: {
        type: type.STRING(100),
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: type.STRING(100),
        allowNull: false,
        field: "last_name",
      },
      email: {
        type: type.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: type.STRING,
      postalCode: {
        type: type.STRING(6),
        field: "postal_code",
      },
      country: type.STRING(50),
      city: type.STRING(50),
      street: type.STRING(100),
      buildingNo: type.INTEGER,
      flatNo: type.INTEGER,
      phoneNumber: {
        type: type.STRING(9),
        validate: {
          isOnlyDigits(value) {
            if (!parseInt(value)) {
              throw new Error("Phone number must contain only digits.");
            }
          },
        },
      },
    },
    {
      hooks: {
        beforeSave: async (customer, options) => {
          if (customer.password) {
            customer.password = await argon2.hash(customer.password);
          }
        },
      },
      freezeTableName: true,
    }
  );
};
