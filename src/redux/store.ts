import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';
import rootEpic from '../epics/rootEpics';
import { FetchActions } from '../actions/fetchData';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, logger)
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = ReturnType<FetchActions>;