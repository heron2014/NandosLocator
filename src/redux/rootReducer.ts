import { combineReducers } from 'redux';
import restaurants from './restaurants/reducer';

const rootReducer = combineReducers({
  restaurants,
});

export default rootReducer;
