import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';
import rootEpic from '../epics/rootEpics';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, logger)
  );

  epicMiddleware.run(rootEpic);

  return store;
}