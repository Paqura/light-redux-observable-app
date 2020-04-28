import { FETCH_DATA_REQUEST } from "../actions/fetchData";
import { ofType, Epic } from "redux-observable";
import { mapTo } from 'rxjs/operators';

export const fetchEpic: Epic<any> = (action$) => action$.pipe(
  ofType(FETCH_DATA_REQUEST),
  mapTo({ type: 'FETCH_DATA_FAILURE' })
)