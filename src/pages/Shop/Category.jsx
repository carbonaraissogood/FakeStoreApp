import CategoryItems from "./CategoryItems"
import styles from './Category.module.css';

const Category = ({ categories, setSearch, search }) => {
  return (
    <ul className={styles.categoryList}>
      {(categories || []).map((category) => (
        <li key={category}>
          <CategoryItems
            className={styles.categoryContainer}
            category={category}
            isSelected={search === category.toLowerCase()}
            setSearch={setSearch}
            search={search}
          />
        </li>
      ))}
    </ul>
  )
}

export default Category
