import { StarRatingPlacementClass } from '../../types';

type StarRatingProps = {
  rating: number;
  placement: StarRatingPlacementClass;
};

function StarRating({rating, placement}: StarRatingProps): JSX.Element {

  const starRating = `${100 * rating / 5}%`;

  return(
    <div className={`${placement}__rating rating`}>
      <div className={`${placement}__stars rating__stars`}>
        <span style={{width: starRating}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {placement === 'offer' && <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}

export default StarRating;
