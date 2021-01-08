import React from "react";
import {NavList} from "./const.js";
import {Link} from "react-router-dom";

const Nav = () => {
    const [itemActive, setItemActive] = React.useState(0);
    const handleClick = (index) => {
        setItemActive(index);
    };
    
  const handleWindowClick = (event) => {
    if (event.path[0].pathname === "/products") {
      const array = NavList.map((item) => item.link);
      const result = array.indexOf(event.path[0].pathname);
      setItemActive(result);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleWindowClick);
  }, []);
    return (
        <nav className="sidebar__nav nav">
            <ul className="nav__menu menu">
                {NavList.map((item, index) => {
                    return (
                        <li 
                        key={item + index}
                        onClick = {() => {handleClick(index)}}
                        className={`menu__item ${
                            window.location.href.includes(item.link) ? "is-active" : ""}`}>
                            <Link className="menu__link" to={item.link}>
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
