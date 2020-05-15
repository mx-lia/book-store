import React from "react";
import { Card } from "react-bootstrap";

import OrderItem from "./OrderItem";

const OrderCard = ({ order }) => {
  return (
    <Card className="rounded-0 my-2">
      <Card.Header className="d-flex flex-column flex-md-row justify-content-between">
        <div>
          Order No. {order.id} from {order.date}
        </div>
        <div>
          Total sum: <span> $</span>
        </div>
      </Card.Header>
      <Card.Body>
        {order.details.map((orderDetail) => (
          <div>
            <OrderItem key={orderDetail.book} orderDetail={orderDetail} />
            <div className="border-top" />
            <div />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
