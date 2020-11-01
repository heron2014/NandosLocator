import { all, fork } from 'redux-saga/effects';
import getRestaurantsSaga from './restaurants/getRestaurantsSaga';

export default function* rootSaga() {
  yield all([fork(getRestaurantsSaga)]);
}
