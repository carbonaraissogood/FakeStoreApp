import Category from './Category';

const Home = ({ image, categories, setSearch, search, error, isLoading }) => {
  return (
    <main className='home'>

      {error && <p>{error.message}</p>}

      {isLoading && <p>Loading</p>}

      <img src={image} alt="home-picture" />

      <Category 
        categories={categories}
        setSearch={setSearch}
        search={search}
      />
    </main>
  )
}

export default Home
