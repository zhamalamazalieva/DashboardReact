import React from "react";
import axios from "axios";
import TableData from "./tableData";
import SearchForm from "./search_form";
import {BtnGoBack, BtnFilter, BtnAdd} from "../../components/btns/";
import Modal from "./modal";
import "./style.scss";

export default function Manage() {
  const [userData, setUserData] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const handleClickModal = () => {
      setActiveModal(true);
  };

  React.useEffect(async () => {
      await axios
        .get(`http://localhost:3002/database.json`)
        .then((response) => response)
        .then(({data}) => setUserData(data.users));
        }, []);

  return (
    <section className="manage">
       <div className="section-container">
       {activeModal && (
        <Modal
          userData={userData}
          setUserData={setUserData}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        )}
        <div className="space-between">
            <div className="row">
                <BtnFilter />
                <SearchForm  setSearchValue={setSearchValue} />
            </div>            
            <div onClick={handleClickModal} >
                <BtnAdd />
            </div>
          </div>
          <div className="manage__users users">
            <TableData
              users={userData.filter((item) => {
                if (searchValue === "") {
                  return item;
                } else if (item.fullName.toLowerCase().includes(searchValue.toLowerCase())) {
                  return item;
                }
              })}
            />
          </div>
       </div>
    </section>
  );
}

