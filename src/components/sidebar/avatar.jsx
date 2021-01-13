import React from 'react';
import {Link} from 'react-router-dom';
import userImg from "../../assets/image/jpg/avatar.jpg";

const Avatar = () => {
    return (
    
        <Link to="/profile" className="sidebar__top">
            <img className="sidebar__avatar" src={userImg} alt="avatar" />
            <h3 className="sidebar__user">Will Smith</h3>
            <span className="sidebar__position">Brain Director</span>
        </Link>

    )
}

export default Avatar
