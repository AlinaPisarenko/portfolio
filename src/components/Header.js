import React from 'react';

function Header() {
  return (
    <header className='header'>
      <h2 className='header__greeting heading-3'>Hi, I am</h2>
      <h1 className='header__name heading-1'>ALINA PISARENKO</h1>
      <h2 className='heading-3'>
        Web developer, Front end specialist based in New York.
      </h2>
      <div className='header__btn-group'>
        <button className='btn'>My Work</button>
        <button className='btn'>Contact me</button>
      </div>
    </header>
  );
}

export default Header;
