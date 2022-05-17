import React, { Fragment } from 'react';
import clasess from './Header.module.css';

import HeaderCardButton from './HeaderCardButton';
import mealsimgae from '../../assets/meals.jpg';

const Header = () => {
  return (
    <Fragment>
      <header className={clasess.header}>
        <h1>React Foods</h1>
        <div></div>
        <HeaderCardButton />
        <div></div>
      </header>
      <div className={clasess['main-image']}>
        <img src={mealsimgae} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
