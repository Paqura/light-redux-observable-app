import { ICoronaDataItem } from "../reducers/coronaReducer";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST' as const;
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS' as const;
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE' as const;

export const FETCH_MICRO_DATA_REQUEST = 'FETCH_MICRO_DATA_REQUEST' as const;
export const FETCH_MICRO_DATA_SUCCESS = 'FETCH_MICRO_DATA_SUCCESS' as const;
export const FETCH_MICRO_DATA_FAILURE = 'FETCH_MICRO_DATA_FAILURE' as const;

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
})

export const fetchDataSuccess = (payload: ICoronaDataItem[]) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
})

export const fetchDataFailure = () => ({
  type: FETCH_DATA_FAILURE,
})

export const fetchMicroDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
})

export const fetchMicroDataSuccess = (payload: ICoronaDataItem[]) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
})

export const fetchMicroDataFailure = () => ({
  type: FETCH_DATA_FAILURE,
})

export type FetchActions =
  | typeof fetchDataRequest
  | typeof fetchDataSuccess
  | typeof fetchDataFailure
  | typeof fetchMicroDataRequest
  | typeof fetchMicroDataSuccess
  | typeof fetchMicroDataFailure;