import React from 'react';
import headerLogo from '../../assets/image/svg/logo.svg';
const Logo = () => {
    return (
      <div className='logo'>
        <a className='logo__link' href='index.html'>
          <img src={headerLogo} alt='' />
          <span>Devias</span>
        </a>
      </div>
    );
  };
  export default Logo;
