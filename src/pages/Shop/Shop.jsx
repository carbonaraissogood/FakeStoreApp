import styles from './Shop.module.css';

import Category from './Category';
import Items from '../Items/Items';

const Shop = ({ data, categories, setSearch, search, handleClickContainer, searchResults, cart = { products: [] }, cartQuantity, setCartQuantity, error, isLoading, generateSelectedProductModal, selectedProduct, setSelectedProduct, setCart, hasAccount}) => {

  return (
    <main className={styles.shop}>

      <div className={styles.shopImg}>
        <img src="src\pages\Shop\unsplash_pbjOq__jsgM.svg" alt="Shop Now" />

        <div className={styles.text}>
          <h1>Shop Page</h1>
          <p>Discover deals, discover you</p>
        </div>

      </div>

      <div className={styles.bottomContainer}>

        <div className={styles.filterContainer}>

          <div className={styles.title}>
            <img src="src\pages\Shop\filter 05.svg" alt="filter" />
            <p>Filter</p>
          </div>

          <div className={styles.categories}>
            <p>CATEGORIES</p>

            <Category 
              categories={categories}
              setSearch={setSearch}
              search={search}
            />
          </div>

          <div className={styles.price}>
            <p className={styles.title}>PRICE</p>

            <div className={styles.filterPrice}>
              <p>All Price</p>
              <input type="checkbox" name="priceRange" id="" />
            </div>

            <div className={styles.filterPrice}>
              <p>&#8369;0.00 - 99.99</p>
              <input type="checkbox" name="priceRange" id="" />
            </div>

            <div className={styles.filterPrice}>
              <p>&#8369;100.00 - 199.99</p>
              <input type="checkbox" name="priceRange" id="" />
            </div>

            <div className={styles.filterPrice}>
              <p>&#8369;200.00 - 299.99</p>
              <input type="checkbox" name="priceRange" id="" />
            </div>

            <div className={styles.filterPrice}>
              <p>&#8369;300.00 - 399.99</p>
              <input type="checkbox" name="priceRange" id="" />
            </div>

            <div className={styles.filterPrice}>
              <p>&#8369;400.00&#43;</p>
              <input type="checkbox" name="priceRange" id="" />
            </div>

          </div>

        </div>

        <div className={styles.listing}>
          <Items 
            search={search}
            setSearch={setSearch}
            products={data}
            searchResults={searchResults}
            handleClickContainer={handleClickContainer}
            cart={cart}
            setCart={setCart}
            cartQuantity={cartQuantity}
            setCartQuantity={setCartQuantity}
            error={error}
            isLoading={isLoading}
            generateSelectedProductModal={generateSelectedProductModal}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            hasAccount={hasAccount}
          />
        </div>

      </div>

    </main>
  )
}

export default Shop
