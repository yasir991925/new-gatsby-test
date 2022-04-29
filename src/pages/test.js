import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import gsap from "gsap"

import "../components/test/test.sass"

function Test() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          project_images {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  const animate = () => {
    gsap.from(".image_tile_container > img", {
      x: "-100%",
      stagger: 0.2,
      ease: "Expo.easeOut",
      duration: 1.4,
      rotate: 0.001,
    })
  }

  return (
    <div>
      <div className="image_tile_container">{renderImages(data)}</div>
      <button onClick={() => animate()} className="top">
        Animate
      </button>
    </div>
  )
}

// **************

const renderImages = data => {
  return data.allProjectsJson.nodes.map((project, i) => {
    return (
      <img
        color={`${i}${i}${i}`}
        src={
          project.project_images[
            Math.floor(Math.random() * project.project_images.length)
          ].childImageSharp.fixed.src
        }
        className="image_tile"
        style={{ position: "absolute" }}
      />
    )
  })
}

// const Img = ({ color, className }) => {
//   return <div style={{ backgroundColor: `#${color}` }} className={className} />
// }

export default Test
