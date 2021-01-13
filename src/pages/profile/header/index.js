import React from 'react';

const Header = () => {
    const ProfileMenu = ['Profile','Account','Price Plans'];
    const [activeProfileItem, setActiveProfileItem] = React.useState(0);
   
    return (
        <div className="profile__header">
            <div className="profile__row row">
                <ul>
                {ProfileMenu.map((item, index) => {
                    return(
                        <li
                        onClick={() => {setActiveProfileItem(index)}}
                        className={`${activeProfileItem === index ? 'active' : ''}`}>{item}</li>
                    )
                })}
                </ul>
            </div>
            <hr/>
        </div>
    )
}

export default Header;
