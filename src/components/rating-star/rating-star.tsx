type PlaceRatingProps = {
  rating: number;
};

function PlaceRating({rating}: PlaceRatingProps): JSX.Element {

  const starRating = `${100 * rating / 5}%`;

  return(
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: starRating}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default PlaceRating;
