import { ICoronaDataItem } from "../reducers/coronaReducer";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FETCH_MICRO_DATA_REQUEST = 'FETCH_MICRO_DATA_REQUEST';
export const FETCH_MICRO_DATA_SUCCESS = 'FETCH_MICRO_DATA_SUCCESS';
export const FETCH_MICRO_DATA_FAILURE = 'FETCH_MICRO_DATA_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
} as const)

export const fetchDataSuccess = (payload: ICoronaDataItem[]) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
} as const)

export const fetchDataFailure = () => ({
  type: FETCH_DATA_FAILURE,
} as const)

export const fetchMicroDataRequest = (country: string) => ({
  type: FETCH_MICRO_DATA_REQUEST,
  payload: { country },
} as const)

export const fetchMicroDataSuccess = (payload: ICoronaDataItem[]) => ({
  type: FETCH_MICRO_DATA_SUCCESS,
  payload,
} as const)

export const fetchMicroDataFailure = () => ({
  type: FETCH_MICRO_DATA_FAILURE,
} as const)

export const fetchAction = {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  fetchMicroDataRequest,
  fetchMicroDataSuccess,
  fetchMicroDataFailure,
}