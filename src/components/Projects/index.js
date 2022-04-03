import React, { useEffect, useRef, useState } from "react"
import "./project.sass"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import ProjectBoard from "./components/ProjectBoard"
import ProjectController from "./components/ProjectController"

// ------------------------------------------------
// PROJECTS (MAIN COMPONENT)
// ------------------------------------------------

function Projects({ data, landing }) {
  const project_data = filterDataFromGraphQLForBoard(data.allProjectsJson.nodes)
  const controller_data = filterDataFromGraphQLForController(
    data.allProjectsJson.nodes
  )
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
  const [state, changeState] = useState("All")
  const animating = useRef(false)
  const tl = gsap.timeline()

  const [cols, changeCols] = useState(null)

  useEffect(() => {
    if ((typeof window !== "undefined" && window.screen.width) < 800) {
      changeCols(1)
    } else {
      changeCols(3)
    }
  }, [cols])

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
  }, [cols])

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

  return cols ? (
    <div className="section project_section">
      <h1 className="accent_heading ">
        {landing ? "Featured Projects" : "Projects"}
      </h1>
      <ProjectController
        changeState={changeStateWrapper}
        active={state}
        data={controller_data}
      />
      <ProjectBoard
        rows={cols} // rows should be cols
        active={state}
        data={project_data.filter(d => d.type === state || state === "All")}
      />
    </div>
  ) : null
}

export default Projects

// -----------------------
// helper functions
// -----------------------

const filterDataFromGraphQLForController = data => {
  const counter = {}
  let all_count = 0
  data.forEach(d => {
    if (!counter[d.type]) {
      counter[d.type] = 0
    }
    counter[d.type] += 1
    all_count += 1
  })
  counter["All"] = all_count
  const ans = []
  Object.entries(counter).forEach(e => {
    ans.push({
      type: e[0],
      count: e[1],
    })
  })
  ans.sort((a, b) => (a.type <= b.type ? -1 : 1))
  return ans
}

const filterDataFromGraphQLForBoard = data => {
  const res = []
  data.forEach(d => {
    res.push({
      id: d.id,
      slug: d.slug,
      name: d.client,
      type: d.type,
      year: d.year,
      area: d.area,
      fluid: d.featureImg.childrenImageSharp[0].fluid,
    })
  })
  return res
}
