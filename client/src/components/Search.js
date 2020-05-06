import React, { useState } from "react";

import { ReactComponent as SearchIcon } from "../assets/search.svg";

import { InputGroup, Form, Button } from "react-bootstrap";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <InputGroup
      className="search"
      value={keyword}
      onChange={(event) => setKeyword(event.target.value)}
    >
      <Form.Control
        type="text"
        placeholder="Search for books by keyword / title / author / ISBN"
      />
      <InputGroup.Prepend>
        <Button
          href={"/books?keyword=" + keyword}
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
