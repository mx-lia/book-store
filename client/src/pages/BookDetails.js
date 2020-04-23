import React from "react";

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ReactComponent as AvailableIcon } from "../assets/available.svg";
import { ReactComponent as ShippingIcon } from "../assets/shipping.svg";

import cover from "../assets/books6.jpg";

const BookDetails = () => {
  return (
    <Container fluid as="main" className="my-3" role="main">
      <Row>
        <Col className="mb-1">
          <div className="border p-2" color="#666">
            <span>Categories: </span>
            <span>Photo and Art</span>
          </div>
        </Col>
      </Row>
      <Row className="mx-0">
        <Col xs={12} md={9} className="panel mr-md-2 shadow-sm">
          <Row>
            <Col xs={12} md={4} className="text-center">
              <Image thumbnail src={cover} className="border-0 rounded-0" />
            </Col>
            <Col xs={12} md={8}>
              <h4 className="py-1 border-bottom">
                Educated : The Sunday Times and New York Times bestselling
                memoir
              </h4>
              <div>
                By Lalala
              </div>
              <div>
                An amazing story, and truly inspiring. The kind of book everyone
                will enjoy. IT'S EVEN BETTER THAN YOU'VE HEARD.' - Bill Gates
                Selected as a book of the year by AMAZON, THE TIMES, SUNDAY
                TIMES, GUARDIAN, NEW YORK TIMES, ECONOMIST, NEW STATESMAN,
                VOGUE, IRISH TIMES, IRISH EXAMINER and RED MAGAZINE THE
                MULTI-MILLION COPY BESTSELLER A Book of the Decade, 2010-2020
                (Independent)
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md className="px-0">
          <div className="panel d-flex flex-column px-3 shadow-sm">
            <h3 className="border-bottom text-pink py-3">12,19$</h3>
            <div className="d-inline-flex align-items-center font-weight-bold my-3">
              <ShippingIcon width="32" height="32" className="mr-1" />
              Free delivery worldwide
            </div>
            <div className="d-inline-flex align-items-center my-3">
              <AvailableIcon width="32" height="32" className="mr-1" />
              Available
            </div>
            <div className="border-top py-3">
              <Button type="submit" className="w-100 mt-2">
                Add to basket
              </Button>
              <Button variant="light" type="submit" className="w-100 mt-2">
                Add to wishlist
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div class="row panel mx-0 mt-1 pb-3 shadow-sm">
        <h5 class="border-bottom w-100 mx-3 py-3">Product details</h5>
        <div class="col-12 col-md-6">
          <div>Format Paperback | 400 pages</div>
          <div>Format Paperback | 400 pages</div>
          <div>Format Paperback | 400 pages</div>
          <div>Format Paperback | 400 pages</div>
          <div>Format Paperback | 400 pages</div>
        </div>
        <div class="col-12 col-md-6">
          <div>Format Paperback | 400 pages</div>
          <div>Format Paperback | 400 pages</div>
          <div>Format Paperback | 400 pages</div>
          <div>Format Paperback | 400 pages</div>
          <div>Format Paperback | 400 pages</div>
        </div>
      </div>
    </Container>
  );
};

export default BookDetails;
