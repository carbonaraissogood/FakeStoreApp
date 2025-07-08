import { useParams } from 'react-router-dom';
import styles from '../../FakeStoreApp.module.css';
import { useEffect, useState } from 'react';

const Checkout = ({ data }) => {
  const { productID } = useParams();
  const [buyProduct, setBuyProduct] = useState([]);

  useEffect(() => {
    setBuyProduct(data.find((product) => (product.id === Number(productID))));
  }, [data, productID])

  return (
    <main>

      <h1>Checkout</h1>

      {buyProduct && (
        <div>
          <img className={styles.modalImg} src={buyProduct.image} alt={buyProduct.title} />

          <p className={styles.selectedProductTitle}>{buyProduct.title}</p>
          
          <p>Price: <strong>{`$${buyProduct.price}`}</strong></p>
          <p>Category: <strong>{buyProduct.category}</strong></p>
          <p>Rating: <strong>{buyProduct.rating?.rate}</strong></p>

          <p className={styles.description}>Description: {buyProduct.description}</p>
          <p>Available Stock: <strong>{buyProduct.rating?.count}</strong></p>

          <p>Subtotal: </p>
          <p>Shipping: </p>

          <p>Total: </p>

          <button>Confirm Order</button>
        </div>
      )}

      {!buyProduct && <p>Not found</p>}

    </main>
  )
}

export default Checkout
