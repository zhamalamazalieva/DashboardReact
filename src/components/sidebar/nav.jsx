import {  navList } from './const.js';
import { navImg } from './const.js';
const Nav = () => {
    return (
        <nav className='sidebar__nav nav'>
            <ul className='nav__menu'>
                {navList.map((item, index) => {
                    return (
                        <li className='menu__item'>
                            <a className='menu__link' href='#'>
                                <img className='menu__icon' src={navImg[index]} alt='menu__icon'/>
                                <span>{item}</span>
                            </a>
                        </li>
                    );
                    })}
            </ul>
        </nav>
    )
};
export default Nav;
