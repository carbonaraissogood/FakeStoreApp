import Header from './pages/Header/Header';
import SignUp from './pages/Sign up/SignUp';
import LogIn from './pages/Login/LogIn';
import Home from './pages/Home/Home';
import Cart from './pages/Checkout/Cart';
import Checkout from './pages/Checkout/Checkout';
import About from './pages/About/About';
import Missing from './pages/Missing/Missing';
import Footer from './pages/Footer/Footer';
import LandingPage from './pages/Landing Page/LandingPage';
import Items from './pages/Items/Items';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Shop from './pages/Shop/Shop';
import CartPage from './pages/Checkout/CartPage';

import styles from './FakeStoreApp.module.css';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const baseURL = 'https://fakestoreapi.com/';
  const url = 'https://fakestoreapi.com/products/'

  const [reqType, setReqType] = useState('');
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});
  const [cartId, setCartId] = useState('1');
  const [cartQuantity, setCartQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [users, setUsers] = useState([]);

  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/users');
        const users = response.data;

        setUsers(users);
      } catch(err) {
        console.log("ERROR");
        setError(err);
        setUsers([]);
      }
    }

    getUsers()

  }, [])

  useEffect(() => {

    const getData = async () => {
      try {
        const response = await axios.get(`${url}${reqType}`);

        setData(response.data);
        setSearchResults(response.data);
        setError(null);

      } catch (error) {

        setError({
          status: 400,
          message: `No exact match found.`
        });

        setData([]);
      }
      setIsLoading(false);
    }

    getData();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`${url}categories`);

        setCategories(response.data);
        setError(null);
      } catch (err) {
        
        setError({
          status: 400,
          message: `No categories found.`
        });

        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    }

    getCategories();
  }, [])

  useEffect(() => {
    const filteredResults = data.filter((product) => {
      // If search matches exactly with a category, only show that category
      if (categories.includes(search.toLowerCase())) {
        return product.category.toLowerCase() === search.toLowerCase();
      }
      // Otherwise do a general search
      return (
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      )
    });

    setSearchResults(filteredResults);
  }, [search])

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await axios.get(`${baseURL}carts/${cartId}`);

        setCart(response.data);
        setError(null);

      } catch (err) {
        
        setError({
          status: 400,
          message: `No cart found.`
        });

        setCart({});
      } finally {
        setIsLoading(false);
      }
    }

    getCart();
  }, [cartId])

  const handleClickContainer = (selectedProductID) => {
    const targetProduct = data.find((product) => product.id === selectedProductID);

    setSelectedProduct(targetProduct);
  }

  function generateSelectedProductModal(selectedProduct, onClose) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalBox}>

          <button className={styles.closeButton} onClick={onClose}>&times;</button>

          <div className={styles.targetProductContainer}>

            <img className={styles.modalImg} src={selectedProduct.image} alt={selectedProduct.title} />

            <p className={styles.selectedProductTitle}>{selectedProduct.title}</p>
            
            <p>Price: <strong>{`$${selectedProduct.price}`}</strong></p>
            <p>Category: <strong>{selectedProduct.category}</strong></p>
            <p>Rating: <strong>{selectedProduct.rating?.rate || 'N/A'}</strong></p>

            <p className={styles.description}>Description: {selectedProduct.description}</p>
            <p>Available Stock: <strong>{selectedProduct.rating?.count || 'n/a'}</strong></p>
            
            <button>Buy</button>
            <button>Add to Cart</button>

          </div>

        </div>
      </div>
    );
  }
  
  return (
    <BrowserRouter>
      <Header title='Grand Bazaar'></Header>
      {/* <Nav></Nav> */}

      <Routes>

        <Route 
          index element={
          <Home 
            image='src\assets\morning walk.jpg'
            error={error}
            isLoading={isLoading}
          />}
        />

        <Route exact path="/" element={<LandingPage />} />

        <Route exact path="/signup" element={
          <SignUp
            users={users}
            setUsers={setUsers}
          />} 
        />
        <Route exact path="/login" element={
          <LogIn
            users={users}
            setHasAccount={setHasAccount}
          />}
        />

        <Route exact path="/shop" element={
          <Shop 
            search={search}
            setSearch={setSearch}
            categories={categories}
          />}
        />

        <Route exact path="/items" element={
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
          />}
        />

        <Route exact path="/addToCart" element={<Cart
          cart={cart}
          data={data}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
          setCart={setCart}
          error={error}
          isLoading={isLoading}
          cartId={cartId}
        />} />
        
        <Route
          exact path="/checkout/:productID"
        
          element={<Checkout
            data={data}
          />}
        />

        <Route path="/cart" element={
          <CartPage
            cart={cart}
            setCart={setCart}
            cartQuantity={cartQuantity}
            setCartQuantity={setCartQuantity}
            data={data}
            error={error}
            isLoading={isLoading}
            cartId={cartId}
          />
        } />

        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Missing />} />

      </Routes>
      
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App
