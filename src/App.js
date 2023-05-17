import "./App.css"
import React from "react"
import About from "./components/About/About"
import Contact from "./components/Contacts/Contact"
import Conversations from "./components/Conversations/Conversations.js"
import Customers from "./components/Customers/Customers"
import Features from "./components/Features/Features"
import Main from "./components/Main/Main"
import Modal from "./components/Modal/Modal"
import Orders from "./components/Orders/Orders"
import Header from "./components/header/Header"

function App() {
  const [modalActive, setModalActive] = React.useState(false)
  console.log(modalActive)

  return (
    <>
      <Header setModalActive={setModalActive} />
      <Main setModalActive={setModalActive} />
      <Features />
      <Customers />
      <Conversations />
      <Orders />
      <About />
      <Contact setModalActive={setModalActive} />
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default App
