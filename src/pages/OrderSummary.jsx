import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

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
    <main>
      {cart.products &&
        <>
          <h2>Order Details</h2>
          <p>Balance amount: P{totalPrice}</p>

          <p>Mode of Delivery:</p>
          <input
            type="radio"
            id="Door-to-door"
            name="deliveryMode"
            value="Door-to-door"
            checked={deliveryMode === 'Door-to-door'}
            onChange={(e) => setDeliveryMode(e.target.value)}
          />
          <label htmlFor="Door-to-door">Door-to-door (P35)</label>

          <input
            type="radio"
            id="Pickup"
            name="deliveryMode"
            value="Pickup"
            checked={deliveryMode === 'Pickup'}
            onChange={(e) => setDeliveryMode(e.target.value)}
          />
          <label htmlFor="Pickup">Pickup (P25)</label>

          <p>Total: P{finalPrice}</p>

          <p>Mode of Payment:</p>
          <input
            type="radio"
            id="CashOnDelivery"
            name="paymentMode"
            value="Cash on Delivery"
            checked={paymentMode === 'Cash on Delivery'}
            onChange={(e) => setPaymentMode(e.target.value)}
          />
          <label htmlFor="CashOnDelivery">Cash on Delivery</label>

          <input
            type="radio"
            id="GCash"
            name="paymentMode"
            value="GCash"
            checked={paymentMode === 'GCash'}
            onChange={(e) => setPaymentMode(e.target.value)}
          />
          <label htmlFor="GCash">GCash</label>

          <input
            type="radio"
            id="CreditCard"
            name="paymentMode"
            value="Credit Card"
            checked={paymentMode === 'Credit Card'}
            onChange={(e) => setPaymentMode(e.target.value)}
          />
          <label htmlFor="CreditCard">Credit Card</label>

          <button
            onClick={handleConfirmOrder}
          >
            Confirm your order
          </button>

          {isConfirmed && (
            <>
              <h2>Are you sure?</h2>

              <button
                onClick={handleSubmittedOrder}
              >Yes</button>

              <button
                onClick={handleCancelOrder}
              >No</button>
            </>
          )}
        </>
      }  

    </main>
  );
};

export default OrderSummary;
