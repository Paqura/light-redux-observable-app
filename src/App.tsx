import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/store';
import { Table } from './components/Table';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
}

export default App;
