import { SortingItems, Settings } from '../../const';

type SortingItemProps = {
  sortingType: string;
};

function SortingItem({sortingType}: SortingItemProps): JSX.Element {

  const isActive = sortingType === Settings.DefaultSortingItem ? 'places__option--active' : '';

  return(
    <li className={`places__option ${isActive}`} tabIndex={0}>{sortingType}</li>
  );
}

function SortingForm(): JSX.Element {
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>

        {Settings.DefaultSortingItem}

        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">

        {SortingItems.map((sortingType) => <SortingItem key={sortingType} sortingType={sortingType} />)}

      </ul>
    </form>
  );
}

export default SortingForm;
