import { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Items.module.css";

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

      {/* <Link 
        to="/addToCart" 
        state={{ cartQuantity: cartQuantity }} replace
      >
        <button className='cartButton'>CART: {cartQuantity}</button>
      </Link> */}

      {!error && !isLoading && searchResults && (
        <div className={styles.productContainer}>

          <div className={styles.header}>
            
            <div className={styles.leftSide}>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  id='search'
                  type="text"
                  placeholder='Search items'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>

            <div className={styles.rightSide}>

              <div className={styles.sortBy}>
                <p>Sort by</p>
                <img src="src\pages\Items\chevron-down.svg" alt="dropdown icon" />
              </div>

              <div className={styles.gridStylesContainer}>
                <button className={styles.gridStyle}><img src="src\pages\Items\bi_grid-3x3-gap-fill.svg" alt="3x3 grid" /></button>
                <button><img src="src\pages\Items\fluent_grid-24-filled.svg" alt="2x2 grid" /></button>
              </div>
              
            </div>
            
          </div>

          <div className={styles.productListing}>
            {searchResults.map((filteredProduct) => (
            
              <div className={styles.perProductContainer} key={filteredProduct.id}>

                <div className={styles.productImgContainer}>
                  <img src={filteredProduct.image} alt={filteredProduct.title} />

                  <div className={styles.tag}>NEW</div>
                                  
                  <button className={styles.wishButton}><img src="src\pages\Items\Shape.svg" alt="heart" /></button>
  
                  <button className={styles.addToCartButton}>Add to cart</button>

                </div>

                <div className={styles.productDetails}>

                  <p className={styles.rating}>Rating: {filteredProduct.rating.rate}</p>

                  <p className={styles.productTitle}>
                    {filteredProduct.title}
                  </p>

                  <p className={styles.price}>
                    {`$${filteredProduct.price}`}
                  </p>

                </div>

                {/* <Link to={`/checkout/${filteredProduct.id}`}>
                  <button>Buy</button>
                </Link>

                <button
                  onClick={() => handleAddToCart(filteredProduct)}>
                    Add to Cart
                </button> */}
                
              </div>

            ))}
          </div>
      
        </div>
      )}

      {!error && !isLoading && selectedProduct && (
        generateSelectedProductModal(selectedProduct, () => setSelectedProduct(null))
      )}

    </main>
  )
}

export default Items