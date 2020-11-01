import { put, takeLatest, call } from 'redux-saga/effects';

import Api, { RestaurantsPayload } from '../../api';
import {
  getRestaurantsFailure,
  getRestaurantsSuccess,
  RestaurantsActionTypes,
} from './actions';

function* getRestaurant() {
  try {
    const response: RestaurantsPayload['data'] = yield call(Api.getAll);
    console.log('response', response);
    yield put(getRestaurantsSuccess(response.restaurant.items));
  } catch (error) {
    yield put(getRestaurantsFailure('Sorry something is broken'));
  }
}

export default function* watchGetRestaurants() {
  yield takeLatest(RestaurantsActionTypes.GET_RESTAURANTS, getRestaurant);
}
