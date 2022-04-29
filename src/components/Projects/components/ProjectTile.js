import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

// ------------------------------------------------
// PROJECT TILE
// ------------------------------------------------

const ProjectTile = props => {
  const { fluid, name, area, type, openProject, slug } = props
  const [isProject, setOpenProject] = useState(false)
  const ImageOverlayDOM = useRef(null)
  const projectRef = useRef(null)

  useEffect(() => {
    if (isProject) {
      openProject(ImageOverlayDOM.current.getBoundingClientRect(), props.slug)
    }
  }, [isProject])

  const openProjectFn = () => {
    setOpenProject(true)
  }

  const createAnimteProjectTileImage = () => {
    const boundingRect = projectRef.current.getBoundingClientRect()
    const w = boundingRect.right - boundingRect.left
    const h = boundingRect.bottom - boundingRect.top
    const ImageContainerDOM = styled.div`
      position: absolute;
      width: ${w}px;
      height: ${h}px;
      overflow: hidden;
      z-index: 3000;
    `
    return (
      <ImageContainerDOM ref={ImageOverlayDOM} className="imageOverlay">
        <Img
          fluid={fluid}
          style={{
            position: "relative",
            width: "100%",
          }}
        />
      </ImageContainerDOM>
    )
  }

  return (
    <>
      {isProject ? createAnimteProjectTileImage() : null}
      <div className="ProjectTile">
        <div
          className="ProjectTitle__image_container"
          ref={projectRef}
          onClick={openProjectFn}
        >
          {/* <img src={img_src} className="ProjectTitle__image_container__image" /> */}

          <Link to={`/projects/${slug}`} onClick={e => e.preventDefault()}>
            <Img fluid={fluid} />
          </Link>
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
    </>
  )
}

export default ProjectTile
