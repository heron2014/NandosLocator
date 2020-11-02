import { all, fork } from 'redux-saga/effects';
import watchGetRestaurantsSaga from './restaurants/watchGetRestaurantsSaga';

export default function* rootSaga() {
  yield all([fork(watchGetRestaurantsSaga)]);
}
