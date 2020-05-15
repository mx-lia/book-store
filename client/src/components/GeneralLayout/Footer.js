import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="pt-4 pt-md-5">
        <Row>
          <Col md xs={12}>
            <small className="d-block mb-3 text-light">© 2017-2019</small>
          </Col>
          <Col md xs={6}>
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-light" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </Col>
          <Col md xs={6}>
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-light" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </Col>
          <Col md xs={6}>
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-light" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-light" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
