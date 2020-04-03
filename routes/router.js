const {Router} = require('express');

const router = Router();

const customerController = require('../controllers/customer-controller');

router.post('/login', customerController.login);

router.post('/register', customerController.register);

router.post('/token', customerController.token);

router.post('/logout', customerController.logout);

module.exports = router;