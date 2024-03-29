import React, { useEffect, useRef } from "react"

import "../components/global_css/main.sass"
import "./project_template.sass"
import Mouse from "/static/Mouse.svg"

import { graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Img from "gatsby-image"

// ----------------------
// Project Template (Main)
// ----------------------

function Template({ data }) {
  const {
    featureImg,
    client,
    type,
    area,
    address,
    year,
    Role,
    project_images,
    description,
  } = data.projectsJson
  const img_ref = useRef(null)
  const mouse_svg_ref = useRef(null)
  useEffect(() => {
    let end = null
    if (img_ref.current) {
      end = Math.floor(
        img_ref.current.getBoundingClientRect().bottom - window.innerHeight / 2
      )
    }
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".Project_T_img_container div img", {
      scrollTrigger: {
        trigger: ".Project_T_img_container",
        start: `${window.innerHeight / 2 + 1}px 50%`,
        end: `${end}px center`,
        scrub: 1,
        pin: ".Project_T_heading_container",
      },
      scale: 1.1,
      ease: "Sine.easeInOut",
    })
    gsap.utils.toArray(".animateTextContainer").forEach(el => {
      gsap.from(gsap.utils.toArray(el.querySelectorAll("span")), {
        y: "-200%",
        stagger: el.tagName == "H1" ? 0.1 : 0.01,
        duration: 1.4,
        ease: "Expo.easeOut",
        delay: el.tagName == "H1" ? 0 : 0.5,
      })
    })
    gsap.to(".Project_T_content_text", {
      scrollTrigger: {
        trigger: ".Project_T__image_container",
        pin: ".Project_T_content_text",
        markers: false,
        start: "top top",
        end: "bottom bottom",
      },
    })
  }, [])

  return (
    <div className="Project_T">
      <div className="util-flex">
        <div className="Project_T_heading_container util_flex">
          <AnimatedText
            text={client}
            class_name={"Landing__heading accent"}
            div_type="h1"
          />
          <div className="Project_T_meta">
            <div className="P_T_meta_container">
              <div className="P_T_meta">
                <AnimatedText text={"Client"} class_name="util_op_6" />
                <AnimatedText text={address} delimiter="#" div_type="h4" />
              </div>
              <div className="P_T_meta">
                <AnimatedText text={"Type"} class_name="util_op_6" />
                <AnimatedText text={type} div_type={"h4"} />
              </div>
              <div className="P_T_meta">
                <AnimatedText text={"Area"} class_name="util_op_6" />
                <AnimatedText text={area + "m"} div_type={"h4"} />
              </div>
            </div>
            <div className="center_absolute" ref={mouse_svg_ref}>
              <Mouse />
            </div>
            <div className="P_T_meta_container">
              <div className="P_T_meta">
                <AnimatedText
                  text={"Project Date"}
                  delimiter="#"
                  class_name="util_op_6"
                />
                <AnimatedText text={year} div_type={"h4"} delimiter="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="Project_T_img_container" ref={img_ref}>
          <Img
            fluid={featureImg.childImageSharp.fluid}
            className="P_T_img_container_img"
          />
        </div>
      </div>
      {/* <div className="Project_T_content">
        <h1 className="Landing__heading accent">Project Content</h1>
      </div> */}
      <div className="Project_T__image_container">
        <ProjectTImages images={project_images} />
        <div className="Project_T_content_text">
          <div>
            <h1 className="accent PT_client">{client}</h1>
            <p className="PT_address">{address.replace(/#/g, " ")}</p>
          </div>
          <hr className="mt-10" />
          <div className="Project_T_content_text_container">
            <div>
              <span>Type</span>
              <p>{type}</p>
            </div>
            <div>
              <span>Year</span>
              <p>{year}</p>
            </div>
            <div>
              <span>Area</span>
              <p>
                {area}m<sup>2</sup>
              </p>
            </div>
            <div className="PT_full_column">
              <span>Work</span>
              <p>{Role}</p>
            </div>
          </div>
          <hr className="mb-10" />
          <p className="PT_description">{description}</p>
        </div>
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
    projectsJson(slug: { eq: $slug }) {
      Role
      address
      area
      client
      id
      slug
      title
      type
      year
      description
      project_images {
        childrenImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featureImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// ----------------------
// Project Images Component
// ----------------------

const ProjectTImages = ({ images }) => {
  console.log(images)
  const renderImages = () => {
    return images.map((img, i) => (
      <div className="Project_T__ic_inner_image">
        <Img
          fluid={img.childrenImageSharp[0].fluid}
          className="Project_T__Project_image"
        />
      </div>
    ))
  }

  return <div>{renderImages()}</div>
}

// ----------------------
// Animate Intro
// ----------------------

const AnimatedWord = ({ text, class_name, div_type }) => {
  const renderCharacter = () => {
    return text
      .split("")
      .map((ch, i) =>
        ch == " " ? <span key={i}>&nbsp;</span> : <span key={i}>{ch}</span>
      )
  }
  switch (div_type) {
    case "h1":
      return (
        <h1
          className={"animateTextContainer " + (class_name ? class_name : "")}
        >
          {renderCharacter()}
        </h1>
      )
    case "h2":
      return (
        <h2
          className={"animateTextContainer " + (class_name ? class_name : "")}
        >
          {renderCharacter()}
        </h2>
      )
    case "h3":
      return (
        <h3
          className={"animateTextContainer " + (class_name ? class_name : "")}
        >
          {renderCharacter()}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={"animateTextContainer " + (class_name ? class_name : "")}
        >
          {renderCharacter()}
        </h4>
      )
    case "h5":
      return (
        <h5
          className={"animateTextContainer " + (class_name ? class_name : "")}
        >
          {renderCharacter()}
        </h5>
      )
    case "h6":
      return (
        <h6
          className={"animateTextContainer " + (class_name ? class_name : "")}
        >
          {renderCharacter()}
        </h6>
      )
    default:
      return (
        <span
          className={"animateTextContainer " + (class_name ? class_name : "")}
        >
          {renderCharacter()}
        </span>
      )
  }
}

const AnimatedText = props => {
  return (
    <div className="animateTextContainerGroup">
      {props.text
        .split(!props.delimiter ? " " : props.delimiter)
        .map((word, i) => (
          <AnimatedWord
            key={i}
            text={word}
            class_name={props.class_name}
            div_type={props.div_type}
          />
        ))}
    </div>
  )
}
