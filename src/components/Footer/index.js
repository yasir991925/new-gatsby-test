import React from "react"
import "./footer.sass"

// ------------------------------------------
// # FOOTER ( MAIN COMPONENT )
// ------------------------------------------

function Footer() {
  return (
    <div className="Footer util_h100">
      <div className="Footer__content">
        <div className="Footer__section">
          <h4>
            Useful Links <br />
            Home / Project / About us / Contact
          </h4>
        </div>
        <div className="Footer__section">
          <h4>Office</h4>
          <p>
            22 Jump Street <br /> Downtown, New York <br /> 21412
          </p>
          <p>
            22 Jump Street <br /> Downtown, New York <br /> 21412
          </p>
        </div>
        <div className="Footer__section">
          <h4>Contact</h4>
          <p>(+91) 991341231</p>
          <p>(+91) 991341231</p>
        </div>
        <div className="Footer__section">
          <h1 className="accent">
            Vision
            <br />
            architects
          </h1>
        </div>
      </div>
      <div className="Footer__content"></div>
    </div>
  )
}

export default Footer
