import React, { useState, useEffect, useContext } from "react";

import { Container, Row, Col, Button, Image } from "react-bootstrap";

import noImage from "../../assets/noimage.png";

import { Context as ShoppingCartContext } from "../../context/shoppingCartContext";

import { getBook } from "../../actions/bookActions";
import { deleteFavourite } from "../../actions/favouriteBookActions";

const FavouriteCard = ({ favourite }) => {
  const [book, setBook] = useState();
  const [inCart, setInCart] = useState(false);
  const { addItem, isInCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    (async () => {
      const book = await getBook(favourite.book);
      setBook(book);
      setInCart(isInCart(book.isbn));
    })();
  }, [favourite.book]);

  return (
    <Container fluid="md" className="px-0 border-top">
      {book && (
        <Row className="py-2">
          <Col className="col-auto">
            <div className="d-flex flex-row">
              <Image
                className="mx-auto"
                width="130px"
                src={book.src ? book.src : noImage}
              />
            </div>
          </Col>
          <Col>
            <h5>{book.title}</h5>
            <h6>
              {book.author.firstName} {book.author.lastName}
            </h6>
            <span>
              {book.format}, {book.language}
            </span>
            <br />
            <span>{book.publicationDate}</span>
            <h5 className="text-pink my-1">{book.price} $</h5>
          </Col>
          <Col xs={12} className="d-flex flex-row justify-content-between mt-2">
            <Button
              variant="secondary"
              onClick={() => {
                deleteFavourite(favourite.id);
                setBook();
              }}
            >
              Delete
            </Button>
            <Button
              disabled={book.availableQuantity === 0 || inCart ? true : false}
              onClick={() => {
                addItem(book);
                setInCart(true);
              }}
            >
              {inCart ? "Book is already in cart" : "Add to cart"}
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default FavouriteCard;
