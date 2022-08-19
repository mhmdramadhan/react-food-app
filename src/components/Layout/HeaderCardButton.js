import React from 'react';
import clasess from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCardButton = (props) => {
  return (
    <button className={clasess.button} onClick={props.onClick}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={clasess.badge}>
          3
      </span>
    </button>
  );
};

export default HeaderCardButton;
