import React from "react";

import { Card, Row, Col, Button, Image } from "react-bootstrap";

import QuantityControl from "./QuantityControl";

import { ReactComponent as FavoriteIcon } from "../assets/favorite.svg";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";

import cover from "../assets/books6.jpg";

const BasketCard = ({ book }) => {
  return (
    <Card.Body className="panel shadow-sm my-1 py-2 px-3 rounded-0">
      <Row noGutters>
        <Col xs={12} md="auto">
          <Card.Body>
            <div className="d-flex flex-row">
              <Image className="mx-auto" width="130px" src={cover} />
            </div>
          </Card.Body>
        </Col>
        <Col xs={12} md>
          <Card.Body>
            <Card.Title as="h5">Girl, Woman, Other</Card.Title>
            <Card.Subtitle>Bernardine Evaristo</Card.Subtitle>
            <Card.Text>Paperback, English</Card.Text>
          </Card.Body>
        </Col>
        <Col xs={12} md="auto" className="ml-auto">
          <Card.Body>
            <div className="d-flex flex-row justify-content-between">
              <div className="mr-4">
                <QuantityControl />
              </div>
              <div className="d-flex flex-column">
                <h4 className="text-pink">45,56 $</h4>
                <small>45,56$ x 1</small>
              </div>
            </div>
          </Card.Body>
        </Col>
        <Col xs={12} md="auto" className="ml-auto ml-md-0">
          <Card.Body>
            <div className="d-flex flex-row flex-md-column justify-content-between">
              <Button
                variant="outline-danger"
                className="d-inline-flex align-items-center mb-md-1"
              >
                <FavoriteIcon className="pr-md-1" />
                <span>Add to favorite</span>
              </Button>
              <Button
                variant="outline-secondary"
                className="d-inline-flex align-items-center mb-md-1"
              >
                <DeleteIcon className="pr-md-1" />
                <span>Delete</span>
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card.Body>
  );
};

export default BasketCard;
