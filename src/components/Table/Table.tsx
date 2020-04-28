import React from 'react';

const Table = () => {
  return (
    <table className="blueTable">
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
        {/* {data.map((user, idx) => (
          <tr key={user.country}>
            <td>{idx}</td>
            <td>{user.country}</td>
            <td>{user.cases}</td>
          </tr>
        ))} */}
        Ничего здесь пока
      </tbody>
    </table>
  )
}

export default Table;