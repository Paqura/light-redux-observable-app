import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table as RTable } from 'react-bootstrap';
import { FETCH_DATA_REQUEST } from '../../actions/fetchData';
import { RootState } from '../../redux/store';
import { selectCoronaData } from '../../selectors/coronaSelectors';
import { ICoronaDataItem } from '../../reducers/coronaReducer';

const Table = () => {
  const dispatch = useDispatch();
  const data = useSelector<RootState>(selectCoronaData) as ICoronaDataItem[];

  useEffect(() => {
    dispatch({ type: FETCH_DATA_REQUEST });
  // dispatch is guarantee returns the same func everytime
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <td>Flag</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={item.country}>
            <td>{idx}</td>
            <td>{item.country}</td>
            <td>{item.cases}</td>
            <td>
              <span>
                <img src={item.countryInfo.flag} alt={`Flag of ${item.country}`} width="32px" />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </RTable>
  )
}

export default Table;