import React, { useEffect, useRef } from "react"
import Nav from "../components/NavBar"
import "../components/global_css/main.sass"
import "../components/About/about.sass"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const data = {
  founders: [
    {
      name: "Frank Underwood",
      designation: ["Proproetor", "Principal Architect"],
      img: "https://images.unsplash.com/photo-1612213467906-20440d15bdb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Claire Underwood",
      designation: ["Principal Architect"],
      img: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    },
  ],
  team: [
    {
      name: "John Doe",
      designation: ["Architect"],
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    },
    {
      name: "John Doe",
      designation: ["Architect"],
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    },
    {
      name: "John Doe",
      designation: ["Architect"],
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    },
    {
      name: "John Doe",
      designation: ["Architect"],
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    },
    {
      name: "John Doe",
      designation: ["Architect"],
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    },
    {
      name: "John Doe",
      designation: ["Architect"],
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    },
    {
      name: "John Doe",
      designation: ["Architect"],
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    },
  ],
}

function About() {
  const renderFounders = () => {
    return data.founders.map((f, i) => <Member data={f} small={false} />)
  }
  const renderTeam = () => {
    return data.team.map((t, i) => <Member data={t} small={true} />)
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".about_radial", {
      scrollTrigger: {
        trigger: ".about_radial",
        start: "center center",
        end: "bottom center",
        scrub: 1,
      },
      rotate: "-30",
    })
  }, [])

  return (
    <div className="About">
      <Nav />
      <div className="radial radial1 about_radial" />
      <div className="util_flex util_text_center accent About__section">
        <h2 className="accent">Our Philosophy</h2>
        <h1 className="accent">
          WE BELIEVE A BLEND OF TECHNOLOGY, TRADITION AND CREATIVITY CAN CREATE
          SPLENDID SPACES.
        </h1>
      </div>
      <h1 className="big_heading accent util_text_center space">Founders</h1>
      <div className="util_flex Member__founders">{renderFounders()}</div>
      <h1 className="big_heading accent util_text_center space">Team</h1>
      <div className="util_flex_h Member__team space">{renderTeam()}</div>
    </div>
  )
}

// ----------
// SUB COMPONENTS
// ----------

const Member = ({ data, small }) => {
  const first_name = data.name.split(" ")[0]
  const last_name = data.name.split(" ").slice(1).join(" ")
  const background_name_text_ref = useRef(null)
  const member_ref = useRef(null)
  const image_ref = useRef(null)
  useEffect(() => {
    if (background_name_text_ref && background_name_text_ref.current) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(background_name_text_ref.current, {
        scrollTrigger: {
          trigger: member_ref.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        x: "-15%",
      })
      gsap.to(image_ref.current, {
        scrollTrigger: {
          trigger: image_ref.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        y: "0%",
      })
    }
  }, [])

  return (
    <div className="Member util_flex" ref={member_ref}>
      {!small ? (
        <div className="Member__background_name util_flex">
          <span
            className="Member__background_name_text"
            ref={background_name_text_ref}
          >
            {data.name + " / " + data.name + " / " + data.name}
          </span>
        </div>
      ) : null}
      <div
        className={
          "Member__image_container util_flex_h" +
          (small ? " Member__small" : "")
        }
      >
        <img
          src={data.img}
          alt={data.name}
          ref={image_ref}
          className={!small ? "Member__image_container_img_big" : ""}
        />
      </div>
      <div
        className={
          "Member__content util_flex" + (!small ? " Member__content_big" : "")
        }
      >
        <h2 className="accent Member__content__name">
          <b>{first_name}</b> {last_name}
        </h2>
        {data.designation.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
    </div>
  )
}

export default About
