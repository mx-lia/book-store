const { Order, OrderDetail, Customer } = require("../sequelize");

module.exports = {
  getAll,
  getByCustomerId,
  create,
  update,
  remove,
};

async function getAll() {
  return await Order.findAll();
}

async function getByCustomerId(customerId) {
  let orders = await Order.findAll({ where: { customer_id: customerId } });
  for (const [index, order] of orders.entries()) {
    const orderDetail = await OrderDetail.findAll({
      where: { order: order.id },
    });
    orders[index] = {
      ...orders[index].dataValues,
      details: orderDetail.map((el) => el.dataValues),
    };
  }
  return orders;
}

async function create({ customer, books }) {
  await Customer.update(customer, {
    where: { id: customer.id },
  });
  let newOrder = new Order({ customer_id: customer.id });
  newOrder = await newOrder.save();
  books.map(async (element) => {
    const newOrderDetail = new OrderDetail({
      book: element.isbn,
      order: newOrder.id,
      amount: element.amount,
    });
    await newOrderDetail.save();
  });
}

async function update(id, orderParams) {
  const order = await Order.findByPk(id);
  if (!order) throw "Order not found";
  Object.assign(order, orderParams);
  return await order.save();
}

async function remove(id) {
  return await Order.destroy({ where: { id } });
}
