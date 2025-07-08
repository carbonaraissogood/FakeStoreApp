import Category from './Category'

const Shop = ({ categories, setSearch, search }) => {
  return (
    <main>
      <Category></Category>
      <Category 
        categories={categories}
        setSearch={setSearch}
        search={search}
      />
    </main>
  )
}

export default Shop
