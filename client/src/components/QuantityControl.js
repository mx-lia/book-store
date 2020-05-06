import React, { useContext } from "react";

import { InputGroup, Button, Form } from "react-bootstrap";

import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as RemoveIcon } from "../assets/remove.svg";

import { Context as ShoppingCartContext } from "../context/shoppingCartContext";

const QuantityControl = ({ book, quantity }) => {
  const { incrementItem, decrementItem } = useContext(ShoppingCartContext);
  
  return (
    <InputGroup className="quantity-control">
      <InputGroup.Prepend>
        <Button
          variant="outline-secondary"
          className="d-inline-flex align-items-center"
          onClick={() => decrementItem(book)}
        >
          <RemoveIcon width="16" height="16" />
        </Button>
      </InputGroup.Prepend>
      <Form.Control type="text" value={quantity} />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          className="d-inline-flex align-items-center"
          onClick={() => incrementItem(book)}
        >
          <AddIcon width="16" height="16" />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default QuantityControl;
