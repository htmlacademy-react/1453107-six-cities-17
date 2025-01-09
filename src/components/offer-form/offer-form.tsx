import { useState, ChangeEvent } from 'react';

import { InitialReview, ReviewsTextLimits, Setting, StarRatingData } from '../../const';
import { RatingType, Review } from '../../types';

type StarProps = {
  star: number;
  title: string;
  rating: RatingType;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function Star({star, title, rating, onChange}: StarProps): JSX.Element {
  return(
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={star}
        id={`${star}-stars`}
        type="radio"
        checked={star === rating}
        onChange={onChange}
      />
      <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function OfferForm(): JSX.Element {

  const [review, setReview] = useState<Review>(InitialReview);

  const isDisabled =
    review.rating === 0 ||
    review.text.trim() === '' ||
    (review.text.trim().length <= Setting.CommentMinLength || review.text.trim().length >= Setting.CommentMaxLength);

  function handleTextChange (evt: ChangeEvent<HTMLTextAreaElement>): void {
    setReview((prevState) => ({
      ...prevState,
      text: evt.target.value
    }));
  }

  function handleRatingChange (evt: ChangeEvent<HTMLInputElement>): void {
    setReview((prevState) => ({
      ...prevState,
      rating: Number(evt.target.value) as RatingType,
    }));
  }

  function handleSubmitForm(evt: ChangeEvent<HTMLFormElement>): void {
    evt.preventDefault();
    setReview(InitialReview);
  }

  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmitForm}>

      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {Object.values(StarRatingData).map(({rating, title}) =>
          (<Star
            key={rating}
            star={rating}
            title={title}
            rating={review.rating}
            onChange={handleRatingChange}
          />))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.text}
        onChange={handleTextChange}
        required
        maxLength={Setting.CommentMaxLength}
        minLength={Setting.CommentMinLength}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{ReviewsTextLimits.min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled} >Submit</button>
      </div>
    </form>
  );
}

export default OfferForm;
