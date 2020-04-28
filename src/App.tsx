import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

const App = () => {
  const onClick = () => {
    store.dispatch({ type: 'FETCH_DATA_REQUEST' })
  }
  return (
    <Provider store={store}>
      <button onClick={onClick}>
        Click
      </button>
    </Provider>
  );
}

export default App;
