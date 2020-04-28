import { combineReducers } from 'redux';

const reducer = (state: any = { test: "TEST" }, action: any) => {
  switch(action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        test: 'TEST UPDATED'
      }
    default: return state
  }
}

export default combineReducers({
  reducer,
});