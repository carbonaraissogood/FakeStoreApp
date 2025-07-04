import { useState } from "react";
import axios from "axios";
const AddToCart = ({ cart = { products: [] }, cartQuantity, setCartQuantity, setCart, data, error, isLoading, cartId }) => {

  const [itemQuantities, setItemQuantities] = useState({});

  const updateCartQuantities = (updatedProducts) => {
    // Update cart quantity
    const totalItems = updatedProducts.reduce((acc, item) => acc + item.quantity, 0);
    setCartQuantity(totalItems);
  };

  const handleQuantityChange = (productId, event) => {

    if (Number(event.target.value) < 1) return;

    if (Number(event.target.value) > 5) {
      alert('Item is limited only up to 5 in quantity');
      return;
    };

    const newQuantity = Number(event.target.value);

    setItemQuantities(prev => ({
      ...prev,
      [productId]: newQuantity
    }));

    const updatedProducts = cart.products.map(product => {
      if (product.productId === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setCart(prev => ({
      ...prev,
      products: updatedProducts
    }));

    // Update cart quantity after editing quantity
    updateCartQuantities(updatedProducts);
  }

  const handleDeleteItem = (productId) => {

    //Dito dapat yung request sa API for deletion

    const updatedProducts = cart.products.filter((product) => (
      product.productId !== productId
    ))

    setCart(prev => ({
        ...prev,
        products: updatedProducts
      })
    );

    // Update cart quantity after deletion
    updateCartQuantities(updatedProducts);
  }

  const handleDeleteAll = (cartId) => {
    axios
          .delete(`https://fakestoreapi.com/carts/${cartId}`)
          .then(response => console.log(response.data));

    setCart({});
    setCartQuantity(0);
  }

  return (
    <main className="cart">

      {error && <p>{error.message}</p>}

      {isLoading && <p>Loading</p>}

      <h2>Total Items in Cart: {cartQuantity}</h2>

      <button
        onClick={() => handleDeleteAll(cartId)}
      >
        Delete All
      </button>
      
      <table>
        <thead>
          <tr>
            <th>Added Items</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!error && !isLoading && cart && (cart.products || []).map((item) => (
            <tr className="cartTR" key={item.productId}>
              <td>{item.productId}</td>
              <td>
                {data.find((product) =>
                  (product.id === item.productId))?.title || 'Unknown Product'}
              </td>
              <td>
                {data.find((product) =>
                  (product.id === item.productId))?.price || 0}
              </td>

              <td>
                <input 
                  type="number" 
                  value={itemQuantities[item.productId] || item.quantity}
                  onChange={(event) => handleQuantityChange(item.productId, event)}
                />
              </td>

              <td>{data.find((product) => product.id === item.productId).price * (itemQuantities[item.productId] || item.quantity)}</td>

              <td>
                <button
                  onClick={() => handleDeleteItem(item.productId)}
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  );
};

export default AddToCart;