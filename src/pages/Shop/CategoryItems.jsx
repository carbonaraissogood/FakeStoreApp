import { Link } from "react-router-dom"
import styles from './Category.module.css';

const CategoryItems = ({ category, setSearch, search }) => {
  return (
      <Link to="/items">
        
        <button
          className={styles.category}
          onClick={() => setSearch(category.toLowerCase())}
          style={{ backgroundColor: search === category.toLowerCase() ? '#e0e0e0' : 'white' }}
        >
          <img 
            src="https://as2.ftcdn.net/v2/jpg/03/64/41/07/1000_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg"
            alt=""
          />

          {category}
          
        </button>
      </Link>
  )
}

export default CategoryItems