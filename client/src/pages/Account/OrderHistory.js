import React, { useEffect, useState, useContext } from "react";

import OrderCard from "../../components/Account/OrderCard";

import { getOrders } from "../../actions/orderActions";

import { ErrorContext } from "../../context/errorContext";

const History = () => {
  const { setError } = useContext(ErrorContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      setOrders(await getOrders(setError));
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
