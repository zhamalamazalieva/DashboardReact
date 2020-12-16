import React from 'react';

const Items = ({users}) => {

  return (
    <React.Fragment>
      {users.map((item) => {
        return (
          <tr className='users_row'>
            <td className='col-3 row'>
              <img className='users__avatar' src={item.avatar} alt='avatar' />
              <span className='users__name'>{item.fullName}</span>
            </td>
            <td className='col-3 users__headers'>{item.userID}</td>
            <td className='col-3 users__headers'>{item.phone}</td>
            <td className='col-3 users__headers'>{item.email}</td>
            <td className='col-1 users__headers users__date'>{item.dateOfRegistry}</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default Items;