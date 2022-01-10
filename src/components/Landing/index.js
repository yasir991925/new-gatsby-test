import React from "react"
import Arrow from "/static/Arrow.svg"
import Filler from "../Filler"
import "./landing.sass"

function Landing() {
  return (
    <div>
      <div className="util_flex util_h90 landing_section">
        <h1 className="Landing__heading accent">
          Vision
          <br />
          Architects
          <br />
        </h1>
        <h3 className="Landing__sub_heading accent">& Interior Designers</h3>
        <h2 className="Landing__tag">
          Building the most innovative modern infrastructure
        </h2>
        <button className="Landing__start_button mt-2">
          <span className="text">Start</span>
          <span className="circle">
            <Arrow />
          </span>
        </button>
      </div>
      <Filler>
        <img src="https://images.unsplash.com/photo-1519662978799-2f05096d3636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
      </Filler>
    </div>
  )
}

export default Landing
