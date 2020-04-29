import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from '../actions/fetchData';
import { RootAction } from '../redux/store';

export interface ICoronaDataItem {
  country: string;
  cases: number;
}

export interface IState {
  data: Array<ICoronaDataItem>;
  error: string | null;
  loading: boolean;
}

const initialState: IState = {
  data: [],
  error: null,
  loading: false,
}

export const coronaReducer = (state: IState = initialState, action: RootAction) => {
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