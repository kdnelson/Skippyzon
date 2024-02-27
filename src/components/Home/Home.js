import { useEffect } from 'react'
import './Home.css'
import Product from '../Product/Product.js'
import { useProduct } from '../../hooks'

const Home = () => {
  const { productQuery, products, getAllProducts } = useProduct()
  
  useEffect(() => {
    getAllProducts()
  }, [products, productQuery, getAllProducts])

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {products === null
          ? <div className="home_row">No Products Found</div>
          : <div className="home_row">
             {products
              .filter((o) => o.title.toLowerCase()
              .includes(productQuery.toLowerCase()))
                .map(o => (
                  <Product
                    key={o.id}
                    serialNumber={o.serialNumber}
                    title={o.title}
                    image={o.image}
                    price={o.price}
                    rating={o.rating}
                  />
                ))}
              </div>
        }
      </div>
    </div>
  )
}

export default Home
