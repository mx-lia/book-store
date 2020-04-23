import React from "react";

import { Row, Col, Form, Button } from "react-bootstrap";

const PersonalInfo = () => {
  return (
    <div className="panel shadow-sm py-2 px-3">
      <div className="border-bottom">
        <h5>Personal info</h5>
      </div>
      <div className="mt-2">
        <Form role="form" autoComplete="off">
          <Form.Group as={Row}>
            <Form.Label column lg={3}>
              First name
            </Form.Label>
            <Col lg={9}>
              <Form.Control type="text" value="Jane" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column lg={3}>
              Last name
            </Form.Label>
            <Col lg={9}>
              <Form.Control type="text" value="Jane" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column lg={3}>
              Email
            </Form.Label>
            <Col lg={9}>
              <Form.Control type="text" value="Jane" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column lg={3}>
              Address
            </Form.Label>
            <Col lg={9}>
              <Form.Control type="text" value="Jane" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column lg={3}>
              Postal Code
            </Form.Label>
            <Col lg={9}>
              <Form.Control type="text" value="Jane" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column lg={3}>
              Phone
            </Form.Label>
            <Col lg={9}>
              <Form.Control type="text" value="Jane" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column lg={3}>
              Password
            </Form.Label>
            <Col lg={9}>
              <Form.Control type="text" value="Jane" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column lg={3}></Form.Label>
            <Col lg={9}>
              <Button variant="secondary" type="reset">
                Cancel
              </Button>
              <Button className="ml-1">
                Save changes
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default PersonalInfo;
