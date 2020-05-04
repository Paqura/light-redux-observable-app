import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';
import rootEpic from '../epics/rootEpics';
import { fetchAction } from '../actions/fetchData';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, logger)
  );

  epicMiddleware.run(rootEpic);

  return store;
}

type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = ReturnType<InferValueTypes<typeof fetchAction>>;