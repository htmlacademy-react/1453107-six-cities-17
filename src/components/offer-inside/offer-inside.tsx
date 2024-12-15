type OfferInsideItemProps = {
  text: string;
}

type OfferInsideProps = {
  goods: string[];
}

function OfferInsideItem({text}: OfferInsideItemProps): JSX.Element {
  return(
    <li className="offer__inside-item">
      {text}
    </li>
  );
}

function OfferInside({goods}: OfferInsideProps): JSX.Element {
  return(
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">

        {goods.map((item) => <OfferInsideItem key={item} text={item}/>)}

      </ul>
    </div>
  );
}

export default OfferInside;
