import { useContext } from 'react';

import clasess from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={clasess.button} onClick={props.onClick}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={clasess.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
