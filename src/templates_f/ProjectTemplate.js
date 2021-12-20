import React from "react"

import "./project_template.sass"

import { graphql } from "gatsby"
import Img from "gatsby-image"

// ----------------------
// Project Template (Main)
// ----------------------

function Template({ data }) {
  console.log(data)
  const { title, featureImg } = data.markdownRemark.frontmatter
  return (
    <div>
      <div className="Project_T_img_container">
        <Img fluid={featureImg.childImageSharp.fluid} />
      </div>
      <h1>{title}</h1>
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
