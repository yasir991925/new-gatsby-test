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
  const tl = gsap.timeline()

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

  const animteTilesXAxis = () => {
    gsap.to(gsap.utils.toArray(".ProjectTitle__image_container__image"), {
      scrollTrigger: {
        trigger: ".ProjectBoard",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
      x: "-20%",
    })
  }

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
    if (animating.current || value === state) return
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
        data={project_data.filter(d => d.type === state || state === "All")}
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
  const rows = 3
  const renderInRow = data => {
    return (
      <div className="col">
        {data.map((d, i) => (
          <ProjectTile
            idx={i}
            img_src={d.img}
            name={d.name}
            area={d.area}
            type={d.type}
            key={i}
          />
        ))}
      </div>
    )
  }

  const renderProjectTiles2 = rows => {
    const n = Math.floor(data.length / rows)
    const arr = []
    const count = new Array(rows).fill(n)
    for (let i = 0; i < data.length % rows; i++) {
      count[i] += 1
    }
    let prev = 0
    for (let i = 0; i < rows; i++) {
      arr.push(renderInRow(data.slice(prev, prev + count[i])))
      prev += count[i]
    }
    return arr
  }

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
    <div
      className="ProjectBoard"
      id="ProjectBoard"
      style={{ gridTemplateColumns: `repeat(${rows}, 1fr)` }}
    >
      {renderProjectTiles2(rows)}
    </div>
  )
}

// ------------------------------------------------
// PROJECT TILE
// ------------------------------------------------

const ProjectTile = ({ img_src, name, area, type }) => {
  return (
    <div className="ProjectTile">
      <div className="ProjectTitle__image_container">
        <img src={img_src} className="ProjectTitle__image_container__image" />
      </div>
      <div className="ProjectTile__content">
        <h1 className="project_t">{name}</h1>
        <div className="project_m">
          <div>Type - {type}</div>
          <div>
            Area - {area}m<sup>2</sup>
          </div>
        </div>
        <div className="seperate">
          <h2 className="accent">Visit</h2>
          <h2 className="project_y accent">2019</h2>
        </div>
      </div>
    </div>
  )
}
