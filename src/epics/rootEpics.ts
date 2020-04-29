import { combineEpics } from "redux-observable";
import { fetchCountriesEpic, fetchCountryEpic } from "./fetchEpic";

export default combineEpics(
  fetchCountryEpic,
  fetchCountriesEpic,
);