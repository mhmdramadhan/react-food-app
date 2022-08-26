import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import clasess from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const totalAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(cartCtx.totalAmount);

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const cartItems = (
    <ul className={clasess['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={clasess.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={clasess.actions}>
        <button className={clasess['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={clasess.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
