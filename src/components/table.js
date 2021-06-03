import React, { useState, useEffect } from 'react';
import Datatable from './datatable';
import './style.css';

function Table() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    const tradeData = JSON.parse(JSON.stringify(require('../trade_data.json')));
    setData(tradeData);
  }, []);

  function search(rows) {
    return rows.filter(
      (row) =>
        row.company.toLowerCase().indexOf(q) > -1 ||
        row.commodity.toLowerCase().indexOf(q) > -1 ||
        row.tradeTransactionType.toLowerCase().indexOf(q) > -1 ||
        row.counterparty.toLowerCase().indexOf(q) > -1 ||
        row.profitcenter.toLowerCase().indexOf(q) > -1
    );
  }
  return (
    <div className='table-container'>
      <div>
        <label>Enter key to filter</label>
        <input
          className='filter-input'
          placeholder='Enter search key'
          type='text'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
}

export default Table;
