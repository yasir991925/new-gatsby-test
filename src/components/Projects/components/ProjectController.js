import React from "react"
import SuperScript from "../../common_components/SuperScriptText"

// ------------------------------------------------
// PROJECT CONTROLLER
// ------------------------------------------------

const ProjectController = ({ changeState, active, data }) => {
  const renderLinks = () => {
    return data.map((d, i) => (
      <SuperScript
        text={d.type}
        super_script={d.count}
        key={i}
        active={active === d.type}
        styleClass={[
          i < data.length - 1
            ? typeof window !== "undefined" &&
              window &&
              window.screen.width < 800
              ? "mb-20"
              : "mr"
            : "",
        ]}
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
