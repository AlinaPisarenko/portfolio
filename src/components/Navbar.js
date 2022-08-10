import React from 'react';
import logoSm from '../images/logo-sm.svg';

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src={logoSm}></img>
      <a href='#' className='navbar__link'>
        Home
      </a>
      <a href='#' className='navbar__link'>
        About me
      </a>
      <a href='#' className='navbar__link'>
        My work
      </a>
      <a href='#' className='navbar__link'>
        Contact me
      </a>
    </div>
  );
}

export default Navbar;
