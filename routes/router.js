const {Router} = require('express');

const router = Router();

const customerController = require('../controllers/customer-controller');
const orderController = require('../controllers/order-controller');
const bookController = require('../controllers/book-controller');

router.post('/login', customerController.authenticate);

router.post('/register', customerController.register);

router.get('/customers', customerController.getAll);

router.get('/customer/:id', customerController.getById);

router.put('/customer/:id', customerController.update);

router.delete('/customer/:id', customerController.remove);

router.post('/order/create', orderController.create);

router.post('/book/create', bookController.create);

module.exports = router;