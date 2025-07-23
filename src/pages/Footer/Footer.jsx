import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topContainer}>

        <div className={styles.leftSide}>
          <p className={styles.name}>Grand Bazaar</p>
          <p className={styles.line}>|</p>
          <p className={styles.shopCategory}>Gift & Decoration Store</p>
        </div>

        <div className={styles.rightSide}>
          <p>Home</p>
          <p>Shop</p>
          <p>Product</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

      </div>

      <div className={styles.bottomContainer}>

        <div className={styles.leftSide}>
          <p>Copyright &copy; 2025 Grand Bazaar. All rights reserved</p>
          <p className={styles.privPolicy}>Privacy Policy</p>
          <p className={styles.terms}>Terms of Use</p>
        </div>

        <div className={styles.rightSide}>
          <button><img src="src\pages\Footer\instagram.svg" alt="instagram icon" /></button>
          <button><img src="src\pages\Footer\facebook.svg" alt="fb icon" /></button>
          <button><img src="src\pages\Footer\youtube.svg" alt="yt icon" /></button>
        </div>

      </div>

    </footer>
  )
}

export default Footer