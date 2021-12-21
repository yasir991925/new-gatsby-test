import React, { useEffect } from "react"

import "../components/global_css/main.sass"
import "./project_template.sass"

import { graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Img from "gatsby-image"

// ----------------------
// Project Template (Main)
// ----------------------

function Template({ data }) {
  const { title, featureImg, client } = data.markdownRemark.frontmatter

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.to(".Project_T_img_container div", {
      scrollTrigger: {
        trigger: ".Project_T_heading_container",
        start: `50% 50%`,
        end: `bottom center`,
        pin: true,
        pinSpacer: false,
        scrub: 1,
        markers: true,
      },
      height: "100vh",
      ease: "Sine.easeInOut",
    })
    gsap.from(".animateTextContainer span", {
      y: "-200%",
      stagger: 0.1,
      duration: 1.4,
      ease: "Expo.easeOut",
    })
  }, [])

  return (
    <div className="Project_T">
      <div className="util-flex">
        <div className="Project_T_heading_container util_flex">
          <AnimatedText text={client} class_name={"Landing__heading accent"} />
        </div>
        <div className="Project_T_img_container">
          <Img
            fluid={featureImg.childImageSharp.fluid}
            className="P_T_img_container_img"
          />
        </div>
      </div>
      <div className="Project_T_content">
        <h1 className="Landing__heading accent">Project Content</h1>
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
        client
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

// ----------------------
// Animate Intro
// ----------------------

const AnimatedWord = ({ text, class_name }) => {
  return (
    <h1 className={"animateTextContainer " + (class_name ? class_name : "")}>
      {text.split("").map((ch, i) => (
        <span key={i}>{ch}</span>
      ))}
    </h1>
  )
}

const AnimatedText = ({ text, class_name }) => {
  return (
    <div className="animateTextContainerGroup">
      {text.split(" ").map((word, i) => (
        <AnimatedWord text={word} class_name={class_name} />
      ))}
    </div>
  )
}
