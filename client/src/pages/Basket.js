import React from "react";

import { Container, Card, Row, Col, Button } from "react-bootstrap";

import BasketCard from "../components/BasketCard";

const Basket = () => {
  return (
    <Container fluid as="main" className="my-3" role="main">
      <h4 className="my-3">Your basket</h4>
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <Card className="panel shadow-sm mt-1 mb-3 py-2 px-3 rounded-0">
        <Card.Body>
          <Row no-gutters>
            <Col xs={12} xl={5} className="ml-auto">
              <dl className="d-flex flex-row text-nowrap">
                <dt className="mr-3">Delivery cost</dt>
                <dd className="ml-auto">FREE</dd>
              </dl>
              <dl className="d-flex flex-row text-nowrap">
                <dt className="mr-3">Total</dt>
                <dd className="text-pink ml-auto">46,00 €</dd>
              </dl>
              <div className="d-flex flex-row justify-content-end">
                <Button href="#" className="text-light ml-auto w-50">
                  Checkout
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Basket;
