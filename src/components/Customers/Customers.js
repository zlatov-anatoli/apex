import React from "react"
import "./customers.scss"
import live_chat from "../../assets/chat-img.jpg"

function Customers() {
  return (
    <div className="customer">
      <div className="container customer__wraper">
        <div className="customer__img">
          <img src={live_chat} alt="#" className="customer__picture" />
        </div>
        <div className="customer__inner">
          <h2 className="customer__title title">
            Meet your customers, with live video chat
          </h2>
          <p className="customer__text">
            Proin faucibus nibh et sagittis a. Lacinia purus ac amet
            pellentesque aliquam enim.
          </p>
          <p id="about" className="customer__subtext">
            Get paychecks up to two days early. Get a $20 bonus when you receive
            qualifying direct deposits
          </p>
        </div>
      </div>
    </div>
  )
}

export default Customers
