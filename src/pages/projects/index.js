import React from "react"
import Nav from "../../components/NavBar"
import Projects from "../../components/Projects"
import { graphql } from "gatsby"

function AllProjects({ data }) {
  return (
    <div>
      <Nav />
      <Projects data={data} landing={false} />
    </div>
  )
}

export default AllProjects

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
