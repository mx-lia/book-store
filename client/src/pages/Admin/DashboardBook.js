import React from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import AdminHeader from "../../components/AdminLayout/AdminHeader";
import AdminFooter from "../../components/AdminLayout/AdminFooter";
import BookForm from "../../components/BookForm/BookForm";

const DashboardBook = () => {
  const { isbn } = useParams();

  return (
    <div>
      <AdminHeader
        title={"Book"}
        subtitle={"You currently have 4.360 in the catalog!"}
      />
      <Container fluid as="main" className="my-3" role="main">
        <Row>
          <Col>
            <p className="border-bottom">
              {isbn ? "Update book" : "Add new book"}
            </p>
          </Col>
        </Row>
        <BookForm isbn={isbn} />
      </Container>
      <AdminFooter />
    </div>
  );
};

export default DashboardBook;
