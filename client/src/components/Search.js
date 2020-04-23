import React from "react";

import { ReactComponent as SearchIcon } from "../assets/search.svg";

import { InputGroup, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <InputGroup className="search">
      <Form.Control
        type="text"
        placeholder="Search for books by keyword / title / author / ISBN"
      />
      <InputGroup.Prepend>
        <Button
          href="/books"
          variant="light"
          className="d-inline-flex align-items-center"
        >
          <SearchIcon />
        </Button>
      </InputGroup.Prepend>
    </InputGroup>
  );
};

export default Search;
