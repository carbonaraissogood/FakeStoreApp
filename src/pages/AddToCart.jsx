import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


const AddToCart = ({ cart = { products: [] }, setCartQuantity, data, error, isLoading }) => {
  const location = useLocation();
  const cartQuantity = location.state?.cartQuantity ?? 0;

  // Change itemQuantity to an object keyed by productId
  const [itemQuantities, setItemQuantities] = useState({});

  const handleQuantityChange = (productId, event) => {
    setItemQuantities(prev => ({
      ...prev,
      [productId]: event.target.value
    }));

    // setCartQuantity();
  }

  const handleDeleteItem = (id) => {
    axios
          .delete(`https://fakestoreapi.com/carts/${id}`)
          .then(response => console.log(response.data));
  }

  return (
    <main className="cart">

      {error && <p>{error.message}</p>}

      {isLoading && <p>Loading</p>}

      <h2>Total Items in Cart: {cartQuantity}</h2>
      
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
            <tr className="cartTR" key={item.id}>
              <td>{item.productId}</td>
              <td>
                {data.find((product) =>
                  (product.id === item.productId)).title
                }
              </td>
              <td>
                {data.find((product) =>
                  (product.id === item.productId)).price
                }
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
                  onClick={() => handleDeleteItem(item.id)}
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
