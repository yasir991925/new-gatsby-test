import React, { useEffect } from "react"
import "./services.sass"
import Arrow from "/static/Arrow.svg"
import { Link } from "gatsby"
import { gsap } from "gsap"

function Services() {
  const allowed = [2, 3, 4, 5]
  useEffect(() => {
    const tl = new gsap.timeline()
    tl.to(gsap.utils.toArray(".radial"), {
      scrollTrigger: {
        trigger: ".service_section",
        start: "top center",
        end: "bottom top",
        scrub: 1,
        toggleActions: "play none none none",
      },
      rotation: 30,
      transformOrigin: "50% 50%",
      stagger: 0.1,
      ease: "Circ.easeOut",
    })
  })

  return (
    <div className="section util_flex service_section">
      <h1 className="accent_heading">
        Amazing things
        <br />
        we do
      </h1>

      <div className="services_grid utils_m_auto">
        <div className="util_flex">
          <div className="radial radial1" />
        </div>
        <div className="Services__group">
          <div>
            <p className="heading3">Architectural Design</p>
            <p className="para">
              We have innovated the process to create stunning modern
              architectural designs
            </p>
            <Link to="/">
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
          <div className="radial radial2" />
        </div>
        <div className="Services__group">
          <div>
            <p className="heading3">Interior Designing</p>
            <p className="para">
              With one of the best designers we create the most iconic and
              unique experiences
            </p>
            <Link className="link" to="/">
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
          <div className="radial radial3" />
        </div>
        <div className="Services__group">
          <div>
            <p className="heading3">PMC</p>
            <p className="para">
              We start where innovative engineering meets most innvative art to
              build the strongest art pieces
            </p>
            <Link to="/">
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
