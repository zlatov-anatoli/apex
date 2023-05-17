import React from "react"
import "./header.scss"
import logo from "../../assets/logo.svg"
import BurgerMenu from "../burgerMenu/BurgerMenu"
import Modal from "../Modal/Modal"
function Header({ setModalActive }) {
  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <div className="container">
      <header id="footer__about" className="header">
        <a href="#" className="header__logo logo">
          <img src={logo} alt="" className="logo__img" />
        </a>

        <ul className="header__menu menu">
          <li className="menu__item">
            <a className="menu__link" href="#demos">
              Demos
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#about">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#blog">
              Blog
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#pages">
              Pages
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="header__btns">
          <button className="header__login">Login</button>
          <button
            onClick={() => setModalActive(true)}
            className="header__btn btn"
          >
            Get Started Free
          </button>
        </div>
        <div
          className={`${
            showMenu
              ? "nav__toggle burger animate-burger"
              : "nav__toggle burger"
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="burger__wrapper">
            <span></span>
          </div>
        </div>
      </header>
      <BurgerMenu showMenu={showMenu} />
    </div>
  )
}

export default Header
