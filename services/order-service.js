const { Order, OrderDetail } = require('../sequelize');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

async function getAll() {
    return await Order.findAll();
}

async function getById(id) {
    return await Order.findByPk(id);
}

async function create(order) {
    const newOrder = new Order(order);
    await newOrder.save();
    const newOrderDetail = new OrderDetail({book: order.book, order: newOrder.id, amount: order.amount});
    await newOrderDetail.save();
}

async function update(id, orderParams) {
    const order = await Order.findByPk(id);
    if (!order) throw 'Order not found';
    Object.assign(order, orderParams);
    await order.save();
}

async function remove(id) {
    await Order.destroy({ where: { id } });
}