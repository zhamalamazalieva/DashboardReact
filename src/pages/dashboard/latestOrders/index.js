import React from "react";
import TableData from "./TableData";
import axios from "axios";
import {BtnAddOrder} from '../../../components/btns/index';

const LatestOrders = () => {
  const [userData, setUserData] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUserData(data.users));
  }, []);

  return (
    <div className="latest-order">
      <div className="latest-order__header">
        <div className="latest-order__header--left">
          <h3 className="column__title">Latest Products</h3>
          <span className="column__subtitle">5 in total</span>
        </div>
        <div className="latest-order--right">
            <BtnAddOrder/>
        </div>
      </div>
      <div
        className="latest-order__order order"
        style={{ height: 450, width: "100%" }}
      >
        <TableData users={userData} />
      </div>
    </div>
  );
};

export default LatestOrders;
