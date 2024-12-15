import { ReviewsTextLimits } from '../../const';

type StarProps = {
  starRating: number;
};

function Star({starRating}: StarProps): JSX.Element {
  return(
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={starRating} id={`${starRating}-stars`} type="radio" />
      <label htmlFor={`${starRating}-stars`} className="reviews__rating-label form__rating-label" title="terribly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function OfferForm(): JSX.Element {
  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {[1, 2, 3, 4, 5].map((starRating) => <Star key={starRating} starRating={starRating} />)}

      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{ReviewsTextLimits.min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled >Submit</button>
      </div>
    </form>
  );
}

export default OfferForm;
