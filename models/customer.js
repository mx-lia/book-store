module.exports = (sequelize, type) => {
    return sequelize.define('customers', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        firstName: {
            type: type.STRING(100),
            allowNull: false,
            field: 'first_name'
        },
        lastName: {
            type: type.STRING(100),
            allowNull: false,
            field: 'last_name'
        },
        login: {
            type: type.STRING(100),
            allowNull: false,
            unique: true
        },
        passwordHash: {
            type: type.STRING(100),
            allowNull: false,
            field: 'password_hash'
        },
        postalCode: {
            type: type.STRING(6),
            field: 'postal_code'
        },
        street: {
            type: type.STRING(100)
        },
        buldingNo: {
            type: type.STRING(5)
        },
        flatNo: type.STRING(5),
        city: {
            type: type.STRING(100)
        },
        phoneNumber: {
            type: type.STRING(9)
        }
    },
    {
        freezeTableName: true
    });
}