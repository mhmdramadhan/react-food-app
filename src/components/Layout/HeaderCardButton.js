import { useContext, useEffect, useState } from 'react';

import clasess from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

const HeaderCardButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  // get items array from cartCtx
  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasess = `${clasess.button} ${
    btnIsHighLighted ? clasess.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    // set css bump to true
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);
    console.log('set')

    return () => {
      clearTimeout(timer);
      console.log('clean')
    };
  }, [items]);

  return (
    <button className={btnClasess} onClick={props.onClick}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={clasess.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
