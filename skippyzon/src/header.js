import React from "react";
import "./header.css";
// import SearchIcon from "@material-ui/icons/Search"; <-- material-ui has been deprecated.  Use @mui/... instead
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </div>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <span className="header__optionLineTwo">
            2
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;