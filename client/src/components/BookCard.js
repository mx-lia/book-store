import React from "react";

import { Card, Button } from "react-bootstrap";

import cover from "../assets/books6.jpg";

const BookCard = ({ book }) => {
  return (
    <Card className="border-0 h-100">
      <Card.Img src={cover} variant="top" className="rounded-0" />
      <Card.Body className="d-flex flex-column p-0">
        <Card.Title as="h6">{book.title}</Card.Title>
        <div className="mt-auto mb-3">
            <span>{book.author}</span>
            <br />
            <span>{book.publication}</span>
            <br />
            <span className="text-pink">{book.price} $</span>
          </div>
          <Button href={"/book/" + book.isbn} className="w-100">
            Show more
          </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
