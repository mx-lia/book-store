const { Order, OrderDetail, Customer } = require("../sequelize");

module.exports = {
  getByCustomerId,
  create,
};

async function getByCustomerId(customerId) {
  let orders = await Order.findAll({ where: { customer_id: customerId } });
  for (const [index, order] of orders.entries()) {
    const orderDetail = await OrderDetail.findAll({
      where: { order_id: order.id },
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
      book_isbn: element.isbn,
      order_id: newOrder.id,
      amount: element.amount,
    });
    await newOrderDetail.save();
  });
  return newOrder;
}
