import styles from './Home.module.css';

const Home = ({ image, categories, setSearch, search, error, isLoading }) => {
  return (
    <main className={styles.home}>

      {error && <p>{error.message}</p>}

      {isLoading && <p>Loading</p>}

      <div className={styles.imageContainer}>
        <img 
          src={image}
          alt="home-picture"
        />
      </div>
      
    </main>
  )
}

export default Home;