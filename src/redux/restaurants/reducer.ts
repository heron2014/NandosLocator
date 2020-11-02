import { RestaurantItem } from '../../api';
import { RestaurantsActions, RestaurantsActionTypes } from './actions';

export interface RestaurantsState {
  isLoading: boolean;
  error: string | null;
  restaurants: RestaurantItem[];
}

export const initialState: RestaurantsState = {
  isLoading: false,
  error: null,
  restaurants: [],
};

export default function restaurants(
  state: RestaurantsState = initialState,
  action: RestaurantsActions,
): RestaurantsState {
  switch (action.type) {
    case RestaurantsActionTypes.GET_RESTAURANTS:
      return { ...state, isLoading: true, error: null };
    case RestaurantsActionTypes.GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.restaurants,
        isLoading: false,
        error: null,
      };
    case RestaurantsActionTypes.GET_RESTAURANTS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
