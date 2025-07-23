import styles from './Home.module.css';

const Home = ({ error, isLoading }) => {
  return (
    <main className={styles.home}>

      {error && <p>{error.message}</p>}

      {isLoading && <p>Loading</p>}

      <div>

        <div className={styles.imageContainer}>
          <img 
            src="src\pages\Home\Paste image.svg"
            alt="home-picture"
          />
        </div>


        <div className={styles.bannerTitle}>

          <div className={styles.title}>
            <div>
              Simply Unique/
            </div>

            <div>
              Simply Better.
            </div>
          </div>

          <div className={styles.subtitle}>
            <span style={{color: 'black', fontWeight: 600}}>3legant</span> <span style={{color: 'gray'}}>is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</span>
          </div>

        </div>

        <div className={styles.categories}>
          <div className={styles.firstCategory}>
            <img className={styles.img} src="src\pages\Home\Cat1.svg" alt="Cat1" />

            <div className={styles.titleContainer}>
              <div className={styles.name}>Living Room</div>

              <div  className={styles.link}>
                <a href="">
                  <div className={styles.title}>Shop Now</div>
                  <img src="src\pages\Home\arrow-right.svg" alt="arrow-right" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.otherCategories}>
            <div className={styles.secondCategory}>
              <img className={styles.categoryPhoto} src="src\pages\Home\2ndCat.svg" alt="2ndCat" />

              <div className={styles.titleContainer}>
                <div className={styles.name}>Bedroom</div>

                <div  className={styles.link}>
                  <a href="">
                    <div className={styles.title}>Shop Now</div>
                    <img src="src\pages\Home\arrow-right.svg" alt="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.thirdCategory}>
              <img className={styles.categoryPhoto} src="src\pages\Home\3rdCat.svg" alt="3rdCat" />

              <div className={styles.titleContainer}>
                <div className={styles.name}>Kitchen</div>

                <div  className={styles.link}>
                  <a href="">
                    <div className={styles.title}>Shop Now</div>
                    <img src="src\pages\Home\arrow-right.svg" alt="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.justIn}>

          <div className={styles.header}>
            <div className={styles.title}>Just In</div>

            <div className={styles.navigationDots}>
              <div className={styles.container}>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.container}>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.container}>
                <div className={styles.dot}></div>
              </div>
            </div>

          </div>

          <div className={styles.items}>

            <div className={styles.item1}>
              <div className={styles.productImageContainer}>
                <img src="src\pages\Home\item.svg" alt="product-name" />

                <div className={styles.tag}>NEW</div>
                
                <button className={styles.wishButton}><img src="src\pages\Home\Shape.svg" alt="heart" /></button>

                <button className={styles.addToCartButton}>Add to cart</button>

              </div>

              <div className={styles.productDetails}>

                <div className={styles.rating}>
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                </div>

                <p className={styles.name}>96 Nuptse Dip Dye Korea Puffers Jacket</p>

                <p className={styles.price}>$400.00</p>
              </div>
            </div>

            <div className={styles.item1}>
              <div className={styles.productImageContainer}>
                <img src="src\pages\Home\item.svg" alt="product-name" />

                <div className={styles.tag}>NEW</div>
                
                <button className={styles.wishButton}><img src="src\pages\Home\Shape.svg" alt="heart" /></button>

                <button className={styles.addToCartButton}>Add to cart</button>

              </div>

              <div className={styles.productDetails}>

                <div className={styles.rating}>
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                </div>

                <p className={styles.name}>96 Nuptse Dip Dye Korea Puffers Jacket</p>

                <p className={styles.price}>$400.00</p>
              </div>
            </div>

            <div className={styles.item1}>
              <div className={styles.productImageContainer}>
                <img src="src\pages\Home\item.svg" alt="product-name" />

                <div className={styles.tag}>NEW</div>
                
                <button className={styles.wishButton}><img src="src\pages\Home\Shape.svg" alt="heart" /></button>

                <button className={styles.addToCartButton}>Add to cart</button>

              </div>

              <div className={styles.productDetails}>

                <div className={styles.rating}>
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                </div>

                <p className={styles.name}>96 Nuptse Dip Dye Korea Puffers Jacket</p>

                <p className={styles.price}>$400.00</p>
              </div>
            </div>

            <div className={styles.item1}>
              <div className={styles.productImageContainer}>
                <img src="src\pages\Home\item.svg" alt="product-name" />

                <div className={styles.tag}>NEW</div>
                
                <button className={styles.wishButton}><img src="src\pages\Home\Shape.svg" alt="heart" /></button>

                <button className={styles.addToCartButton}>Add to cart</button>

              </div>

              <div className={styles.productDetails}>

                <div className={styles.rating}>
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                  <img src="src\pages\Home\Star Icon.svg" alt="star" />
                </div>

                <p className={styles.name}>96 Nuptse Dip Dye Korea Puffers Jacket</p>

                <p className={styles.price}>$400.00</p>
              </div>
            </div>

          </div>

        </div>

        <div className={styles.valuesContainer}>

          <div className={styles.freeShipping}>

            <div className={styles.img}>
              <img src="src\pages\Home\fast delivery.svg" alt="shipping" />
            </div>
            
            <p className={styles.title}>Free Shipping</p>
            <p className={styles.subtitle}>Order above $200</p>
          </div>

          <div className={styles.moneyBack}>

            <div className={styles.img}>
              <img src="src\pages\Home\money.svg" alt="shipping" />
            </div>
            
            <p className={styles.title}>Money-back</p>
            <p className={styles.subtitle}>30 days guarantee</p>
          </div>

          <div className={styles.securePayments}>

            <div className={styles.img}>
              <img src="src\pages\Home\Vector.svg" alt="shipping" />
            </div>
            
            <p className={styles.title}>Secure Payments</p>
            <p className={styles.subtitle}>Secured by Stripe</p>
          </div>

          <div className={styles.support}>

            <div className={styles.img}>
              <img src="src\pages\Home\fast delivery.svg" alt="shipping" />
            </div>
            
            <p className={styles.title}>24/7 Support</p>
            <p className={styles.subtitle}>Phone and Email support</p>
          </div>

        </div>

        <div className={styles.banner}>

          <div className={styles.bannerImgContainer}>
            <img src="src\pages\Home\Image Placeholder.svg" alt="" />
          </div>

          <div className={styles.details}>
            <div className={styles.text}>
              <p className={styles.saleText}>SALE UP TO 35% OFF</p>
              <div className={styles.main}>
                <p>HUNDREDS of</p>
                <p>New lower prices!</p>
              </div>
              <p className={styles.body}>It’s more affordable than ever to give every room in your home a stylish makeover</p>
            </div>

            <div  className={styles.link}>
              <a href="">
                <div className={styles.title}>Shop Now</div>
                <img src="src\pages\Home\arrow-right.svg" alt="arrow-right" />
              </a>
            </div>

          </div>
        </div>

        <div className={styles.newsletter}>
          <img className={styles.newsImg} src="src\pages\Home\Image Placeholder (1).svg" alt="newsletter" />
          
          <div className={styles.details}>
            <div className={styles.header}>
              <p className={styles.main}>Join Our Newsletter</p>
              <p className={styles}>Sign up for deals, new products and promotions</p>
            </div>

            <div className={styles.emailContainer}>
              <div className={styles.email}>
                <img src="src\pages\Home\email.svg" alt="email icon" />
              </div>
              
              <input
                type="email"
                placeholder='Email address'
              />

              <button>Signup</button>
            </div>

          </div>
        </div>


      </div>

      
      
    </main>
  )
}

export default Home;