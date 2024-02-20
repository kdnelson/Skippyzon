import './Header.css'
// import SearchIcon from "@material-ui/icons/Search"; <-- material-ui has been deprecated.  Use @mui/... instead
import { useTranslation } from 'react-i18next'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useUser, useCart } from '../../hooks'

const Header = () => {
  const { t } = useTranslation()
  const { user } = useUser()
  const { getCartCounter } = useCart()

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to='/login'>
          <div className="header_option_user">
            <span className="header_optionLineOne">{t('header.hello')} {!user ? t('header.guest') : user?.email}</span>
            <span className="header_optionLineTwo">{user ? t('header.signOut') : t('header.signIn')}</span>
          </div>
        </Link>

        {user && (
          <Link to='/orders'>
            <div className="header_option_orders">
              <span className="header_optionLineOne">{t('header.returns')}</span>
              <span className="header_optionLineTwo">{t('header.andOrders')}</span>
            </div>
          </Link>
        )}

        <Link to="/checkout">
          <div className="header_optionCart">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_cartCount">{getCartCounter()}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
