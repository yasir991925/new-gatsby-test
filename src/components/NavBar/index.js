import React, { useEffect, useState } from "react"
import "./navbar.sass"
import Logo from "/static/Logo.svg"
import HamBurger from "/static/HamBurger.svg"
import SuperScript from "../common_components/SuperScriptText"
import { Link } from "gatsby"
import gsap from "gsap"
import { useStaticQuery, graphql } from "gatsby"

function Nav() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          id
        }
      }
    }
  `)

  const projects_count =
    data && data.allProjectsJson && data.allProjectsJson.nodes.length

  const [overlay_open, setOverlayOpen] = useState(false)
  useEffect(() => {
    window.onscroll = function () {
      if (overlay_open) window.scrollTo(0, 0)
    }
  }, [overlay_open])

  const handleOverlay = () => {
    if (overlay_open) {
      closeAnimation(setOverlayOpen(false))
    } else {
      openAnimation(setOverlayOpen(true))
    }
  }

  const openAnimation = cb => {
    const tl = gsap.timeline()
    tl.to(".navigation_overlay", {
      transformOrigin: "50% top",
      scaleY: 1,
      userSelect: "auto",
    }).to(gsap.utils.toArray(".ani"), {
      opacity: 1,
      stagger: 0.03,
      ease: "Circ.easeIn",
      duration: 0.5,
      onComplete: () => {
        if (typeof cb === "function") {
          cb()
        }
      },
    })
  }

  const closeAnimation = cb => {
    const tl = gsap.timeline()
    tl.to(gsap.utils.toArray(".ani"), {
      opacity: 0,
      stagger: 0.03,
      ease: "Circ.easeIn",
      duration: 0.5,
      userSelect: "none",
    }).to(".navigation_overlay", {
      transformOrigin: "50% top",
      scaleY: 0,
      onComplete: () => {
        if (typeof cb === "function") {
          cb()
        }
      },
    })
  }

  return (
    <>
      <div className="navigation_overlay">
        <div className="nav_overlay__link_section">
          <Link to="/">
            <h1 className="accent ani">Home</h1>
          </Link>
          <Link to="/projects/">
            <h1 className="accent ani">Projects</h1>
          </Link>
          <Link to="/about">
            <h1 className="accent ani">About Us</h1>
          </Link>
          <Link to="/">
            <h1 className="accent ani">Contact Us</h1>
          </Link>
        </div>
        <div className="nav_overlay__info_section">
          <div className="nav_overlay_address_group">
            <h3 className="ani">Chicago Office</h3>
            <p className="ani">
              22 Jump Street near City Church, Downtown, New York, 223141
            </p>
          </div>
          <div className="nav_overlay_address_group">
            <h3 className="ani">New York Office</h3>
            <p className="ani">
              22 Jump Street near City Church, Downtown, New York, 223141
            </p>
          </div>
          <div className="nav_overlay_address_group">
            <h3 className="ani">+1 (123)-314-1412</h3>
            <h3 className="ani">contact@visionarchites.com</h3>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="navigation__group">
          <Logo />
        </div>
        <div className="navigation__group">
          <Link to="/">
            <span className="navigation__link">Home</span>
          </Link>
          <Link to="/about">
            <span className="navigation__link">About us</span>
          </Link>
          <Link to="/projects/">
            <SuperScript text={"Projects"} super_script={projects_count} />
          </Link>
          <span className="navigation__link">Contact</span>
        </div>
      </div>
      <div className="utils_center_abs">
        <div onClick={handleOverlay} className="ham">
          <HamBurger />
        </div>
      </div>
    </>
  )
}

// -------------------------
// sub components are present here
// -------------------------

export default Nav
