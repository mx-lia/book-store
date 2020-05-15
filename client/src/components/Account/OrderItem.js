import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

import noImage from "../../assets/noimage.png";

import { getBook } from "../../actions/bookActions";

const OrderItem = ({ orderDetail }) => {
  const [book, setBook] = useState();

  useEffect(() => {
    (async () => {
      setBook(await getBook(orderDetail.book));
    })();
  }, []);

  return (
    <React.Fragment>
      {book && (
        <div className="d-flex flex-column flex-md-row justify-content-between my-1">
          <div className="d-flex flex-row">
            <Image width="80px" src={book.src ? book.src : noImage} />
            <div className="px-2">
              <h5>{book.title}</h5>
              <h6>
                {book.author.firstName} {book.author.lastName}
              </h6>
              <span>Paperback, English</span>
              <br />
              <span>{book.publicationDate}</span>
            </div>
          </div>
          <div className="d-flex flex-row flex-fill mt-2 mt-md-0">
            <div className="ml-md-auto">x {orderDetail.amount}</div>
            <div className="ml-auto">{book.price * orderDetail.amount}$</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default OrderItem;
