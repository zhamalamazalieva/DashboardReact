import React from "react";
import { BtnGoBack, BtnAddUser, BtnSaveSettings } from "../../../components/btns";
const BasicProfile = () => {
  return (
    <div className="profile__basic">
      <form className="form">
          <div className="form__header">
                <h3 className="form__title">Basic</h3>
                <span className="form__description">
                The information can be edited from yuor profile page
                </span>
          </div>
          <div className="form__middle row">
            <div className="col-6 form__item">
            <label>
          <input
            required
            type="text"
            className="form__input"
            placeholder="First Name"
          />
          <span className="form__text">First Name</span>
        </label>
            <label>
            <input
                required
                type="text"
                className="form__input"
                placeholder="ID Number"
            />
            <span className="form__text">ID Number</span>
            </label>
            <label>
            <input
                required
                type="text"
                className="form__input"
                placeholder="Phone Number"
            />
            <span className="form__text">Phone Number</span>
            </label>
            </div>
            <div className="col-6 form__item">
            <label>
            <input
                required
                type="email"
                className="form__input"
                placeholder="Email"
            />
            <span className="form__text">Email</span>
            </label>
            <label>
          <input
            required
            className="form__input"
            placeholder="Profile Picture"
          />
          <span className="form__text">Profile Picture</span>
        </label>
        <label>
          <input
            required
            className="form__input"
            placeholder="Profile Picture"
          />
          <span className="form__text">Profile Picture</span>
        </label>
            </div>
          </div>
          <div className="form__footer">
          <BtnSaveSettings />
          </div>
      </form>
    </div>
  );
};

export default BasicProfile;
