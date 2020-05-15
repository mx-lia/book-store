import React, { useState, useEffect } from "react";

import { Container, Row, Col, Button, Form, ListGroup } from "react-bootstrap";

import { useLocation } from "react-router-dom";
import * as queryString from "query-string";

import { ReactComponent as ArrowDownIcon } from "../assets/arrow_down.svg";
import { ReactComponent as ArrowUpIcon } from "../assets/arrow_up.svg";

import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";

import { getBooks } from "../actions/bookActions";
import { getGenres } from "../actions/genreActions";

const Books = () => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [keyword, setKeyword] = useState(params.keyword);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(params.page ? params.page : 1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      setGenres(await getGenres());
      const { books, count, pages } = await getBooks({
        limit: 30,
        page: currentPage,
        genre: params.genre,
        orderBy: params.orderBy,
      });
      setBooks(books);
      setCount(count);
      setPages(pages);
    })();
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
                <Form.Control
                  type="text"
                  size="sm"
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price range</Form.Label>
                <Form.Control as="select" size="sm" custom required>
                  <option selected disabled>
                    All
                  </option>
                  <option>Under 15$</option>
                  <option>15$ to 30$</option>
                  <option>15$ +</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Availability</Form.Label>
                <Form.Control as="select" size="sm" custom required>
                  <option selected disabled>
                    All
                  </option>
                  <option>Pre-order</option>
                  <option>In stock</option>
                </Form.Control>
              </Form.Group>
              <Button type="submit" className="w-100">
                Filter
              </Button>
            </Form>
          </Col>
          <Col className="panel shadow-sm py-2 mt-2">
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
              {genres.map((genre) => (
                <ListGroup.Item
                  key={genre.id}
                  action
                  href={
                    location.pathname +
                    "?" +
                    queryString.stringify({
                      ...params,
                      page: 1,
                      genre: genre.name,
                    })
                  }
                  className="p-0"
                >
                  {genre.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Col>
        <Col xs={12} md={9} className="ml-md-1">
          <div className="d-block py-3 my-md-0">
            <h4>Search results for {keyword}</h4>
          </div>
          <div className="d-block panel border-bottom">
            <Row className="px-3 align-items-center">
              <Col xs={12} xl="auto" className=" text-nowrap mr-auto my-3">
                Showing {currentPage == 1 ? 1 : (currentPage - 1) * 30 + 1} to{" "}
                {(currentPage - 1) * 30 + books.length} of {count} results
              </Col>
              <div className="col-auto my-3">
                <Form.Control
                  className="mr-1"
                  as="select"
                  size="sm"
                  value={params.orderBy ? params.orderBy : "popularity"}
                  custom
                  onChange={(event) => {
                    const url =
                      location.pathname +
                      "?" +
                      queryString.stringify({
                        ...params,
                        orderBy: event.target.value,
                      });
                    window.location.href = url;
                  }}
                >
                  <option value="popularity">Most popular</option>
                  <option value="price_low_high">Price, low to high</option>
                  <option value="price_high_low">Price, high to low</option>
                  <option value="pubdate_old_new">
                    Publication date, old to new
                  </option>
                  <option value="pubdate_new_old">
                    Publication date, new to old
                  </option>
                </Form.Control>
              </div>
              <div className="col-auto ml-auto ml-xl-0 my-3">
                <Pagination currentPage={currentPage} pages={pages} />
              </div>
            </Row>
          </div>
          <div className="d-block panel">
            <Row xs={2} md={4} xl={6} className="px-3 align-items-stretch">
              {books.map((book) => (
                <Col key={book.isbn} xs={6} md={3} xl={2} className="my-2">
                  <BookCard book={book} />
                </Col>
              ))}
            </Row>
          </div>
          <div className="d-block panel p-3 mt-2">
            <Pagination currentPage={currentPage} pages={pages} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Books;
