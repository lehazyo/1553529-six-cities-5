import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import Review from "../Review/Review";
import reviews from "../../mocks/reviews.json";

const ReviewsList = (props) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          <Review
            review={review}
          />
        })}
      </ul>
      <CommentForm />
    </section>
  )
};

export default ReviewsList;
