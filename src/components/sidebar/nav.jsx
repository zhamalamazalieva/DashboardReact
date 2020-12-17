import React from 'react';
import { navList } from './const.js';
import {Link} from 'react-router-dom';

const Nav = () => {
    const [itemActive, setItemActive] = React.useState(0);
    const handleClick = (index) => {
        setItemActive(index);
    };
    return (
        <nav className='sidebar__nav nav'>
            <ul className='nav__menu'>
                {navList.map((item, index) => {
                    return (
                        <li 
                        onClick = {() => {handleClick(index)}}
                        className={`menu__item ${itemActive === index ? 'is-active' : ''}`}>
            
                            <Link className='menu__link' to={item.link}>
                             {item.icon}
                                <span>{item.text}</span>
                            </Link>
                        </li>
                    );
                    })}
            </ul>
        </nav>
    )
};
export default Nav;
