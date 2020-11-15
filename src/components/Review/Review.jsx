import React from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  let parsedDate = Date.parse(props.review.datetime);
  parsedDate = new Date(parsedDate);
  const monthNames = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dev`];
  const dateMonthYear = monthNames[parsedDate.getMonth()] + ` ` + parsedDate.getFullYear();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={props.review.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {props.review.author}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ((props.review.rating / 5) * 100).toString() + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {props.review.text}
        </p>
        <time className="reviews__time" dateTime={props.review.datetime}>{ dateMonthYear }</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired
  })
};

export default Review;
