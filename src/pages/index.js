import React from "react"
import "../components/global_css/main.sass"
import Nav from "../components/NavBar"
import Landing from "../components/Landing"
import Services from "../components/Services"
import FadeEffectFiller from "../components/FadeEffectFiller"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Services />
      <FadeEffectFiller />
      <Projects data={data} landing={true} />
      <Footer />
    </div>
  )
}

export const query = graphql`
  {
    allProjectsJson {
      nodes {
        Role
        area
        client
        slug
        title
        type
        year
        featureImg {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
