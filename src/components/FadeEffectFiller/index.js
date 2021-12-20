import React, { useEffect } from "react"
import { gsap } from "gsap"

const text =
  "with over 30+ years of experience we have created some the most beautiful work"

function FadeEffectFiller() {
  const allowed = [2, 3, 4, 5]
  useEffect(() => {
    const tl = new gsap.timeline()
    tl.from(
      gsap.utils
        .toArray(".animate_t1")
        .filter((_, i) => !(allowed.indexOf(i) >= 0)),
      {
        scrollTrigger: {
          trigger: ".animate_t1_container",
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: "-40%",
        stagger: 0.1,
        ease: "Circ.easeOut",
      }
    )
  }, [allowed])

  const renderText = () => {
    return text.split(" ").map((t, i) => (
      <span className="heading11 util_flex animate_t1" key={i}>
        {t}&nbsp;{" "}
      </span>
    ))
  }

  return (
    <div
      className="section util_flex mtb-30 animate_t1_container"
      style={{ overflow: "visible" }}
    >
      <span className="util_flex_h accent w-80">{renderText()}</span>
    </div>
  )
}

export default FadeEffectFiller
