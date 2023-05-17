import React from "react"
import "./orders.scss"
import orders_img from "../../assets/orders-img.jpg"

function Orders() {
  return (
    <div className="orders">
      <div className="container">
        <div className="orders__wrapper">
          <div className="orders__img">
            <img src={orders_img} alt="" className="orders__picture" />
          </div>
          <div className="orders__inner">
            <h2 className="orders__title title">
              Get direct orders from your customers
            </h2>
            <p className="orders__text">
              Create custom landing pages with Rareblocks that converts more
              visitors than any website. With lots of unique blocks easily build
              a page. There are many variations of passages of available.
            </p>
            <div className="orders__rank rank">
              <div className="rank__inner">
                <p className="rank__number">4.3K+</p>
                <div className="rank__column">
                  <span className="rank__text">Website’s</span>
                  <span id="pages" className="rank__text">
                    Powering
                  </span>
                </div>
              </div>
              <div className="rank__inner">
                <p className="rank__number">7M+</p>
                <div className="rank__column">
                  <span className="rank__text">Chats in</span>
                  <span className="rank__text">Last 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
