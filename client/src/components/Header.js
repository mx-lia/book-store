import React from "react";

import Logo from "../assets/logo.svg";
import { ReactComponent as AccountIcon } from "../assets/account.svg";
import { ReactComponent as BasketIcon } from "../assets/basket.svg";

import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";

import Search from "./Search";

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Navbar className="flex-wrap flex-md-nowrap justify-content-between px-0">
          <Navbar.Brand className="col-md-3 col px-0 mx-0" href="/">
            <Image width="200px" src={Logo} />
          </Navbar.Brand>
          <Button
            href="/login"
            variant="primary"
            className="d-inline-flex align-items-center order-md-3 ml-md-2"
          >
            <AccountIcon fill="#fff" className="mr-md-1" />
            <span className="hidden-text">Sign in/Join</span>
          </Button>
          <Search />
        </Navbar>
      </Container>
      <section className="shadow" role="menubar">
        <Container fluid className="d-flex flex-row">
          <div className="nav-scroller flex-fill">
            <Nav className="nav-underline container-fluid mx-0 my-auto">
              <Nav.Item>
                <Nav.Link href="/account/personal">Authors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Genres</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Books</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Publishers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">New releases</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="basket-panel d-flex flex-row align-items-center">
            <div className="text-light text-nowrap border-right px-3">
              0,00 $
            </div>
            <div>
              <Button
                href="/basket"
                variant="default"
                className="d-inline-flex align-items-center"
              >
                <BasketIcon fill="#fff" />
                <span className="mx-1">0</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
