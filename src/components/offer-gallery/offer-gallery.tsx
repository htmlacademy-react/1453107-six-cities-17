import { GalleryPictures } from '../../const';
import { Picture } from '../../types';

type OfferGalleryItemProps = {
  picture: Picture;
}

function OfferGalleryItem({picture}: OfferGalleryItemProps): JSX.Element {
  return(
    <div className="offer__image-wrapper">
      <img className="offer__image" src={picture.src} alt={picture.title} />
    </div>
  );
}

function OfferGallery(): JSX.Element {
  return(
    <div className="offer__gallery-container container">
      <div className="offer__gallery">

        {GalleryPictures.map((picture) => <OfferGalleryItem key={picture.title} picture={picture} />)}

      </div>
    </div>
  );
}

export default OfferGallery;
