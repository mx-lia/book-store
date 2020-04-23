import React from "react";

import { Container, Row, Col, ListGroup } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PersonalInfo from "./PersonalInfo";
import Favorites from "./Favorites";
import OrderHistory from "./OrderHistory";

const Account = () => {
  return (
    <Container fluid as="main" className="my-3" role="main">
      <Row noGutters>
        <Col xs={12} md className="mr-md-1">
          <Col className="panel shadow-sm py-2">
            <h5 className="m-0">My Account</h5>
          </Col>
          <Col className="panel shadow-sm py-2 mt-1">
            <ListGroup variant="flush">
              <ListGroup.Item
                action
                href="/account/personal"
                className="px-0 py-1"
              >
                Personal Info
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="/account/favorites"
                className="px-0 py-1"
              >
                Favorites
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="/account/history"
                className="px-0 py-1"
              >
                Order History
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Col>
        <Col xs={12} md={9} className="ml-md-1 mt-2 mt-md-0">
          <Router>
            <Switch>
              <Route exact path="/account/personal">
                <PersonalInfo />
              </Route>
              <Route path="/account/favorites">
                <Favorites />
              </Route>
              <Route path="/account/history">
                <OrderHistory />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
