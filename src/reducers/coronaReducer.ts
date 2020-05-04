import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_MICRO_DATA_REQUEST, FETCH_MICRO_DATA_SUCCESS } from '../actions/fetchData';
import { RootAction } from '../redux/store';

export interface ICoronaDataItem {
  cases: number;
  country: string;
  countryInfo: {
    flag: string;
  };
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
    case FETCH_MICRO_DATA_REQUEST:
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MICRO_DATA_SUCCESS:
    case FETCH_DATA_SUCCESS:
      const data = action.payload;

      return {
        ...state,
        data: Array.isArray(data) ? data : [data],
        loading: false
      };

    default: return state
  }
}