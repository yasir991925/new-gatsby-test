import React from "react"
import "../components/global_css/main.sass"
import Nav from "../components/NavBar"
import Landing from "../components/Landing"
import Services from "../components/Services"
import FadeEffectFiller from "../components/FadeEffectFiller"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Services />
      <FadeEffectFiller />
      <Projects />
      <Footer />
    </div>
  )
}
