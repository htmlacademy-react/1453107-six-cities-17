type OfferFeaturesItemProps = {
  classKey: string;
  text: string;
}

type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

function OfferFeaturesItem({classKey, text}: OfferFeaturesItemProps): JSX.Element {
  return(
    <li className={`offer__feature offer__feature--${classKey}`}>
      {text}
    </li>
  );
}

function OfferFeatures({type, bedrooms, maxAdults}: OfferFeaturesProps): JSX.Element {

  const Features = [
    {
      classKey: 'entire',
      text: type.at(0)?.toUpperCase() + type.slice(1),
    },
    {
      classKey: 'bedrooms',
      text: `${bedrooms} Bedrooms`,
    },
    {
      classKey: 'adults',
      text: `Max ${maxAdults} adults`,
    },
  ];

  return(
    <ul className="offer__features">
      {Features.map((feature) =>
        (<OfferFeaturesItem key={feature.classKey} classKey= {feature.classKey} text={feature.text} />)
      )}
    </ul>
  );
}

export default OfferFeatures;
