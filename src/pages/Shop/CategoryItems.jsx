import { Link } from "react-router-dom";
import styles from './CategoryItems.module.css';

const CategoryItems = ({ category, setSearch }) => {

  const handleClick = (event) => {
    event.preventDefault();
    setSearch(category.toLowerCase())
  }

  return (
      <Link to="/items">
        
        <button
          className={styles.category}
          onClick={handleClick}
        >
          {category}
        </button>
      </Link>
  )
}

export default CategoryItems