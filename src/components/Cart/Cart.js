import clasess from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={clasess['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 22.999 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={clasess.total}>
        <span>Total Amount</span>
        <span>22.999</span>
      </div>
      <div className={clasess.actions}>
        <button className={clasess['button--alt']}>Close</button>
        <button className={clasess.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
