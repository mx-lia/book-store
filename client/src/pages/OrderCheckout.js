import React, { useState, useEffect, useContext } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ReactComponent as AvailableIcon } from "../assets/available.svg";
import { ReactComponent as ShippingIcon } from "../assets/shipping.svg";

import { Formik } from "formik";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { Context as AuthContext } from "../context/authContext";
import { Context as ShoppingCartContext } from "../context/shoppingCartContext";

import { getBook } from "../actions/booksActions";

const OrderCheckout = () => {
  return (
    <Container fluid as="main" className="my-3" role="main">
      <Row className="mx-0">
        <Col xs={12} md={{ order: 1 }} className="px-0 my-1 my-md-0">
          <div className="panel d-flex flex-column shadow-sm">
            <div className="panel-pink d-flex flex-column p-3">
              <h5 className="text-light">OrderSummary</h5>
              <div className="d-flex flex-row justify-content-between text-white">
                <div>2 items</div>
                <div>19.18 $</div>
              </div>
            </div>
            <div className="p-3">
              <div className="d-flex flex-row justify-content-between py-2 border-bottom">
                <div>
                  <div>идфидфидф</div>
                  <div>идфидфидф</div>
                  <div>идфидфидф</div>
                </div>
                <div>19,18 $</div>
              </div>
              <div className="d-flex flex-row justify-content-between py-1 border-bottom">
                <div>grtgr</div>
                <div>19,18 $</div>
              </div>
              <div className="d-flex flex-row justify-content-between py-1 border-bottom">
                <div>gtrgg</div>
                <div>19,18 $</div>
              </div>
              <div className="d-flex flex-row justify-content-between py-1">
                <div>freg</div>
                <div>19,18 $</div>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={{ span: 8, order: 0 }}
          className="panel mr-md-2 shadow-sm py-3"
        >
          <div className="mb-3 border-bottom">
            <h5>Fill with valid information</h5>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(false);
            }}
          >
            {({
              handleChange,
              handleSubmit,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
              isSubmitting,
            }) => (
              <Form role="form" autoComplete="off">
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderCheckout;
