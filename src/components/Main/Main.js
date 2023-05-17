import React from "react"
import "./main.scss"
import reviews from "../../assets/reviews.png"
import arrow from "../../assets/arrow-right.svg"
import avatar1 from "../../assets/avatar/avatar-1.svg"
import avatar2 from "../../assets/avatar/avatar-2.svg"
import avatar3 from "../../assets/avatar/avatar-3.svg"

function Main({ setModalActive }) {
  return (
    <div className="container main">
      <div className="main__body">
        <h1 className="main__title">
          Start chatting with customers, anytime, anywhere with Apex
        </h1>
        <p className="main__text">
          Great software that allows you to chat from any place at any time
          without any interruption.
        </p>
        <button
          onClick={() => setModalActive(true)}
          id="footer__features"
          className="main__btn btn"
        >
          Start Chatting Now
          <div className="btn__arow">
            <img src={arrow} alt="" className="btn__img" />
          </div>
        </button>
        <div className="main__rating rating">
          <div className="rating__rewies">
            <ul className="rating__list">
              <li className="rating__item">
                <img src={avatar1} alt="" className="rating__avatar" />
              </li>
              <li className="rating__item">
                <img src={avatar2} alt="" className="rating__avatar" />
              </li>
              <li className="rating__item">
                <img src={avatar3} alt="" className="rating__avatar" />
              </li>
            </ul>
            <div className="rating__aside">
              <div className="rating__text">2,291</div>
              <div className="rating__excerpt">Happy Customers</div>
            </div>
          </div>
          <span className="rating__line"></span>
          <div className="rating__grades">
            <div className="rating__text">4.8/5</div>
            <div className="rating__wrapper">
              <ul className="rating__items">
                <li className="rating__element">
                  <svg
                    className="rating__star"
                    fill="rgba(91, 116, 134, 0.3)"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.3816 4.23335L8.62829 3.8926L7.14495 0.419814C7.03544 0.164672 6.78625 0 6.50888 0C6.23152 0 5.98223 0.164672 5.87341 0.419814L4.39007 3.8926L0.636152 4.23335C0.360972 4.25875 0.127951 4.44515 0.0418459 4.70793C-0.0437636 4.9712 0.0352987 5.25997 0.24342 5.4425L3.08064 7.93034L2.24408 11.6148C2.18288 11.8857 2.28803 12.1659 2.51282 12.3284C2.63364 12.4162 2.7756 12.46 2.91805 12.46C3.04046 12.46 3.16297 12.4275 3.27239 12.362L6.50888 10.4268L9.74478 12.362C9.98217 12.5038 10.2807 12.4909 10.505 12.3284C10.7297 12.1659 10.8349 11.8857 10.7737 11.6148L9.93713 7.93034L12.7743 5.4425C12.9824 5.25997 13.0615 4.9718 12.9759 4.70793C12.8903 4.44465 12.6568 4.25825 12.3816 4.23335Z" />
                  </svg>
                </li>
                <li className="rating__element">
                  <svg
                    className="rating__star"
                    fill="rgba(91, 116, 134, 0.3)"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.3816 4.23335L8.62829 3.8926L7.14495 0.419814C7.03544 0.164672 6.78625 0 6.50888 0C6.23152 0 5.98223 0.164672 5.87341 0.419814L4.39007 3.8926L0.636152 4.23335C0.360972 4.25875 0.127951 4.44515 0.0418459 4.70793C-0.0437636 4.9712 0.0352987 5.25997 0.24342 5.4425L3.08064 7.93034L2.24408 11.6148C2.18288 11.8857 2.28803 12.1659 2.51282 12.3284C2.63364 12.4162 2.7756 12.46 2.91805 12.46C3.04046 12.46 3.16297 12.4275 3.27239 12.362L6.50888 10.4268L9.74478 12.362C9.98217 12.5038 10.2807 12.4909 10.505 12.3284C10.7297 12.1659 10.8349 11.8857 10.7737 11.6148L9.93713 7.93034L12.7743 5.4425C12.9824 5.25997 13.0615 4.9718 12.9759 4.70793C12.8903 4.44465 12.6568 4.25825 12.3816 4.23335Z" />
                  </svg>
                </li>
                <li className="rating__element">
                  <svg
                    className="rating__star"
                    fill="rgba(91, 116, 134, 0.3)"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.3816 4.23335L8.62829 3.8926L7.14495 0.419814C7.03544 0.164672 6.78625 0 6.50888 0C6.23152 0 5.98223 0.164672 5.87341 0.419814L4.39007 3.8926L0.636152 4.23335C0.360972 4.25875 0.127951 4.44515 0.0418459 4.70793C-0.0437636 4.9712 0.0352987 5.25997 0.24342 5.4425L3.08064 7.93034L2.24408 11.6148C2.18288 11.8857 2.28803 12.1659 2.51282 12.3284C2.63364 12.4162 2.7756 12.46 2.91805 12.46C3.04046 12.46 3.16297 12.4275 3.27239 12.362L6.50888 10.4268L9.74478 12.362C9.98217 12.5038 10.2807 12.4909 10.505 12.3284C10.7297 12.1659 10.8349 11.8857 10.7737 11.6148L9.93713 7.93034L12.7743 5.4425C12.9824 5.25997 13.0615 4.9718 12.9759 4.70793C12.8903 4.44465 12.6568 4.25825 12.3816 4.23335Z" />
                  </svg>
                </li>
                <li className="rating__element">
                  <svg
                    className="rating__star"
                    fill="rgba(91, 116, 134, 0.3)"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.3816 4.23335L8.62829 3.8926L7.14495 0.419814C7.03544 0.164672 6.78625 0 6.50888 0C6.23152 0 5.98223 0.164672 5.87341 0.419814L4.39007 3.8926L0.636152 4.23335C0.360972 4.25875 0.127951 4.44515 0.0418459 4.70793C-0.0437636 4.9712 0.0352987 5.25997 0.24342 5.4425L3.08064 7.93034L2.24408 11.6148C2.18288 11.8857 2.28803 12.1659 2.51282 12.3284C2.63364 12.4162 2.7756 12.46 2.91805 12.46C3.04046 12.46 3.16297 12.4275 3.27239 12.362L6.50888 10.4268L9.74478 12.362C9.98217 12.5038 10.2807 12.4909 10.505 12.3284C10.7297 12.1659 10.8349 11.8857 10.7737 11.6148L9.93713 7.93034L12.7743 5.4425C12.9824 5.25997 13.0615 4.9718 12.9759 4.70793C12.8903 4.44465 12.6568 4.25825 12.3816 4.23335Z" />
                  </svg>
                </li>
                <li className="rating__element">
                  <svg
                    className="rating__star"
                    fill="rgba(91, 116, 134, 0.3)"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.3816 4.23335L8.62829 3.8926L7.14495 0.419814C7.03544 0.164672 6.78625 0 6.50888 0C6.23152 0 5.98223 0.164672 5.87341 0.419814L4.39007 3.8926L0.636152 4.23335C0.360972 4.25875 0.127951 4.44515 0.0418459 4.70793C-0.0437636 4.9712 0.0352987 5.25997 0.24342 5.4425L3.08064 7.93034L2.24408 11.6148C2.18288 11.8857 2.28803 12.1659 2.51282 12.3284C2.63364 12.4162 2.7756 12.46 2.91805 12.46C3.04046 12.46 3.16297 12.4275 3.27239 12.362L6.50888 10.4268L9.74478 12.362C9.98217 12.5038 10.2807 12.4909 10.505 12.3284C10.7297 12.1659 10.8349 11.8857 10.7737 11.6148L9.93713 7.93034L12.7743 5.4425C12.9824 5.25997 13.0615 4.9718 12.9759 4.70793C12.8903 4.44465 12.6568 4.25825 12.3816 4.23335Z" />
                  </svg>
                </li>
              </ul>
              <div className="rating__excerpt">Rating</div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__img">
        <img src={reviews} alt="" className="main__photo" />
      </div>
    </div>
  )
}

export default Main
