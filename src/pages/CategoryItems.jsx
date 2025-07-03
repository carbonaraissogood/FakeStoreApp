import { Link } from "react-router-dom"

const CategoryItems = ({ category, setSearch, search }) => {
  return (
      <Link className="category" to="/items">
        <button
        className="category"
          onClick={() => setSearch(category.toLowerCase())}
          style={{ backgroundColor: search === category.toLowerCase() ? '#e0e0e0' : 'white' }}
        >{category}</button>
      </Link>
  )
}

export default CategoryItems
