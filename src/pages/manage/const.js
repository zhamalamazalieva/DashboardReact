export const columns = [
    { field: 'Selected users',
      sortable: false,
      headerName: '',
      width: 220,
      renderCell: (params) => (
        <div className="row users__row">
          <img className='users__avatar' src={params.row.avatar} alt='А картинки нет, ай ай' />
          <span className='users__name'>{params.row.fullName}</span>
        </div>
      ),
    },

    {
      field: 'userID',
      headerName: 'User ID',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email Address',
      description: 'This column has a value getter and is not sortable.',
      width: 210,

    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      description: 'This column has a value getter and is not sortable.',
      width: 210,

    },
    {
      field: 'dateOfRegistry',
      headerName: 'Account created',
      description: 'This column has a value getter and is not sortable.',
      width: 210,

    },
  ];
  
  export const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];