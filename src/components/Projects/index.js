import React, { useEffect, useRef, useState } from "react"
import SuperScript from "../common_components/SuperScriptText"
import "./project.sass"
import { project_data } from "./data"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// ------------------------------------------------
// PROJECTS (MAIN COMPONENT)
// ------------------------------------------------

function Projects() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
  const [state, changeState] = useState("All")
  const animating = useRef(false)
  const tl = new gsap.timeline()

  useEffect(() => {
    gsap.to(".Project__project_controller__group", {
      scrollTrigger: {
        trigger: ".ProjectBoard",
        start: "top center-=180",
        pin: ".Project__project_controller",
        pinSpacing: false,
        scrub: false,
        toggleActions: "play none none reverse",
      },
      scale: 1.01,
      boxShadow: "0px 30px 80px -32px rgb(0 0 0 / 79%)",
      border: "none",
    })
  }, [])

  const animateProjectTilesOut = cb => {
    tl.to(".ProjectTile", {
      y: "4%",
      opacity: 0,
      stagger: 0.03,
      onStart: () => {
        animating.current = true
      },
      onComplete: () => {
        cb()
        animating.current = false
      },
    })
  }

  const changeStateWrapper = value => {
    if (animating.current || value == state) return
    gsap.to(window, {
      scrollTo: { y: "#ProjectBoard", offsetY: 100 },
    })
    animateProjectTilesOut(() => {
      changeState(value)
      ScrollTrigger.refresh()
    })
  }

  return (
    <div className="section project_section">
      <h1 className="accent_heading ">Featured Projects</h1>
      <ProjectController changeState={changeStateWrapper} active={state} />
      <ProjectBoard
        active={state}
        data={project_data.filter(d => d.type == state || state === "All")}
      />
    </div>
  )
}

export default Projects

// ----------------------
// Sub components
// ----------------------

const data = [
  { type: "All", count: 62 },
  { type: "Office", count: 23 },
  { type: "Restraunt", count: 17 },
  { type: "Hospital", count: 5 },
  { type: "Villa", count: 47 },
  { type: "Museums", count: 2 },
]

// ------------------------------------------------
// PROJECT CONTROLLER
// ------------------------------------------------

const ProjectController = ({ changeState, active }) => {
  const renderLinks = () => {
    return data.map((d, i) => (
      <SuperScript
        text={d.type}
        super_script={d.count}
        key={i}
        active={active === d.type}
        styleClass={[i < data.length - 1 ? "mr" : ""]}
        onClick={() => {
          changeState(d.type)
        }}
      />
    ))
  }

  return (
    <div className="Project__project_controller util_flex">
      <div className="util_flex_h Project__project_controller__group">
        {renderLinks()}
      </div>
    </div>
  )
}

// ------------------------------------------------
// PROJECT BOARD
// ------------------------------------------------

const ProjectBoard = ({ data, active }) => {
  const renderProjectTiles = () => {
    return data.map((d, i) => (
      <ProjectTile img_src={d.img} name={d.name} area={d.area} key={i} />
    ))
  }

  useEffect(() => {
    gsap.fromTo(
      ".ProjectTile",
      {
        y: "-4%",
        opacity: 0,
      },
      { opacity: 1, stagger: 0.1, y: "0" }
    )
  }, [active])

  return (
    <div className="ProjectBoard" id="ProjectBoard">
      {renderProjectTiles()}
    </div>
  )
}

// ------------------------------------------------
// PROJECT TILE
// ------------------------------------------------

const ProjectTile = ({ img_src, name, area }) => {
  return (
    <div
      className="ProjectTile"
      style={{ gridColumn: `span ${Math.ceil(Math.random() * 4) + 2}` }}
    >
      <div
        className="ProjectTitle__image_container util_flex"
        style={{ maxHeight: `${Math.ceil(Math.random() * 30) + 30}vh` }}
      >
        <img src={img_src} className="ProjectTitle__image_container__image" />
      </div>
      <div className="ProjectTile__content">
        <span>{name} /</span>
        <span>
          {area} m<sup>2</sup>
        </span>
      </div>
    </div>
  )
}
