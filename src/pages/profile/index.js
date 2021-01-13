import React from 'react';
import UsersProfile from './userProfile';
import "./style.scss";

const Profile = () => {
    return (
    <section className="profile">
        <div className="section-container">
            <div className="col-4">
                <UsersProfile/>
            </div>
            <div className="col-6">

            </div>
        </div>
    </section>
    )
}

export default Profile
