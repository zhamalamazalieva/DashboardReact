import React from 'react';
import Logo from './logo.jsx'
import NavItems from "./items.jsx";
import './style.scss';
const Header = () => {
    return(
       <div className="header">
            <div className="container">
            <div className="header__row">
                <Logo />
                <div className="header__nav">
                <NavItems />
                </div>
            </div>
        </div>
       </div>
    )
};
export default Header;