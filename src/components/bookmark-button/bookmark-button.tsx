import { BookmarkButtonData } from '../../const';
import { BookmarkButtonPlacementClass } from '../../types';

type BookmarkButtonProps = {
  placement: BookmarkButtonPlacementClass;
  isActive?: boolean;
}

function BookmarkButton({placement, isActive}: BookmarkButtonProps): JSX.Element {

  const text = isActive ? 'In bookmarks' : 'To bookmarks';

  const activeClass = isActive && `${BookmarkButtonData[placement].class}__bookmark-button--active`;

  return(
    <button className={`${BookmarkButtonData[placement].class}__bookmark-button ${activeClass} button`} type="button">
      <svg
        className={`${BookmarkButtonData[placement].class}__bookmark-icon`}
        width={BookmarkButtonData[placement].width}
        height={BookmarkButtonData[placement].height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{text}</span>
    </button>
  );
}

export default BookmarkButton;
