import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = ({ title }) => {
  return (
    <nav className={styles.navBarContainer}>

      <div className={styles.notificationBarContainer}>

        <div className={styles.textIcon}>

          <div className={styles.icon}>
            <img src="src\pages\NavigationBar\ticket-percent.svg" alt="" />
          </div>
          
          <p>30% off storewide — Limited time! </p>
        </div>

        <div className={styles.shopNow}>
          <a href="">Shop Now</a>

          <img src="src\pages\NavigationBar\arrow-right.svg" alt="" />
        </div>

      </div>

      <div className={styles.navBar}>
        <div className={styles.logo}>
          <Link className={styles.storeName} to="/">{title}</Link>
        </div>

        <div className={styles.linkGroup}>

          <div className={styles.link}>
            <Link className={styles.linkName} to="/">Home</Link>
          </div>

          <div className={styles.link}>
            <Link className={styles.linkName} to="/shop">Shop</Link>
          </div>

          <div className={styles.link}>
            <Link className={styles.linkName} to="/items">Product</Link>
          </div>

          <div className={styles.link}>
            <Link className={styles.linkName} to="/about">Contact Us</Link>
          </div>

        </div>


        <div className={styles.icons}>

          <div className={styles.search}>
            <img src="src\pages\NavigationBar\search 02.svg" alt="" />
          </div>

          <div className={styles.userPFP}>
            <img src="src\pages\NavigationBar\user-circle.svg" alt="" />
          </div>

          <div className={styles.cartButton}>
            <div className={styles.shoppingBag}>
              <img src="src\pages\NavigationBar\shopping bag.svg" alt="" />
            </div>
            <div className={styles.shoppingCartCounter}></div>
          </div>

        </div>


      </div>

    </nav>
  )
}

export default Nav;
