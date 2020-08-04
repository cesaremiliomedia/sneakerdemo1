import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../assets/scss/main.scss"

export default ({ children }) => (
  <div>
    <div
      className="w-100  rounded"
      style={{ background: "white", color: "black " }}
    >
      {children}
    </div>
    <div style={{ zIndex: "-1" }} id="bg"></div>
  </div>
)
