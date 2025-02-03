import { useState } from "react";
import LinkToPage from "../LinkToPage/LinkToPage";
import Button from "../Button/Button";

const burgerIcon = "/icons/List.svg";
const userIcon = "/icons/User.svg";

import "./Header.scss";
import SiteLogo from "../SiteLogo/SiteLogo";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    document.body.classList.remove('lock');
  }

  const handleShowMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    document.body.classList.toggle("lock");
  };

  return (
    <header className="header">
      {/* <div className="header__container"> */}
        <SiteLogo />
        <nav className="header-menu">
          <ul className="header-menu-list">
            <li className="header-menu-list__item">Marketplace</li>
            <li className="header-menu-list__item">Rankings</li>
            <li className="header-menu-list__item">
              <LinkToPage href="/ConnectWallet">Connect a wallet</LinkToPage>
            </li>
          </ul>
          <Button
            className="primary-btn"
            src={userIcon}
            alt="user"
            href="/CreateAccount"
            classNameOfLink="header-menu__sign-up__btn"
          >
            Sign Up
          </Button>

          <div className="header-menu__burger">
            <nav>
              <ul id="menu" className={isMenuVisible ? "active" : ""}>
                <div id="menu-holder">
                  <li className="menu-holder-link_item" onClick={handleClick}>
                    <LinkToPage href="/Home">Home</LinkToPage>
                  </li>
                  <li className="menu-holder-link_item" onClick={handleClick}>
                    Marketplace
                  </li>
                  <li className="menu-holder-link_item" onClick={handleClick}>
                    Rankings
                  </li>
                  <li className="menu-holder-link_item" onClick={handleClick}>
                    <LinkToPage href="/ConnectWallet">
                      Connect a Wallet
                    </LinkToPage>
                  </li>
                </div>
              </ul>
            </nav>
            <img
              className="header-menu__burger-image"
              src={burgerIcon}
              alt="Menu"
              onClick={handleShowMenu}
            />
          </div>
        </nav>
      {/* </div> */}
    </header>
  );
}
