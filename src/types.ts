import { Location, SortingItems, AuthorizationStatus, AppRoute } from './const';

export type LocationType = typeof Location[keyof typeof Location];
export type SortingItemsType = typeof SortingItems[number];
export type AuthorizationStatusType = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
export type AppRouteType = typeof AppRoute[keyof typeof AppRoute];

export type MapPlacementClass = 'offer' | 'cities';
export type CardPlacementClass = 'offer' | 'cities' | 'favorites';
export type StarRatingPlacementClass = 'place-card' | 'offer';
export type BookmarkButtonPlacementClass = 'place-card' | 'offer-page';

export type DataType = {
  [key: string]: {class?: string; width: number; height: number};
}

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

export type Review = ({
  rating: RatingType;
  text: string;
});

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type PreviewOffer = Offer & {
  previewImage: string;
}

export type SelectedOffer = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type LoggedUser = User & {
  email: string;
  token: string;
}

export type Comment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type Picture = {
  src: string;
  title: string;
}
