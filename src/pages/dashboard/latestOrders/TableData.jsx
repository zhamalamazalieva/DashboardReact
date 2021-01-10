import React from 'react';
import {columns} from './const';
import { DataGrid } from '@material-ui/data-grid';
const TableData = ({users}) => {
    return (
        <React.Fragment>
        <DataGrid rows={users} columns={columns} pageSize={6}  />
     </React.Fragment>
    )
}

export default TableData;
