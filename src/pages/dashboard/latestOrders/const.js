export const columns = [
    { field: 'orderID',
      sortable: false,
      headerName: 'Order ID',
      width:220,
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
      width: 210,
    },
    {
      field: 'dateOfRegistry',
      headerName: 'Date',
      description: 'This column has a value getter and is not sortable.',
      width: 210,

    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      width: 210,

    },
    {
      field: 'action',
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      width: 150,
      renderCell: (params) => (
        <div className="row users__row">
          <span className='users__name'></span>
          <span className='users__name'>hkh</span>
        </div>
      ),

    },
  
  ];
  