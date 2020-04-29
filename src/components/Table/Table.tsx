import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table as RTable } from 'react-bootstrap';
import { FETCH_DATA_REQUEST } from '../../actions/fetchData';

import { RootState } from '../../redux/store';
import { IState } from '../../reducers/rootReducer';

const Table = () => {
  const dispatch = useDispatch();
  const data = useSelector<RootState>(state => state.covid.data) as IState['data'];

  useEffect(() => {
    dispatch({ type: FETCH_DATA_REQUEST });
  }, []);

  return (
    <RTable striped bordered hover>
      <thead>
        <tr>
          <td>№</td>
          <td>Country</td>
          <td onClick={() => {}}>
            Cases
          </td>
        </tr>
      </thead>
      <tbody>
        {data.map((user, idx) => (
          <tr key={user.country}>
            <td>{idx}</td>
            <td>{user.country}</td>
            <td>{user.cases}</td>
          </tr>
        ))}
        Ничего здесь пока
      </tbody>
    </RTable>
  )
}

export default Table;