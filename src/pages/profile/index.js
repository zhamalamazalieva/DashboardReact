import React from 'react';
import UsersProfile from './userProfile';
import Header from './header';
import BasicProfile from './basicProfile';
import "./style.scss";

const Profile = () => {
    return (
    <section className="profile">
        <div className="section-container">
            <Header/>
            <div className="row profile__margin">
                <div className="col-5 profile__item">
                    <UsersProfile/>
                </div>
                <div className="col-7 profile__item">
                    <BasicProfile/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Profile
