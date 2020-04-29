import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/store';
import { Table } from './components/Table';
import { Container } from 'react-bootstrap';
import { Search } from './components/Search';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Search />
        <Table />
      </Container>
    </Provider>
  );
}

export default App;
