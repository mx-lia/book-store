import React from "react";
import { Image } from "react-bootstrap";

import cover from "../assets/books6.jpg";

const OrderItem = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between my-1">
      <div className="d-flex flex-row">
        <Image width="80px" src={cover} />
        <div className="px-2">
          <h5>Girl, Woman, Other</h5>
          <h6>Bernardine Evaristo</h6>
          <span>Paperback, English</span>
          <br />
          <span>20 Dec 2019</span>
        </div>
      </div>
      <div className="d-flex flex-row flex-fill mt-2 mt-md-0">
        <div className="ml-md-auto">1 item</div>
        <div className="ml-auto">30,50$</div>
      </div>
    </div>
  );
};

export default OrderItem;
