import './Header.css'
// import SearchIcon from "@material-ui/icons/Search"; <-- material-ui has been deprecated.  Use @mui/... instead
import { useTranslation } from 'react-i18next'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useUser, useCart, useProduct } from '../../hooks'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  const { t } = useTranslation()
  const { user } = useUser()
  const { getCartCounter } = useCart()
  const { setProductQuery } = useProduct()

  return (
    <div className="container header-style">
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="d-flex justify-content-start align-items-center">
            <div className="col-auto">
              <Link className="logo-style" to="/">Skippyzon</Link>
            </div>
            <div className="col">
              <div className="d-flex justify-content-end align-items-center ">
                <input className="col m-2 searchbar-styling" type="text" onChange={(e) => setProductQuery(e.target.value)}/>
                <div className="col-auto"><SearchIcon /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 mt-1 mb-1 header-link-styling">
          <div className="d-flex mx-2 justify-content-start align-items-center">
            <div className="col-7">
              <Link className="link-style" to='/login'>
                <div className="row">{t('header.hello')} {!user ? t('header.guest') : user?.email}</div>
                <div className="row">{user ? t('header.signOut') : t('header.signIn')}</div>
              </Link>
            </div>
            <div className="col-3 mx-2 justify-content-end">
              {user && (
                <Link className="link-style" to='/orders'>
                  <div className="row">{t('header.returns')}</div>
                  <div className="row">{t('header.andOrders')}</div>
                </Link>)}
            </div>
            <div className="col-2">
              <Link className="link-style" to="/checkout">
                <ShoppingBasketIcon />
                {getCartCounter()}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
