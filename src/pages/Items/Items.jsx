import { useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from '../../FakeStoreApp.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Items = ({ search, setSearch, handleClickContainer, searchResults, cart = { products: [] }, cartQuantity, setCartQuantity, error, isLoading, generateSelectedProductModal, selectedProduct, setSelectedProduct, setCart, hasAccount }) => {

  const navigate = useNavigate();

  useEffect(() => {
    // Defensive check: ensure cart.products is an array and filter out invalid items
    const validProducts = Array.isArray(cart.products) ? cart.products.filter(p => p && typeof p.quantity === 'number') : [];

    const totalItems = validProducts.reduce((acc, item) => acc + item.quantity, 0);

    setCartQuantity(totalItems);
    
  }, [cart.products]);

  const handleAddToCart = async (product) => {

    if (hasAccount) {
      const today = new Date().toISOString().split('T')[0];
      const cartId = 1;

      // Defensive check for cart.products
      const currentProducts = Array.isArray(cart.products) ? cart.products.filter(p => p) : [];

      // Check if product already exists in cart
      const existingProductIndex = currentProducts.findIndex(p => p.productId === product.id);
      let updatedProducts;

      if (existingProductIndex !== -1) {
        // Increment quantity of existing product
        updatedProducts = currentProducts.map((product, index) => {
          if (index === existingProductIndex) {
            if (product.quantity === 5) {
              alert('Item is limited only up to 5 in quantity');
              return product;
            };
            return { ...product, quantity: product.quantity + 1};
          }
          return product;
        });
      } else {
        // Add new product to cart
        const newProduct = { productId: product.id, quantity: 1 };
        updatedProducts = [...currentProducts, newProduct];
      }

      const payload = {
        userId: 1,
        date: today,
        products: updatedProducts
      };

      try {
        const response = await axios.put(`https://fakestoreapi.com/carts/${cartId}`, payload);

        console.log('Cart updated:', response.data);

        //Nagpapakita pa rin to kahit na na-limit na sa quantity
        // alert(`Added "${product.title}" to cart.`);

        // Update local cart state
        setCart(prev => ({
          ...prev,
          products: updatedProducts
        }));

        // Update cart quantity
        const totalItems = updatedProducts.reduce((acc, item) => acc + item.quantity, 0);
        setCartQuantity(totalItems);

      } catch (error) {
        console.error('Error adding to cart:', error);
        alert('Failed to add to cart.');
      }
    } else {
      alert("Create an account or login first if you already have an account to add to cart.");
      navigate('/signup');
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
            
            <div className={styles.perProductContainer} key={filteredProduct.id}>
              <div
                onClick={() => handleClickContainer(filteredProduct.id)}>

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