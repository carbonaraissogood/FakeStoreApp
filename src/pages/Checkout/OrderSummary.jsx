import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './OrderSummary.module.css'

const OrderSummary = ({ cart, totalPrice, setCart, setCartQuantity }) => {
  const [deliveryMode, setDeliveryMode] = useState('Door-to-door');
  const [paymentMode, setPaymentMode] = useState('Cash on Delivery');
  const [deliveryFee, setDeliveryFee] = useState(35);
  const [finalPrice, setFinalPrice] = useState(totalPrice + deliveryFee);

  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Update delivery fee based on delivery mode
    if (deliveryMode === 'Door-to-door') {
      setDeliveryFee(35);
    } else if (deliveryMode === 'Pickup') {
      setDeliveryFee(25);
    }
  }, [deliveryMode]);

  useEffect(() => {
    // Update final price whenever totalPrice or deliveryFee changes
    setFinalPrice(totalPrice + deliveryFee);
  }, [totalPrice, deliveryFee]);

  const handleConfirmOrder = () => {
    setIsConfirmed(true);
  }

  const handleSubmittedOrder = () => {
    alert("Ordered successfully!");
    setCart({});
    setCartQuantity(0);
    setIsConfirmed(false);
    navigate("/");
  }

  const handleCancelOrder = () => {
    setIsConfirmed(false);
  }

  return (
    <main className={styles.orderContainer}>
    {cart.products &&
      <>
        <h2>Order Details</h2>
        <p>Balance amount: P{totalPrice}</p>

        <div className={styles.radioGroup}>
          <p>Mode of Delivery:</p>

          <label className={styles.radioOption}>
            <input
              type="radio"
              name="deliveryMode"
              value="Door-to-door"
              checked={deliveryMode === 'Door-to-door'}
              onChange={(e) => setDeliveryMode(e.target.value)}
            />
            Door-to-door (P35)
          </label>

          <label className={styles.radioOption}>
            <input
              type="radio"
              name="deliveryMode"
              value="Pickup"
              checked={deliveryMode === 'Pickup'}
              onChange={(e) => setDeliveryMode(e.target.value)}
            />
            Pickup (P25)
          </label>
        </div>

        <p>Total: P{finalPrice}</p>

        <div className={styles.radioGroup}>
          <p>Mode of Payment:</p>

          <label className={styles.radioOption}>
            <input
              type="radio"
              name="paymentMode"
              value="Cash on Delivery"
              checked={paymentMode === 'Cash on Delivery'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label className={styles.radioOption}>
            <input
              type="radio"
              name="paymentMode"
              value="GCash"
              checked={paymentMode === 'GCash'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            GCash
          </label>

          <label className={styles.radioOption}>
            <input
              type="radio"
              name="paymentMode"
              value="Credit Card"
              checked={paymentMode === 'Credit Card'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            Credit Card
          </label>
        </div>

        <button
          className={styles.orderButton}
          onClick={handleConfirmOrder}
        >
          Confirm your order
        </button>

        {isConfirmed && (
          <>
            <h2>Are you sure?</h2>
            <div className={styles.buttonGroup}>
              <button
                className={styles.confirmButton}
                onClick={handleSubmittedOrder}
              >Yes</button>

              <button
                className={styles.cancelButton}
                onClick={handleCancelOrder}
              >No</button>
            </div>
          </>
        )}
      </>
    }
  </main>
  );
};

export default OrderSummary;
