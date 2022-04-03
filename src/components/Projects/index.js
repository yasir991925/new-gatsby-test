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
  const project_image_deviation_y = 5

  const isBrowser = typeof window !== "undefined"

  let cols = 3

  useEffect(() => {
    if (isBrowser) {
      cols = window.screen.width < 800 ? 1 : 3
    }
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
    // animate the images in the main product page
    // gsap.to(
    //   gsap.utils.toArray(
    //     ".ProjectTitle__image_container > a > .gatsby-image-wrapper"
    //   ),
    //   {
    //     scrollTrigger: {
    //       trigger: ".ProjectBoard",
    //       start: "top center",
    //       end: "bottom center",
    //       scrub: 1,
    //       markers: true,
    //     },
    //     y: `-${project_image_deviation_y}%`,
    //   }
    // )
    // gsap.to(gsap.utils.toArray(".ProjectTitle__image_container"), {
    //   scrollTrigger: {
    //     trigger: ".ProjectBoard",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: 1,
    //     markers: true,
    //   },
    //   y: `${project_image_deviation_y}`,
    // })
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
      y: "-20%",
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
  )
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
