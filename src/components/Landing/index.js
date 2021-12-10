import React from "react"
import Arrow from "../global_css/static/Arrow.svg"
import Filler from "../Filler"
import "./landing.sass"

function Landing() {
  return (
    <div>
      <div className="util_flex util_h75">
        <h1 className="Landing__heading accent">
          Vision
          <br />
          Architechts
        </h1>
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
        <img src="https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
      </Filler>
    </div>
  )
}

export default Landing
