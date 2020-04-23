import React from "react";

import OrderCard from "../components/OrderCard";

const History = () => {
  return (
    <div className="panel shadow-sm py-2 px-3">
      <div className="border-bottom">
        <h5>Order history</h5>
      </div>
      <OrderCard />
      <OrderCard />
    </div>
  );
};

export default History;
