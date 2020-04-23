import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdown,
  DropdownButton,
  Pagination,
  ListGroup,
} from "react-bootstrap";

import { ReactComponent as ArrowDownIcon } from "../assets/arrow_down.svg";
import { ReactComponent as ArrowUpIcon } from "../assets/arrow_up.svg";

import BookCard from "../components/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <Container fluid as="main" className="my-3" role="main">
      <Row noGutters>
        <Col xs={12} md className="mr-md-1">
          <Col className="panel shadow-sm py-2">
            <div className="d-flex border-bottom align-items-center justify-content-between">
              <h5>Filter</h5>
              <Button
                className="arrow d-none align-items-center"
                size="sm"
                variant="default"
              >
                <ArrowDownIcon />
              </Button>
            </div>
            <Form>
              <Form.Group>
                <Form.Label>Keyword</Form.Label>
                <Form.Control type="text" size="sm" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Keyword</Form.Label>
                <Form.Control as="select" size="sm" custom required>
                  <option selected disabled>
                    Choose...
                  </option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Button type="submit" className="w-100">
                Filter
              </Button>
            </Form>
          </Col>
          <Col className="panel shadow-sm py-2 mt-3">
            <div className="d-flex border-bottom align-items-center justify-content-between">
              <h5>Filter by categories</h5>
              <Button
                className="arrow d-none align-items-center"
                size="sm"
                variant="default"
              >
                <ArrowUpIcon />
              </Button>
            </div>
            <ListGroup variant="flush">
              <ListGroup.Item action href="#" className="p-0">
                Personal Info
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="p-0">
                Personal Info
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="p-0">
                Personal Info
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="p-0">
                Personal Info
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Col>
        <Col xs={12} md={9} className="ml-md-1">
          <div className="d-block px-3 my-2 my-md-0">
            <h4>Search results for ...</h4>
          </div>
          <div className="d-block panel border-bottom">
            <Row className="px-3 align-items-center">
              <Col xs={12} xl="auto" className=" text-nowrap mr-auto my-3">
                Showing 1 to 30 of 1,308,322 results
              </Col>
              <div className="col-auto my-3">
                <DropdownButton title="Sort by" className="mr-1">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="col-auto ml-auto ml-xl-0 my-3">
                <Pagination className="m-0 justify-content-end" size="sm">
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </Row>
          </div>
          <div className="d-block panel">
            <Row xs={2} md={4} xl={6} className="px-3">
              {books.map((book) => (
                <Col
                  key={book.isbn}
                  xs={6}
                  md={3}
                  xl={2}
                  className="my-2"
                >
                  <BookCard book={book} />
                </Col>
              ))}
            </Row>
          </div>
          <div className="d-block panel p-3 mt-2">
            <Pagination className="m-0 justify-content-end" size="sm">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Books;
