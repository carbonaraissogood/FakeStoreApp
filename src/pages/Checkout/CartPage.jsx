// CartPage.js
import Cart from './Cart';
import OrderSummary from './OrderSummary';
import styles from './CartPage.module.css';

const CartPage = (props) => {
  return (
    <div className={styles.cartPage}>
      <Cart {...props} />
      <OrderSummary
        cart={props.cart}
        totalPrice={props.cart.products.reduce((total, item) => {
          const product = props.data.find(p => p.id === item.productId);
          return total + (product?.price || 0) * item.quantity;
        }, 0)}
        setCart={props.setCart}
        setCartQuantity={props.setCartQuantity}
      />
    </div>
  );
};

export default CartPage;
