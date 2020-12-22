import React from 'react';
import Time from  'react-time';
import {rows, columns} from './const';
import { DataGrid } from '@material-ui/data-grid';

const TableData = ({rows}) => {
let now = new Date();
  return (
    <React.Fragment>
       <DataGrid rows={rows} columns={columns} pageSize={6} checkboxSelection />
      {/* {users.map((item, index) => {
        let wasDate = new Date(`${item.dateOfRegistry}`)
        return (
          <tr className='users__row'>
            <td className='col-4 row'>
              <img className='users__avatar' src={item.avatar} alt='avatar' />
              <span className='users__name'>{item.fullName}</span>
            </td>
            <td className='col-2 users__headers'>{item.userID}</td>
            <td className='col-2 users__headers'>{item.phone}</td>
            <td className='col-2 users__headers'>{item.email}</td>
            <td className='col-2 users__headers users__date'>
              {users[index].dateOfRegistry.length 
              !== 0 ?
              <Time value={wasDate} format='YYYY/MM/DD'/> : 
              <Time value={now} format='YYYY/MM/DD'/>}</td>
          </tr>
        );
      })} */}
    </React.Fragment>
  );
};

export default TableData;