module.exports = (sequelize, type) => {
    return sequelize.define('orders', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        date: {
            type: type.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('GETDATE'),
            validate: {
                max: sequelize.fn('GETDATE')
            }
        },
        state: {
            type: type.STRING,
            allowNull: false,
            defaultValue: 'AWAITING',
            validate: {
                isIn: [['AWAITING', 'PAID', 'SENT']]
            }
        }
    },
    {
        freezeTableName: true
    });
}