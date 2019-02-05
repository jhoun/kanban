import { combineReducers } from 'redux';
import cardData from './Cards';
import userData from './Users';

export default combineReducers({
  cardData,
  userData
})