import { combineReducers } from 'redux';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from '../actions/fetchData';

export interface IState {
  data: Array<{
    country: string;
    cases: number;
  }>;
  error: string | null;
  loading: boolean;
}

const initialState: IState = {
  data: [],
  error: null,
  loading: false,
}

const reducer = (state: IState = initialState, action: any) => {
  switch(action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    default: return state
  }
}

export default combineReducers({
  covid: reducer,
});