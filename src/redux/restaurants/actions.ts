import { RestaurantItem } from '../../api';

export enum RestaurantsActionTypes {
  GET_RESTAURANTS = 'GET_RESTAURANTS',
  GET_RESTAURANTS_SUCCESS = 'GET_RESTAURANTS_SUCCESS',
  GET_RESTAURANTS_FAILURE = 'GET_RESTAURANTS_FAILURE',
}

interface GetRestaurants {
  type: typeof RestaurantsActionTypes.GET_RESTAURANTS;
}

interface GetRestaurantsSuccess {
  type: typeof RestaurantsActionTypes.GET_RESTAURANTS_SUCCESS;
  restaurants: RestaurantItem[];
}

interface GetRestaurantsFailure {
  type: typeof RestaurantsActionTypes.GET_RESTAURANTS_FAILURE;
  error: string;
}

export const getRestaurants = (): GetRestaurants => ({
  type: RestaurantsActionTypes.GET_RESTAURANTS,
});

export const getRestaurantsSuccess = (
  restaurants: RestaurantItem[],
): GetRestaurantsSuccess => ({
  type: RestaurantsActionTypes.GET_RESTAURANTS_SUCCESS,
  restaurants,
});

export const getRestaurantsFailure = (
  error: string,
): GetRestaurantsFailure => ({
  type: RestaurantsActionTypes.GET_RESTAURANTS_FAILURE,
  error,
});

export type RestaurantsActions =
  | GetRestaurants
  | GetRestaurantsSuccess
  | GetRestaurantsFailure;
