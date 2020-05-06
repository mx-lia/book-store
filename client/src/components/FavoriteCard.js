import React from "react";

import { Container, Row, Col, Button, Image } from "react-bootstrap";

import cover from "../assets/books5.jpg";

const FavoriteCard = () => {
  return (
    <Container fluid="md" className="px-0 border-top">
      <Row className="py-2">
        <Col className="col-auto">
          <div className="d-flex flex-row">
            <Image className="mx-auto" width="130px" src={cover} />
          </div>
        </Col>
        <Col>
          <h5>Girl, Woman, Other</h5>
          <h6>Bernardine Evaristo</h6>
          <span>Paperback, English</span>
          <br />
          <span>20 Dec 2019</span>
          <h5 className="text-pink my-1">8,43 €</h5>
        </Col>
        <Col xs={12} className="d-flex flex-row justify-content-between mt-2">
          <Button variant="secondary">Delete</Button>
          <Button>Add to basket</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteCard;
