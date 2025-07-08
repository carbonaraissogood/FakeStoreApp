import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = ({ title }) => {
  return (
    <nav>
      <ul className={styles.navBar}>

        <li
          className={styles.storeName}
        >
          <Link to="/"><strong>{title}</strong></Link>
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Categories */}
        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/items">Product</Link>
        </li>


        {/* <li>
          <Link to="/signup">Sign Up</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li> */}

        <li>
          <Link to="/about">Contact Us</Link>
        </li>

        <li>
          Search
        </li>

        <li>
          Profile
        </li>

        <li>
          Basket
        </li>

      </ul>
    </nav>
  )
}

export default Nav;
