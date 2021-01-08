export const columns = [
    { field: 'orderID',
      sortable: false,
      headerName: 'Order ID',
      width:200,
      renderCell: (params) => (
        <div className="row users__row">
          <span className='users__name'>{params.row.fullName}</span>
        </div>
      ),
  
    },
    {
      field: 'userID',
      sortable: true,
      headerName: 'Customer',
      width: 200,
    },
    {
      field: 'dateOfRegistry',
      headerName: 'Date',
      description: 'This column has a value getter and is not sortable.',
      width: 200,

    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      width: 200,

    },
    {
      field: 'action',
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      width: 200,
      renderCell: (params) => (
        <div className="row users__row">
          <span className='users__name'>hkh</span>
          <span className='users__name'>hkh</span>
        </div>
      ),

    },
  
  ];
  
  // export const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];