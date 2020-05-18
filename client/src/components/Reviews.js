import React, { useState, useContext, useEffect } from "react";

import { Form, Button, Col, Row } from "react-bootstrap";
import { Formik } from "formik";

import { Context as CustomerContext } from "../context/customerContext";
import {
  getReviewsByIsbn,
  createReviewWebSocket,
} from "../actions/reviewActions";

const Reviews = ({ isbn }) => {
  const [ws, setWS] = useState(new WebSocket("ws://localhost:3030"));
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({});
  const {
    state: { user },
  } = useContext(CustomerContext);

  ws.onmessage = (evt) => {
    const review = JSON.parse(evt.data);
    setNewReview(review);
  };

  ws.onclose = () => {
    setWS(new WebSocket("ws://localhost:3030"));
  };

  useEffect(() => {
    (async () => {
      setReviews(await getReviewsByIsbn(isbn));
    })();
  }, [newReview, isbn]);

  return (
    <Row className="panel mx-0 mt-2 pb-3 shadow-sm">
      <h5 className="border-bottom w-100 mx-3 py-3">Reviews</h5>
      <Col>
        {reviews.map((review) => (
          <div key={review.id} className="d-flex flex-column border-bottom">
            <p>
              <strong>
                {review.customer.firstName} {review.customer.lastName}
              </strong>
            </p>
            <p>
              <strong>{review.date}</strong>
            </p>
            <p>{review.text}</p>
          </div>
        ))}
        {user && (
          <Formik
            initialValues={{ text: "", isbn: isbn, customerId: user.id }}
            onSubmit={(values, actions) => {
              createReviewWebSocket(ws, values);
              setNewReview(values);
              actions.setSubmitting(false);
              actions.resetForm();
            }}
          >
            {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
              <Form className="mt-3" noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    name="text"
                    as="textarea"
                    rows="5"
                    value={values.text}
                    onChange={handleChange}
                    isInvalid={!!errors.text}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.text}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="my-3"
                >
                  Submit review
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </Col>
    </Row>
  );
};

export default Reviews;
