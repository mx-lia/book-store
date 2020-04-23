import React, { useState } from "react";

import { InputGroup, Button, Form } from "react-bootstrap";

import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as RemoveIcon } from "../assets/remove.svg";

const QuantityControl = () => {
  const [count, setCount] = useState(1);
  return (
    <InputGroup className="quantity-control">
      <InputGroup.Prepend>
        <Button
          variant="outline-secondary"
          className="d-inline-flex align-items-center"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AddIcon width="16" height="16" />
        </Button>
      </InputGroup.Prepend>
      <Form.Control type="text" value={count} />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          className="d-inline-flex align-items-center"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          <RemoveIcon width="16" height="16" />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default QuantityControl;
