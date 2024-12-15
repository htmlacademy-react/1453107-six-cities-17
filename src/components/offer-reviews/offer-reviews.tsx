import PlaceRating from '../rating-star/rating-star';
import OfferForm from '../offer-form/offer-form';

import { Comment } from '../../types';

type OfferReviewItemProps = {
  comment: Comment;
};

type OfferReviewsProps = {
  comments: Comment[];
  isLogged: boolean;
};

function OfferReviewItem({comment}: OfferReviewItemProps): JSX.Element {

  const year = new Date(comment.date).getFullYear();

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">

        <PlaceRating rating={comment.rating} />

        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April {year}</time>
      </div>
    </li>
  );
}

function OfferReviews({comments, isLogged}: OfferReviewsProps): JSX.Element {
  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">

        {comments.map((comment) => <OfferReviewItem key={comment.id} comment={comment} />)}

      </ul>

      {isLogged && <OfferForm />}

    </section>
  );
}

export default OfferReviews;
