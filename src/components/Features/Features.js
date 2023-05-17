import React from "react"
import "./features.scss"
import icon_video from "../../assets/features/icon-video.svg"
import icon_time from "../../assets/features/icon-time.svg"
import icon_private from "../../assets/features/icon-private.svg"

function Features() {
  return (
    <div className="container features">
      <h3 className="features__title">Features for a better experience</h3>
      <ul className="features__list">
        <li className="features__item">
          <div className="features__img">
            <img
              id="demos"
              className="features__picture"
              src={icon_video}
            ></img>
          </div>
          <div className="features__wraper">
            <p className="features__subtitle">Video messaging</p>
            <span className="features__text">
              This software is very easy for you to manage. You can use it as
              you wish.
            </span>
          </div>
        </li>
        <li className="features__item">
          <div className="features__img">
            <img className="features__picture" src={icon_time}></img>
          </div>
          <div className="features__wraper">
            <p className="features__subtitle">Save your time</p>
            <span className="features__text">
              This software is very easy for you to manage. You can use it as
              you wish.
            </span>
          </div>
        </li>
        <li className="features__item">
          <div className="features__img">
            <img className="features__picture" src={icon_private}></img>
          </div>
          <div className="features__wraper">
            <p className="features__subtitle">Keep safe & private</p>
            <span className="features__text">
              This software is very easy for you to manage. You can use it as
              you wish.
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Features
