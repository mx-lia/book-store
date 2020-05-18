import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import AdminHeader from "../../components/AdminLayout/AdminHeader";
import BookForm from "../../components/BookForm/BookForm";
import Alert from "../../components/Alert";

import { ErrorContext } from "../../context/errorContext";

const DashboardBook = () => {
  const { error } = useContext(ErrorContext);
  const { isbn } = useParams();

  return (
    <div>
      <AdminHeader
        title={isbn ? "Book" : "New book"}
        subtitle={isbn ? "ISBN: " + isbn : "Fill form with valid data"}
      />
      {error && <Alert />}
      <Container fluid as="main" className="my-3" role="main">
        <Row>
          <Col>
            <h5 className="border-bottom py-1">
              {isbn ? "Update book" : "Add new book"}
            </h5>
          </Col>
        </Row>
        <BookForm isbn={isbn} />
      </Container>
    </div>
  );
};

export default DashboardBook;
