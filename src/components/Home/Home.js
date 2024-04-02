import { useEffect } from 'react'
import './Home.css'
import Product from '../Product/Product.js'
import { useProduct } from '../../hooks'

const Home = () => {
  const { productQuery, products, getProducts } = useProduct()

  useEffect(() => {
    getProducts()
  }, [products, productQuery, getProducts])

  return (
    <div className="container">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {products.filter((o) => o.title.toLowerCase().includes(productQuery.toLowerCase())) === 0
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
  )
}

export default Home
