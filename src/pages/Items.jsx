import { useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from '../FakeStoreApp.module.css';
import axios from "axios";

const Items = ({ search, setSearch, handleClickContainer, searchResults, cart = { products: [] }, cartQuantity, setCartQuantity, error, isLoading, generateSelectedProductModal, selectedProduct, setSelectedProduct, setCart }) => {

  useEffect(() => {

    const totalItems = cart.products.reduce((acc, item) => acc + item.quantity, 0);

    setCartQuantity(totalItems);
    
  }, [cart.products]);

  const handleAddToCart = async (product) => {
    const today = new Date().toISOString().split('T')[0];
    const cartId = 1;

    // Check if product already exists in cart
    const existingProductIndex = cart.products.findIndex(p => p.productId === product.id);
    let updatedProducts;

    if (existingProductIndex !== -1) {
      // Increment quantity of existing product
      updatedProducts = cart.products.map((product, index) => {
        if (index === existingProductIndex) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    } else {
      // Add new product to cart
      const newProduct = { productId: product.id, quantity: 1 };
      updatedProducts = [...(cart.products || []), newProduct];
    }

    const payload = {
      userId: 1,
      date: today,
      products: updatedProducts
    };

    try {
      const response = await axios.put(`https://fakestoreapi.com/carts/${cartId}`, payload);
      console.log('Cart updated:', response.data);
      alert(`Added "${product.title}" to cart.`);

      // Update local cart state
      setCart(prev => ({
        ...prev,
        products: updatedProducts
      }));

      console.log(updatedProducts);

      // Update cart quantity
      const totalItems = updatedProducts.reduce((acc, item) => acc + item.quantity, 0);
      setCartQuantity(totalItems);

    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart.');
    }
  };

  return (
    <main>
      {error && <p>{error.message}</p>}

      {isLoading && <p>Loading</p>}

      <Link 
        to="/addToCart" 
        state={{ cartQuantity: cartQuantity }} replace
      >
        <button className='cartButton'>CART: {cartQuantity}</button>
      </Link>

      <form onSubmit={(e) => e.preventDefault()}>

        <input
          id='search'
          type="text"
          placeholder='Search items'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </form>

      {!error && !isLoading && searchResults && (
        <div className={styles.productContainer}>
      
          {searchResults.map((filteredProduct) => (
            
            <div className={styles.perProductContainer}>
              <div
                onClick={() => handleClickContainer(filteredProduct.id)}
                key={filteredProduct.id}>

                <img className={styles.img} src={filteredProduct.image} alt={filteredProduct.title} />

                <div className={styles.productDetails}>
                  <p className={styles.productTitle}>{filteredProduct.title}</p>
                  <h3><strong>{`$${filteredProduct.price}`}</strong></h3>
                  <p className={styles.rating}>Rating: {filteredProduct.rating.rate}</p>
                  <p className={styles.category}>Category: <strong>{filteredProduct.category}</strong></p>
                </div>

                <br />
              </div>

              <Link to={`/checkout/${filteredProduct.id}`}>
                <button>Buy</button>
              </Link>

              <button
                onClick={() => handleAddToCart(filteredProduct)}>
                  Add to Cart
              </button>
              
            </div>

          ))}
        </div>
      )}

      {!error && !isLoading && selectedProduct && (
        generateSelectedProductModal(selectedProduct, () => setSelectedProduct(null))
      )}

    </main>
  )
}

export default Items
