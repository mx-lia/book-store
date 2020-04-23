import React from "react";
import { Card } from "react-bootstrap";

import OrderItem from "./OrderItem";

const OrderCard = () => {
  return (
    <Card className="rounded-0 my-2">
      <Card.Header className="d-flex flex-column flex-md-row justify-content-between">
        <div>Order No. 5346332 from 28.04.2020</div>
        <div>
          Total sum: <span>56,30$</span>
        </div>
      </Card.Header>
      <Card.Body>
        <OrderItem />
        <div className="border-top" />
        <OrderItem />
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
