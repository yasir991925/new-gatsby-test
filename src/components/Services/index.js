import React from "react"
import "./services.sass"
import Arrow from "../global_css/static/Arrow.svg"
import { Link } from "gatsby"

function Services() {
  return (
    <div className="section util_flex">
      <h1 className="accent_heading">
        Amazing things
        <br />
        we do
      </h1>

      <div className="services_grid utils_m_auto">
        <div className="util_flex">
          <div className="radial1" />
        </div>
        <div className="Services__group">
          <div>
            <p className="heading3">Architectural Design</p>
            <p className="para">
              We have innovated the process to create stunning modern
              architectural designs
            </p>
            <Link>
              Explore{" "}
              <span>
                <Arrow className="arrow_black" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="services_grid utils_m_auto mt-10">
        <div className="util_flex">
          <div className="radial2" />
        </div>
        <div className="Services__group">
          <div>
            <p className="heading3">Interior Designing</p>
            <p className="para">
              With one of the best designers we create the most iconic and
              unique experiences
            </p>
            <Link className="link">
              Explore{" "}
              <span>
                <Arrow className="arrow_black" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="services_grid utils_m_auto mt-10">
        <div className="util_flex">
          <div className="radial3" />
        </div>
        <div className="Services__group">
          <div>
            <p className="heading3">Constuction* need to change</p>
            <p className="para">
              We start where innovative engineering meets most innvative art to
              build the strongest art pieces
            </p>
            <Link>
              Explore{" "}
              <span>
                <Arrow className="arrow_black" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
