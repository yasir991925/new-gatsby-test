import React, { useEffect } from "react"
import { gsap } from "gsap"
import { navigate } from "gatsby"
import ProjectTile from "./ProjectTile"

// ------------------------------------------------
// PROJECT BOARD
// ------------------------------------------------

const ProjectBoard = ({ data, active, rows }) => {
  const changePage = id => {
    navigate(`/projects/${id}`)
  }

  const openProject = (b, id) => {
    animateOpen(b, id, id => changePage(id))
  }

  const animateOpen = (b, id, cb) => {
    const tl = gsap.timeline()
    tl.set(".background-overlay", {
      zIndex: 1500,
    })
      .to(".background-overlay", {
        backdropFilter: "blur(50px)",
        backgroundColor: "#fefefe",
        duration: 1.7,
      })
      .fromTo(
        ".imageOverlay",
        {
          position: "fixed",
          left: b.x,
          top: b.y,
        },
        {
          position: "fixed",
          width: "100%",
          height: "100vh",
          left: 0,
          top: 0,
          duration: 2,
          ease: "Expo.easeInOut",
          onComplete: () => {
            if (typeof cb === "function") {
              cb(id)
            }
          },
        },
        -0.2
      )
  }

  const renderInRow = data => {
    return (
      <div className="col" key={Math.floor(Math.random() * 1000)}>
        {data.map((d, i) => (
          <ProjectTile
            id={d.id}
            fluid={d.fluid}
            name={d.name}
            area={d.area}
            type={d.type}
            key={Math.random() * 10000}
            slug={d.slug}
            openProject={openProject}
          />
        ))}
      </div>
    )
  }

  const renderProjectTiles = rows => {
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
      {renderProjectTiles(rows)}
      <div className="background-overlay" />
    </div>
  )
}

export default ProjectBoard
