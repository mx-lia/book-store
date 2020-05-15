import React from "react";

import { Button } from "react-bootstrap";

import { deleteBook } from "../../actions/bookActions";

const CardButton = ({ title, subtitle, href, icon }) => {
  return (
    <div>
      <Button
        variant="card"
        href={href ? href : null}
        className="d-flex flex-column align-items-stretch py-3 h-100 w-100"
      >
        <div className="ml-auto">{icon}</div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </Button>
    </div>
  );
};

export default CardButton;
