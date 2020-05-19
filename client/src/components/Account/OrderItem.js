import React, { useState, useEffect, useContext } from "react";
import { Image } from "react-bootstrap";

import noImage from "../../assets/noimage.png";

import { ErrorContext } from "../../context/errorContext";

import { getBook } from "../../actions/bookActions";

const OrderItem = ({ orderDetail, totalSum, setTotalSum }) => {
  const { setError } = useContext(ErrorContext);
  const [book, setBook] = useState();

  useEffect(() => {
    (async () => {
      const book = await getBook(orderDetail.book_isbn, setError);
      setBook(book);
      setTotalSum(totalSum + orderDetail.amount * book.price);
    })();
  }, [orderDetail.book_isbn, orderDetail.amount, setTotalSum]);

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
