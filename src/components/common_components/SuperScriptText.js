import React from "react"
import "./superScript.sass"

const SuperScript = ({ text, super_script, styleClass, onClick, active }) => {
  return (
    <span
      onClick={onClick}
      className={
        "super_link_container" +
        " " +
        (styleClass ? styleClass.join(" ") : "") +
        (active ? " bold" : "")
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
