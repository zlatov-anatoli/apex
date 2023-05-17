import React from "react"
import "./contact.scss"
import logo from "../../assets/logo.svg"
import twitter from "../../assets/social-logo/logo-twitter.svg"
import facebook from "../../assets/social-logo/logo-fb.svg"
import instagram from "../../assets/social-logo/logo-instagram.svg"
import github from "../../assets/social-logo/logo-github.svg"

function Contact({ setModalActive }) {
  return (
    <div className="container contact">
      <h2 className="contact__title title">
        Ready to grow your business? Start with Apex, become faster every second
      </h2>
      <button onClick={() => setModalActive(true)} className="contact__btn btn">
        Start Chatting Now
      </button>
      <footer className="footer__top footer">
        <a href="#" className="footer__logo logo">
          <img src={logo} alt="" className="footer__img" />
        </a>

        <ul className="footer__menu menu">
          <li className="menu__item">
            <a className="menu__link" href="#footer__about">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#footer__features">
              Features
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#footer__works">
              Works
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#footer__support">
              Support
            </a>
          </li>
        </ul>

        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer__link"
            >
              <img src={twitter} alt="twitter" className="footer__logo" />
            </a>
          </li>
          <li className="footer__item">
            <a href="https://facebook.com/" className="footer__link">
              <img
                src={facebook}
                alt="facebook"
                target="_blank"
                className="footer__logo"
              />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__link"
            >
              <img src={instagram} alt="instagram" className="footer__logo" />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://github.com/"
              target="_blank"
              className="footer__link"
            >
              <img src={github} alt="github" className="footer__logo" />
            </a>
          </li>
        </ul>
      </footer>
      <footer className="footer__copyrigth copyrigth">
        <a href="" className="copyrigth__link">
          <p className="copyrigth__rigths">
            © Copyright 2022, All Rights Reserved
          </p>
        </a>
        <div className="copyrigth__inner">
          <a href="" className="copyrigth__link">
            <p className="copyrigth__text">Privacy Policy</p>
          </a>
          <a href="" className="copyrigth__link">
            <p className="copyrigth__text">Terms & Conditions</p>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Contact
