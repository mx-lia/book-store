import React, {useContext} from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

import { Link } from "react-router-dom";

import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";

import { Context as AuthContext } from "../context/authContext";

const registerSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const { signIn, signUp } = useContext(AuthContext);

  return (
    <Container fluid as="main" className="my-3" role="main">
      <Row className="mx-0 justify-content-center">
        <Col xs={12} md={5} className="panel mb-3 mb-md-0">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={async (values, actions) => {
              await signIn(values);
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
              <Form className="p-2 p-md-4" noValidate onSubmit={handleSubmit}>
                <h5 className="my-3">Sign In</h5>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 my-3">
                  Sign in
                </Button>
                <Form.Row>
                  <hr />
                  <p>OR</p>
                  <hr />
                </Form.Row>
                <Form.Row className="justify-content-center">
                  <Link
                    className="social-margin mx-1"
                    onClick={() => {
                      window.open("http://localhost:4000/auth/google", "_self");
                    }}
                  >
                    <div className="social-icon google">
                      <GoogleIcon width="16px" heigth="16px" />
                    </div>
                  </Link>
                  <a href="http://twitter.com/" className="social-margin mx-1">
                    <div className="social-icon twitter">
                      <TwitterIcon width="16px" heigth="16px" />
                    </div>
                  </a>
                  <a
                    href="http://twitter.com/"
                    target="blank"
                    className="social-margin mx-1"
                  >
                    <div className="social-icon facebook">
                      <FacebookIcon width="10px" heigth="10px" />
                    </div>
                  </a>
                </Form.Row>
              </Form>
            )}
          </Formik>
        </Col>
        <Col xs={12} md={5} className="panel">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={async (values, actions) => {
              await signUp(values);
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
              <Form className="p-2 p-md-4" noValidate onSubmit={handleSubmit}>
                <h5 className="my-3">Join</h5>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-100 my-3"
                >
                  Create your account
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
