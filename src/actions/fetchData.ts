export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
})

export const fetchDataSuccess = (payload: any) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
})

export const fetchDataFailure = () => ({
  type: FETCH_DATA_FAILURE,
})