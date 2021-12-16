import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

// ------------------------------------------------
// PROJECT TILE
// ------------------------------------------------

const ProjectTile = props => {
  const { img_src, name, area, type, openProject } = props
  const [isProject, setOpenProject] = useState(false)
  const ImageOverlayDOM = useRef(null)
  const projectRef = useRef(null)

  useEffect(() => {
    if (isProject) {
      openProject(ImageOverlayDOM.current.getBoundingClientRect(), props.id)
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
      display: flex;
      flex-direction: column;
      justify-self: center;
      align-content: center;
      width: ${w}px;
      height: ${h}px;
      overflow: hidden;
      z-index: 3000;
    `

    return (
      <ImageContainerDOM ref={ImageOverlayDOM} className="imageOverlay">
        <img src={img_src} style={{ position: "relative", width: "120%" }} />
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
          <img src={img_src} className="ProjectTitle__image_container__image" />
        </div>
        <div className="ProjectTile__content" onClick={openProjectFn}>
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
