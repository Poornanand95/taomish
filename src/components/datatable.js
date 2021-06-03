import { ColumnChooser } from '@devexpress/dx-react-grid';
import React from 'react';

import './style.css';
function Datatable({ data }) {
  const columns = [
    'tradeId',
    'tradeObligationId',
    'tradeTransactionType',
    'company',
    'commodity',
    'counterparty',
    'profitcenter',
    'incoterm',

    'location',
    'priceType',
    'deliveryStartDate',
    'deliveryEndDate',
    'tradeStatus',
    'pricingStatus',
  ];

  console.log('data');
  console.log(data);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead className='table-heading'>
        <tr>
          {data[0] &&
            columns.map((heading) => (
              <th className='each-heading'>{heading}</th>
            ))}
          <th className='each-heading'>'tradeQuantity + quantityUOM'</th>
          <th className='each-heading'>'plannedQuantity + quantityUOM'</th>
          <th className='each-heading'>'unplannedQuantity + quantityUOM'</th>
          <th className='each-heading'>
            'tradePrice + tradePriceCurrency / tradePriceUom'
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr className='data'>
            {columns.map((column) => (
              <td className='each-data-row'>{row[column]}</td>
            ))}
            <td className='each-data-row'>
              {Number(data['tradeQuantity']) + Number(data['quantityUOM'])}
            </td>
            <td className='each-data-row'>
              {Number(data['plannedQuantity']) + Number(data['quantityUOM'])}
            </td>
            <td className='each-data-row'>
              {Number(data['unplannedQuantity']) + Number(data['quantityUOM'])}
            </td>
            <td className='each-data-row'>
              {(Number(data['tradePrice']) +
                Number(data['tradePriceCurrency'])) /
                Number(data['tradePriceUom'])}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Datatable;
