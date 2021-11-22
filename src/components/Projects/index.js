import React from "react"
import SuperScript from "../common_components/SuperScriptText"
import "./project.sass"

function Projects() {
  return (
    <div className="section">
      <h1 className="accent_heading">Featured Projects</h1>
      <ProjectController />
    </div>
  )
}

export default Projects

// ----------------------
// Sub components
// ----------------------

const data = [
  { type: "Office", count: 23 },
  { type: "Restraunt", count: 17 },
  { type: "Hospital", count: 5 },
  { type: "Villa", count: 47 },
  { type: "Museums", count: 2 },
]

const ProjectController = () => {
  const renderLinks = () => {
    return data.map((d, i) => (
      <SuperScript
        text={d.type}
        super_script={d.count}
        key={i}
        styleClass={[i & 1 && i < data.length - 1 ? "ms" : ""]}
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
