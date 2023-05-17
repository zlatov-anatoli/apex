import React from "react"
import "./BurgerMenu.scss"

function BurgerMenu({ showMenu }) {
  return (
    <div className={`${showMenu ? "burger-menu active" : "burger-menu"} `}>
      <ul className="burger-menu__menu menu">
        <li className="menu__item">
          <a className="menu__link" href="">
            Demos
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="">
            Blog
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="">
            Pages
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="">
            Contact
          </a>
        </li>
      </ul>

      <div className="burger-menu__btns">
        <button className="burger-menu__login">Login</button>
        <button className="burger-menu__btn btn">Get Started Free</button>
      </div>
    </div>
  )
}

export default BurgerMenu
