import React, { useState, useEffect, useContext } from "react";

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ReactComponent as AvailableIcon } from "../assets/available.svg";
import { ReactComponent as ShippingIcon } from "../assets/shipping.svg";

import { useParams } from "react-router-dom";
import { Context as AuthContext } from "../context/authContext";
import { Context as ShoppingCartContext } from "../context/shoppingCartContext";

import { getBook } from "../actions/booksActions";

const BookDetails = () => {
  const [book, setBook] = useState();
  const {
    state: { isAuthenticated },
  } = useContext(AuthContext);
  const { addItem } = useContext(ShoppingCartContext);

  const { isbn } = useParams();

  useEffect(() => {
    (async () => {
      setBook(await getBook(isbn));
    })();
  }, []);

  return (
    <Container fluid as="main" className="my-3" role="main">
      {book && (
        <Row>
          <Col className="mb-1">
            <div className="border p-2" color="#666">
              <span>Categories: </span>
              {book.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          </Col>
        </Row>
      )}
      {book && (
        <Row className="mx-0">
          <Col xs={12} md={9} className="panel mr-md-2 shadow-sm">
            <Row>
              <Col xs={12} md={4} className="text-center">
                <Image
                  thumbnail
                  src={book.src}
                  className="border-0 rounded-0"
                />
              </Col>
              <Col xs={12} md={8}>
                <h4 className="py-1 border-bottom">{book.title}</h4>
                <div>
                  By {book.author.firstName} {book.author.lastName}
                </div>
                <div>{book.description}</div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md className="px-0">
            <div className="panel d-flex flex-column px-3 shadow-sm">
              <h3 className="border-bottom text-pink py-3">{book.price}$</h3>
              <div className="d-inline-flex align-items-center font-weight-bold my-3">
                <ShippingIcon width="32" height="32" className="mr-1" />
                Free delivery worldwide
              </div>
              <div className="d-inline-flex align-items-center my-3">
                <AvailableIcon width="32" height="32" className="mr-1" />
                Available
              </div>
              <div className="border-top py-3">
                <Button
                  type="submit"
                  className="w-100 mt-2"
                  onClick={() => addItem(book)}
                >
                  Add to basket
                </Button>
                <Button
                  href={isAuthenticated ? "/basket" : "/login"}
                  variant="light"
                  type="submit"
                  className="w-100 mt-2"
                >
                  Add to wishlist
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      )}
      {book && (
        <Row className="panel mx-0 mt-2 pb-3 shadow-sm">
          <h5 className="border-bottom w-100 mx-3 py-3">Product details</h5>
          <Col xs={12} md={6}>
            <div>Format Paperback | 400 pages</div>
            <div>Format Paperback | 400 pages</div>
            <div>Format Paperback | 400 pages</div>
            <div>Format Paperback | 400 pages</div>
            <div>Format Paperback | 400 pages</div>
          </Col>
          <Col xs={12} md={6}>
            <div>Format Paperback | 400 pages</div>
            <div>Format Paperback | 400 pages</div>
            <div>Format Paperback | 400 pages</div>
            <div>Format Paperback | 400 pages</div>
            <div>Format Paperback | 400 pages</div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BookDetails;
