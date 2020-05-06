import React, { useContext } from "react";

import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";

import { Context as AuthContext } from "../context/authContext";

const AdminLogin = () => {
  return (
    <Container class="text-center">
      <Row className="align-self-center">
        <Col></Col>
        <Col>
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
              <Form class="form-signin">
                <Image width="200px" src={Logo} />
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button block type="submit">
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
