import React from "react"

import "../components/global_css/main.sass"
import "./project_template.sass"

import { graphql } from "gatsby"
import Img from "gatsby-image"

// ----------------------
// Project Template (Main)
// ----------------------

function Template({ data }) {
  const { title, featureImg } = data.markdownRemark.frontmatter
  return (
    <div className="Project_T">
      <div className="Project_T_img_container">
        <Img fluid={featureImg.childImageSharp.fluid} />
      </div>
      <div>
        <h1 className="Landing__heading accent">{title}</h1>
      </div>
    </div>
  )
}

export default Template

// ----------------------
// utils
// ----------------------

export const query = graphql`
  query projectPageQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        Role
        title
        featureImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
