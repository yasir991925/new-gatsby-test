import React from "react"
import "./navbar.sass"
import Logo from "./static/Logo.svg"
import HamBurger from "./static/HamBurger.svg"
import SuperScript from "../common_components/SuperScriptText"

function Nav() {
  return (
    <div className="navigation">
      <div className="navigation__group">
        <Logo />
      </div>
      <div className="utils_center_abs">
        <HamBurger />
      </div>
      <div className="navigation__group">
        <span className="navigation__link">About us</span>
        <SuperScript text={"Projects"} super_script={"144+"} />
        <span className="navigation__link">Contact</span>
      </div>
    </div>
  )
}

// -------------------------
// sub components are present here
// -------------------------

export default Nav
