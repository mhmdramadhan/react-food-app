import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import clasess from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [hasOrder, setHasOrder] = useState(false);

  // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const totalAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(cartCtx.totalAmount);

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setHasOrder(true);
  };

  const submitOrderHandler = (userData) => {
    fetch('https://react-http-13702-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        ordredItems: cartCtx.items,
      }),
    });
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

  const modalActions = (
    <div className={clasess.actions}>
      <button className={clasess['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={clasess.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={clasess.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {hasOrder && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!hasOrder && modalActions}
    </Modal>
  );
};

export default Cart;
