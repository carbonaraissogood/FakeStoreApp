import React from 'react'

const OrderSummary = ({ totalPrice }) => {
  return (
    <main>
      <h2>Order Details</h2>
      <p>Balance amount: {totalPrice}</p>

      <p>Shipping:

        <br />

        <input 
          type="radio"
          id="Door-to-door"
        />

        <label htmlFor="Door-to-door">
          Door-to-door
        </label>

        <input 
          type="radio"
          id="Pickup"
        />

        <label htmlFor="Pickup">
          Pickup
        </label>

      </p>

      <p>Total: 135</p>

      <p>Mode of Payment: Cash on Delivery</p>

      <button>Confirm your order</button>
    </main>
  )
}

export default OrderSummary;
