const {Customer} = require('../sequelize');

exports.getByLoginAndHashPassword = async (login, passwordHash) => {
    let customer;
    await Customer.findOne({
        where: {
            login: login,
            passwordHash: passwordHash
        }
    }).then(res => {
        if(res != null)
        customer = {id: res.id, firstName: res.firstName, lastName: res.lastName,
            login: res.login, passwordHash: res.passwordHash, postalCode: res.postalCode,
            street: res.street,
            buldingNo: res.buldingNo,
            flatNo: res.flatNo,
            city: res.city,
            phoneNumber: res.phoneNumber};
    });
    return customer;
};

exports.getByLogin = async (login) => {
    let customer;
    await Customer.findOne({
        where: {
            login: login
        }
    }).then(res => {
        if(res != null)
        customer = {id: res.id, firstName: res.firstName, lastName: res.lastName,
            login: res.login, passwordHash: res.passwordHash, postalCode: res.postalCode,
            street: res.street,
            buldingNo: res.buldingNo,
            flatNo: res.flatNo,
            city: res.city,
            phoneNumber: res.phoneNumber};
    });
    return customer;
};

exports.create = async (firstName, lastName, login, passwordHash) => {
    let customer;
    await Customer.create({
        firstName: firstName,
        lastName: lastName,
        login: login,
        passwordHash: passwordHash
    }).then(res => {
        if(res != null)
        customer = {id: res.id, firstName: res.firstName, lastName: res.lastName,
            login: res.login, passwordHash: res.passwordHash, postalCode: res.postalCode,
            street: res.street,
            buldingNo: res.buldingNo,
            flatNo: res.flatNo,
            city: res.city,
            phoneNumber: res.phoneNumber};
    });
    return customer;
};