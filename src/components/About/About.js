import React from "react"
import "./about.scss"
import client_1 from "../../assets/client-1.svg"
import client_2 from "../../assets/client-2.svg"

function About() {
  return (
    <div className="about">
      <div className="container">
        <h2 className="about__title title">
          Our blessed client said about us 😍
        </h2>
        <div className="about__wrapper">
          <div className="about__content">
            <div className="about__inner">
              <p className="about__desc">“Incredible Experience”</p>
              <span className="about__text">
                We had an incredible experience working with Mixland and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the concept so quickly.
              </span>
              <div className="about__triangle"></div>
            </div>
            <div className="about__ceo ceo">
              <div className="ceo__img">
                <img src={client_1} alt="" className="ceo__picture" />
              </div>
              <div className="ceo__content">
                <p className="ceo__name">Wade Warren</p>
                <p className="ceo__text">CEO, ABC Corporation</p>
              </div>
            </div>
          </div>
          <div id="contact" className="about__content">
            <div className="about__inner">
              <p className="about__desc">“Dependable, Responsiv”</p>
              <span className="about__text">
                Fermin Apps has collaborated with Mixland team for several
                projects such as Photo Sharing Apps and Custom Social Networking
                Apps. The experience has been pleasant, professional and
                exceeding our expectations. The team is always thinking beyond.
              </span>
              <div className="about__triangle"></div>
            </div>
            <div className="about__ceo ceo">
              <div className="ceo__img">
                <img src={client_2} alt="" className="ceo__picture" />
              </div>
              <div className="ceo__content">
                <p className="ceo__name">Esther Howard</p>
                <p className="ceo__text">CEO, ABC Corporation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
