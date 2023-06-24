import logo from "../../img/logo.png";
import "./Nav.scss";

interface BurgerProps {
  isOpen?: void;
}

export const BurgerButton = ({ isOpen }: BurgerProps) => {
  return (
    <div className="nav__burger burger">
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
  );
};

export const MenuList = () => {
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
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <BurgerButton />
      <MenuList />
    </nav>
  );
};

export default Nav;
