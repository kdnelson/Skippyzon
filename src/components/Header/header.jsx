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
    <div className="header-style">
      <div class="d-flex flex-wrap align-items-start">
        <div class="p-2 mt-1"><Link className="logo-style" to="/">Skippyzon</Link></div>
        <div class="d-flex align-items-center mt-1">
          <input className="mt-2 searchbar-style" type="text" onChange={(e) => setProductQuery(e.target.value)}/>
          <div className="col-auto ps-1 pe-2 mt-2"><SearchIcon /></div>
        </div>
        <div class="signin-orders-style link-style p-2 pe-5">
          <Link className="link-style" to='/login'>
            <div className="row">{t('header.hello')} {!email ? t('header.guest') : email}</div>
            <div className="row fs-6 fw-bold">{email ? t('header.signOut') : t('header.signIn')}</div>
          </Link>
        </div>
        <div class="signin-orders-style p-2 pe-2">            
          {email && (
            <Link className="link-style" to='/orders'>
              <div className="row">{t('header.returns')}</div>
              <div className="row fs-6 fw-bold">{t('header.andOrders')}</div>
            </Link>)}
        </div>
        <div class="mt-3 ms-auto">
          {getCartCounter() > 0 && (
            <Link className="link-style shopping-cart-style" to="/checkout">
              <div className="row">
                <div className="col-4"><ShoppingBasketIcon /></div>
                <div className="col-auto">{getCartCounter()}</div>  
              </div>
            </Link>)}
        </div>
      </div>
    </div>
  )
}

export default Header
