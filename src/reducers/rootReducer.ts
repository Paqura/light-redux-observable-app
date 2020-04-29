import { combineReducers } from 'redux';
import { coronaReducer } from './coronaReducer';

export default combineReducers({
  corona: coronaReducer,
});