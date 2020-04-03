const jwt = require('jsonwebtoken');
const {Customer} = require('../sequelize');

const serverConfig = require('../config/server-config');
const customerService = require('../services/customer-service');

const JWT_SECRET = serverConfig.JWT_SECRET;
const JWT_REFRESH_SECRET = serverConfig.JWT_REFRESH_SECRET;
const refreshTokens = [];

exports.login = async (req, res) => {
    const {login, passwordHash} = req.body;
    const customer = await customerService.getByLoginAndHashPassword(login, passwordHash);
    if (customer) {
        const accessToken = jwt.sign({ login: customer.login }, JWT_SECRET, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ login: customer.login }, JWT_REFRESH_SECRET);
        refreshTokens.push(refreshToken);
        res.json({
            accessToken,
            refreshToken
        });
    } else {
        res.send('Login or password incorrect');
    }
};

exports.register = async (req, res) => {
    const {firstName, lastName, login, passwordHash} = req.body;
    const customer = await customerService.getByLogin(login);
    if (customer) {
        return res.status(401).json({message: 'The email address you have entered is already associated with another account.'});
    };
    const newCustomer = await customerService.create(firstName, lastName, login, passwordHash);
    const accessToken = jwt.sign({ login: newCustomer.login }, JWT_SECRET, { expiresIn: '20m' });
    const refreshToken = jwt.sign({ login: newCustomer.login }, JWT_REFRESH_SECRET);
    refreshTokens.push(refreshToken);
    res.json({
        accessToken,
        refreshToken
    });
};

exports.token = (req, res) => {
    const token = req.body;
    if (!token) {
        return res.sendStatus(401);
    }
    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }
    jwt.verify(token, JWT_REFRESH_SECRET, (err, customer) => {
        if (err) {
            return res.sendStatus(403);
        }
        const accessToken = jwt.sign({ login: customer.login }, JWT_SECRET, { expiresIn: '20m' });
        res.json({
            accessToken
        });
    });
};

exports.logout = (req, res) => {
    const token = req.body;
    refreshTokens = refreshTokens.filter(t => t !== token);
    res.send("Logout successful");
};
