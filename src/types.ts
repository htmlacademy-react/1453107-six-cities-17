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

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export interface Offer {
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

export interface PreviewOffer extends Offer {
  previewImage: string;
}

export interface SelectedOffer extends Offer {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface LoggedUser extends User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export interface Comment {
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
