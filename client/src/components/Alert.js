import React, { useContext } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

import { ErrorContext } from "../context/errorContext";

const MyAlert = () => {
  const { error, setError } = useContext(ErrorContext);

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col>
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            <Alert.Heading>You got an error!</Alert.Heading>
            <p>{error.message}</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default MyAlert;
