import React from "react"
import "./conversations.scss"
import dialogue from "../../assets/dialogue-img.jpg"

function Conversations() {
  return (
    <div className="container">
      <div className="conversations">
        <div className="conversations__inner">
          <h2 className="conversations__title title">
            Start selling directly inside conversations
          </h2>
          <p className="conversations__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered all injected humour or randomised words
            which don't look even slightly believable.
          </p>
          <button id="blog" className="conversations__btn btn">
            Start Chatting Now
          </button>
        </div>
        <div className="conversations__img">
          <img
            id="footer__works"
            src={dialogue}
            alt="#"
            className="conversations__picture"
          />
        </div>
      </div>
    </div>
  )
}

export default Conversations
