import React from 'react';
import TableData from './TableData';
import axios from 'axios';

const LatestOrders = () => {
    const [userData, setUserData] = React.useState([]);
    React.useEffect(async ()=>
    {
        await axios
        .get(`http://localhost:3000/database.json`)
        .then((response) => response)
        .then(({data}) => setUserData(data.users));
        }, []);

    return (
        <div>
            <TableData users={userData} />
        </div>
    )
}

export default LatestOrders;
