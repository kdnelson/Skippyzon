import './Header.scss'
// import SearchIcon from "@material-ui/icons/Search"; <-- material-ui has been deprecated.  Use @mui/... instead
import { useTranslation } from 'react-i18next'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useUser, useCart, useProduct } from '../../hooks'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  const { t } = useTranslation()
  const { email } = useUser()
  const { getCartCounter } = useCart()
  const { setProductQuery } = useProduct()

  return (
    <div className="container header-style">
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="d-flex justify-content-start align-items-center">
            <div className="col-auto mb-1">
              <Link className="logo-style" to="/">Skippyzon</Link>
            </div>
            <div className="col">
              <div className="d-flex justify-content-end align-items-center ">
                <input className="col m-2 searchbar-style" type="text" onChange={(e) => setProductQuery(e.target.value)}/>
                <div className="col-auto"><SearchIcon /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 mt-1 mb-1">
          <div className="d-flex mx-3 justify-content-start align-items-center">
            <div className="col-7">
              <Link className="link-style" to='/login'>
                <div className="row">{t('header.hello')} {!email ? t('header.guest') : email}</div>
                <div className="row fs-6 fw-bold">{email ? t('header.signOut') : t('header.signIn')}</div>
              </Link>
            </div>
            <div className="col-3 mx-2 justify-content-end">
              {email && (
                <Link className="link-style" to='/orders'>
                  <div className="row">{t('header.returns')}</div>
                  <div className="row fs-6 fw-bold">{t('header.andOrders')}</div>
                </Link>)}
            </div>
            <div className="col-2">
              {getCartCounter() > 0 && (
                <Link className="link-style shopping-cart-style" to="/checkout">
                  <div className="row">
                    <div className="col-2"><ShoppingBasketIcon /></div>
                    <div className="col-auto">{getCartCounter()}</div>  
                  </div>
                </Link> )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
