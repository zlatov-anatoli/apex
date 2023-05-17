import React from "react"
import "./modal.scss"
function Modal({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">Отправить сообщение</h2>
        <form className="modal__form form">
          <div className="form__container">
            <div className="form__group">
              <label className="form__label">Имя</label>
              <input type="text" className="form__input" />
            </div>
            <div className="form__group">
              <label className="form__label">Фамилия</label>
              <input type="text" className="form__input" />
            </div>
          </div>
          <label className="form__label ">Email</label>
          <input
            type="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            className="form__input form__input--email"
            required
          />
          <div className="form__group">
            <label className="form__label">Комментарий</label>
            <textarea rows="5" className="form__input form__input--textarea" />
          </div>
          <button
            onClick={() => setActive(false)}
            type="sumbit"
            className="form__btn"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal
