import {combineReducers} from 'redux';
import cuts from './cuts';
import youtube from './youtube';
import shared from './shared';
export default combineReducers({
  cuts,
  youtube,
  shared,
});
