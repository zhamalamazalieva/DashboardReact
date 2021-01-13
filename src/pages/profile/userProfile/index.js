import React from 'react';
import userImg from '../../../assets/image/jpg/avatar.jpg';

const UsersProfile = () => {
    return (
        <div className="users-profile row">
            <div className="users-profile__top">
                <div className="users-profile__info">
                    <h3 className="users-profile__name">
                    Adrian Stefan
                    </h3>
                    <span className="users-profile__country">Rm. Valcea, Romania</span><br/>
                    <span className="users-profile__time">4:32PM (GMT-4)</span>
                </div>
                <div className="users-profile__img">
                    <img src={userImg} />
                </div>
            </div>
            <div className="users-profile__bottom">
                <span className="users-profile__settings">upload picture</span>
                <span className="users-profile__settings">remove picture</span>
            </div>
        </div>
    )
}

export default UsersProfile;
