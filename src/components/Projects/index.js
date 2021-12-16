import React, { useEffect, useRef, useState } from "react"
import "./project.sass"
import { project_data } from "./data"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import ProjectBoard from "./components/ProjectBoard"
import ProjectController from "./components/ProjectController"

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
