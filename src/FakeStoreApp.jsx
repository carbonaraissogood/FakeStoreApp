import { useEffect, useState } from "react";
import axios from "axios";

function FakeStoreApp() {

  const [allProducts, setAllProducts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inputSearch, setInputSearch] = useState('');

  const url = 'https://fakestoreapi.com/products/';
  
  useEffect(() => {

    async function getData() {
      try {

        const response = await axios.get(url);
        console.log(`API Response: ${response.data}`);

        setAllProducts(response.data);
        setData(response.data);
        setError(null);
      } catch (error) {

        setError({
            status: 400,
            message: `No exact match found.`
        });

        setData([]);
      }
      setLoading(false);
    }

    getData();
  }, []);

  function handleClickContainer(id) {
     const targetProduct = data.find((product) => product.id === id);

     setSelectedProduct(targetProduct);
  };

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
            <p>Rating: <strong>{selectedProduct.rating.rate}</strong></p>
            <p className={styles.description}>Description: {selectedProduct.description}</p>
            <p>Available Stock: <strong>{selectedProduct.rating.count}</strong></p>
            
            <button>Buy</button>
            <button>Add to Cart</button>

          </div>

        </div>
      </div>
    );
  }

  function handleInputSearchChange(event) {
    setInputSearch(event.target.value);
  }

  function handleSearchButton(event) {

    let foundProducts = [];

    event.preventDefault();

    if (!inputSearch || inputSearch.trim() === "") return;

    const formattedInput = inputSearch.trim().toLowerCase();

    foundProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(formattedInput) ||
      product.category.toLowerCase().includes(formattedInput)
    );

    console.log(inputSearch);

    console.log(foundProducts);

    if (foundProducts.length > 0) {
      setData(foundProducts);
      setError(null);
    } else {
      setInputSearch('');
      setError({
        status: 404,
        message: `${inputSearch} is currently not available in our store.`
      });
    }
  }

  function handleHeaderClick() {
    setData(allProducts);
    setInputSearch('');
  }

  return (
    <div>
      <h1 onClick={handleHeaderClick} className={styles.header}>Grand Bazaar</h1>

      <div>
        <form onSubmit={handleSearchButton}>
          <input
            type="text"
            placeholder="Enter a product name, category, or keyword/s"
            value={inputSearch}
            onChange={handleInputSearchChange}/>
            
          <button className={styles.searchButton}>Search</button>
        </form>  

      </div>

      {error && (
        <div className={styles.errorMessage}>
          <h3>{error.message}</h3>
        </div>
      )}

      {loading && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}></div>
        </div>
      )}

      <div className={styles.productContainer}>

        {data.map((product) => (
          <div
            onClick={() => handleClickContainer(product.id)}
            className={styles.perProductContainer}
            key={product.id}>

            <img className={styles.img} src={product.image} alt={product.title} />

            <div className={styles.productDetails}>
              <p className={styles.productTitle}>{product.title}</p>
              <h3><strong>{`$${product.price}`}</strong></h3>
              <p className={styles.rating}>Rating: {product.rating.rate}</p>
              <p className={styles.category}>Category: <strong>{product.category}</strong></p>
            </div>

            <br />

            <button>Buy</button>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        generateSelectedProductModal(selectedProduct, () => setSelectedProduct(null))
      )}

    </div>
  )
  
}

export default FakeStoreApp;