import React, { useEffect, useState } from "react";

import OrderCard from "../../components/Account/OrderCard";

import { getOrders } from "../../actions/orderActions";

const History = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      setOrders(await getOrders());
    })();
  }, []);

  return (
    <div className="panel shadow-sm py-2 px-3">
      <div className="border-bottom">
        <h5>Order history</h5>
      </div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default History;
