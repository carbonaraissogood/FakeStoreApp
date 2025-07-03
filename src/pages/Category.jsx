import CategoryItems from "./CategoryItems"

const Category = ({ categories, setSearch, search }) => {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0 }}>
      {categories.map((category) => (
        <li key={category}>
          <CategoryItems
            className='categoryContainer'
            category={category}
            isSelected={search === category.toLowerCase()}
            setSearch={setSearch}
            search={search}
          ></CategoryItems>
        </li>
      ))}
    </ul>
  )
}

export default Category
