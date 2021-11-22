import React from "react"
import Nav from "../components/NavBar"
import "../components/global_css/main.sass"
import Landing from "../components/Landing"
import Services from "../components/Services"
import FadeEffectFiller from "../components/FadeEffectFiller"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <div>
      <Nav />
      <Landing />
      <Services />
      <FadeEffectFiller text="with over 30+ years of experience we have created some the most beautiful work" />
      <Projects />
    </div>
  )
}
