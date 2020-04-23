import React, { useState, useEffect } from "react";

import { Container, Jumbotron, Row, Col } from "react-bootstrap";

import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <Container fluid as="main" className="my-3" role="main">
      <Jumbotron className="text-light">
        <Col md={6}>
          <h1 className="display-4 font-italic">
            Title of a longer featured blog post
          </h1>
          <p className="lead">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </p>
        </Col>
      </Jumbotron>
      <div className="d-block panel shadow-sm">
        <Row xs={2} md={4} xl={6} className="px-3">
          {books.map((book) => (
            <Col key={book.isbn} xs={6} md={3} xl={2} className="my-2">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Home;
