import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

function Test({ data }) {
  const renderProjects = () => {
    return data.allMarkdownRemark.nodes.map(p => {
      return (
        <div key={p.id}>
          <Link
            to={`/projects/${p.frontmatter.slug}`}
            className="test-hide"
            onClick={e => e.preventDefault()}
          >
            <div>hide this -- {p.frontmatter.title}</div>
          </Link>
          <h1 onClick={() => navigate(`/projects/${p.frontmatter.slug}`)}>
            {p.frontmatter.title}
          </h1>
          <p>{p.frontmatter.slug}</p>
          <Img fluid={p.frontmatter.featureImg.childImageSharp.fluid} />
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Hello</h1>
      {renderProjects()}
    </div>
  )
}

export default Test

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          Role
          slug
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
  }
`
