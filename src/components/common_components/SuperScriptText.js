import React from "react"

const SuperScript = ({ text, super_script, styleClass }) => {
  return (
    <span
      className={
        "super_link_container" + " " + (styleClass ? styleClass.join(" ") : "")
      }
    >
      <span className="super_link">
        {text}
        <span className="super_script_text">{super_script}</span>
      </span>
    </span>
  )
}

export default SuperScript
