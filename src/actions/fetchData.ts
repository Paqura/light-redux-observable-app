import { IState } from "../reducers/rootReducer";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FETCH_MICRO_DATA_REQUEST = 'FETCH_MICRO_DATA_REQUEST';
export const FETCH_MICRO_DATA_SUCCESS = 'FETCH_MICRO_DATA_SUCCESS';
export const FETCH_MICRO_DATA_FAILURE = 'FETCH_MICRO_DATA_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
})

export const fetchDataSuccess = (payload: IState['data']) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
})

export const fetchDataFailure = () => ({
  type: FETCH_DATA_FAILURE,
})

export const fetchMicroDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
})

export const fetchMicroDataSuccess = (payload: IState['data']) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
})

export const fetchMicroDataFailure = () => ({
  type: FETCH_DATA_FAILURE,
})
