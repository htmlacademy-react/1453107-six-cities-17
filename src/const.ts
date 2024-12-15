const GalleryPictures = [
  {
    src: 'img/room.jpg',
    title: 'Photo studio 01',
  },
  {
    src: 'img/apartment-01.jpg',
    title: 'Photo studio 02',
  },
  {
    src: 'img/apartment-02.jpg',
    title: 'Photo studio 03',
  },
  {
    src: 'img/apartment-03.jpg',
    title: 'Photo studio 04',
  },
  {
    src: 'img/studio-01.jpg',
    title: 'Photo studio 05',
  },
  {
    src: 'img/apartment-01.jpg',
    title: 'Photo studio 06',
  },
] as const;

const SortingItems = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

const Locations = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

const Settings = {
  OffersCount: 5,
  DefaultLocation: Locations.Amsterdam,
  DefaultSortingItem: SortingItems[0],
} as const;

const BookmarkButtonData = {
  'place-card': {
    class: 'place-card',
    width: 18,
    height: 19,
  },
  'offer-page': {
    class: 'offer',
    width: 31,
    height: 33,
  },
} as const;

const LogoData = {
  'header': {
    width: 81,
    height: 41,
  },
  'footer': {
    width: 64,
    height: 33,
  },
} as const;

const ReviewsTextLimits = {
  min: 50,
  max: 300,
} as const;

export {
  GalleryPictures,
  Settings,
  Locations,
  SortingItems,
  BookmarkButtonData,
  LogoData,
  ReviewsTextLimits,
};
