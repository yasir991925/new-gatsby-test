import React from "react"
import SuperScript from "../../common_components/SuperScriptText"

// ------------------------------------------------
// PROJECT CONTROLLER
// ------------------------------------------------

// need to push this to headless CMS
const data = [
  { type: "All", count: 62 },
  { type: "Office", count: 23 },
  { type: "Restraunt", count: 17 },
  { type: "Hospital", count: 5 },
  { type: "Villa", count: 47 },
  { type: "Museums", count: 2 },
]

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

export default ProjectController
