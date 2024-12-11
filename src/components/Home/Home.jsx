import { useEffect } from 'react'
import './Home.scss'
import Product from '../Product/product.jsx'
import { useProduct } from '../../hooks/index.jsx'

const Home = () => {
  const { productQuery, products, getProducts } = useProduct()

  useEffect(() => {
    getProducts()
  }, [products, productQuery, getProducts])

  return (
    <div className="container">
      <div className="row mt-3 mb-5 justify-content-center">
        <div className="row gy-0 gx-0">
          {products ? (
            products
              .filter((o) => o.title.toLowerCase()
              .includes(productQuery.toLowerCase()))
              .map(o => (
                <Product
                  key={o.id+o.serialNumber}
                  serialNumber={o.serialNumber}
                  title={o.title}
                  image={o.image}
                  price={o.price}
                />
              )))
            : null}
        </div>
      </div>
    </div>
  )
}

export default Home
