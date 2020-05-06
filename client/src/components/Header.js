import React, { useContext, useEffect } from "react";

import Logo from "../assets/logo.svg";
import { ReactComponent as AccountIcon } from "../assets/account.svg";
import { ReactComponent as BasketIcon } from "../assets/basket.svg";
import { ReactComponent as ExitIcon } from "../assets/exit.svg";
import { useHistory } from "react-router-dom";
import { Context as AuthContext } from "../context/authContext";
import { Context as ShoppingCartContext } from "../context/shoppingCartContext";

import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";

import Search from "./Search";

const Header = () => {
  const {
    state: { isAuthenticated },
    me,
    signOut,
  } = useContext(AuthContext);

  const {
    state: { totalCount, totalSum },
  } = useContext(ShoppingCartContext);

  const history = useHistory();
  useEffect(() => {
    (async () => me())();
  }, [isAuthenticated]);

  return (
    <header>
      <Container fluid>
        <Navbar className="flex-wrap flex-md-nowrap justify-content-between px-0">
          <Navbar.Brand className="col-md-3 col px-0 mx-0" href="/">
            <Image width="200px" src={Logo} />
          </Navbar.Brand>
          <Button
            href={isAuthenticated ? "/account/personal" : "/login"}
            variant="primary"
            className="d-inline-flex align-items-center order-md-3 ml-md-2"
          >
            <AccountIcon
              fill="#fff"
              className={isAuthenticated ? "" : "mr-md-1"}
            />
            <span className="hidden-text">
              {isAuthenticated ? "" : "Sign in/Join"}
            </span>
          </Button>
          {isAuthenticated && (
            <Button
              variant="primary"
              className="d-inline-flex align-items-center order-md-3 ml-md-2"
              onClick={() => {
                signOut(history);
              }}
            >
              <ExitIcon fill="#fff" />
            </Button>
          )}
          <Search />
        </Navbar>
      </Container>
      <section className="shadow" role="menubar">
        <Container fluid className="d-flex flex-row">
          <div className="nav-scroller flex-fill">
            <Nav className="nav-underline container-fluid mx-0 my-auto">
              <Nav.Item>
                <Nav.Link href="#">Authors</Nav.Link>
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
              {totalSum} $
            </div>
            <div>
              <Button
                href="/shoppingCart"
                variant="default"
                className="d-inline-flex align-items-center"
              >
                <BasketIcon fill="#fff" />
                <span className="mx-1">{totalCount}</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
