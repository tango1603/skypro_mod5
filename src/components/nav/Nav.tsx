import logo from "../../img/logo.png";
import "./Nav.scss";
import { useState, useEffect } from "react";

interface BurgerProps {
  onClick: any;
}

const BurgerButton = ({ onClick }: BurgerProps) => {
  return (
    <div className="nav__burger burger" onClick={onClick}>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
  );
};

const MenuList = () => {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Главное
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Мой плейлист
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Войти
          </a>
        </li>
      </ul>
    </div>
  );
};

const Nav = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  useEffect(() => {}, [isOpenNav]);

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <BurgerButton onClick={() => setIsOpenNav(!isOpenNav)} />
      {isOpenNav ? <MenuList /> : null}
    </nav>
  );
};

export default Nav;
