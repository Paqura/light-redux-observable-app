import { FETCH_DATA_REQUEST, FETCH_MICRO_DATA_REQUEST, fetchDataSuccess, fetchMicroDataSuccess } from "../actions/fetchData";
import { ofType, Epic } from "redux-observable";
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ICoronaDataItem } from "../reducers/coronaReducer";

const baseUrl = 'https://corona.lmao.ninja';
const countryPath = '/v2/countries/';

export const fetchCountriesEpic: Epic<any> = (action$) => action$.pipe(
  ofType(FETCH_DATA_REQUEST),
  mergeMap(() => ajax.getJSON<ICoronaDataItem[]>(`${baseUrl}${countryPath}`).pipe(
    map(response => fetchDataSuccess(response))
  ))
)

export const fetchCountryEpic: Epic<any> = (action$) => action$.pipe(
  ofType(FETCH_MICRO_DATA_REQUEST),
  mergeMap(action => ajax.getJSON<ICoronaDataItem[]>(`${baseUrl}${countryPath}${action.payload}`).pipe(
    map(response => fetchMicroDataSuccess(response))
  ))
)