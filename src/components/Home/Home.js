import { useEffect } from 'react'
import './Home.css'
import Product from '../Product/Product.js'
import { useProduct } from '../../hooks/useProduct'

const Home = () => {
  const { products, getAllProducts } = useProduct()

  useEffect(() => {
    if (products.length === 0) {
      getAllProducts()
    }
  }, [products, getAllProducts])

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          {products.map(o => (
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
      </div>
    </div>
  )
}

export default Home
