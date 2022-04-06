import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderBottomBorder from "./images/border-header.png";
import BorderSettingItem from "./images/border-setting-item.png";
import Logo from "./images/logo.png";
import LogoUser from "./images/logo-user.png";

import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        <img src={Logo} alt="galaxy-survivor" className="header-logo__img" />
      </a>
      <div className="header-right">
        <ul className="navbar">
          <li className="navbar-item">
            <NavLink to="/sale-pack" className="navbar-item__link">
              SALE PACK
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/marketplace" className="navbar-item__link">
              MARKETPLACE
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/inventory" className="navbar-item__link">
              INVENTORY
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/recyle" className="navbar-item__link">
              RECYCLE
            </NavLink>
          </li>
        </ul>
        <div className="account">
          <div className="account-info">
            <img src={LogoUser} alt="" className="account-info__img" />
            <p className="account-info__name">0D9B488...805</p>
            <ul className="account-info-setting">
              <li className="account-info-setting-item">
                <Link className="account-info-setting-item__link" to="/logout">
                  Logout
                  <img src={BorderSettingItem} alt="" />
                </Link>
              </li>
              <li className="account-info-setting-item">
                <Link className="account-info-setting-item__link" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src={HeaderBottomBorder} alt="" className="header-border-image" />
    </header>
  );
};

export default Header;
