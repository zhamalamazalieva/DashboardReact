import React from "react";
import TableData from "./TableData";
import axios from "axios";

const LatestOrders = () => {
    const [userData, setUserData] = React.useState([]);
    React.useEffect(async ()=>
    {
        await axios
        .get(`http://localhost:3001/database.json`)
        .then((response) => response)
        .then(({data}) => setUserData(data.users));
        }, []);

    return (
        <div style={{ height: 400, width: "100%", backgroundColor:"white"}}>
            <TableData users={userData} />
        </div>
    )
}

export default LatestOrders;
