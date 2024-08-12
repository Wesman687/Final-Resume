import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/work1.png"
import work2 from "../../assets/Images/work2.png"
import work3 from "../../assets/Images/work3.png"
import work4 from '../../assets/Images/work4.png'
import work5 from '../../assets/Images/work5.png'
import work6 from '../../assets/Images/work6.png'
import work7 from '../../assets/Images/work7.png'
import work8 from '../../assets/Images/work8.png'

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Twitter Clone",
      year: "",
      img: work1,
      title: "Tweet Platform",
      detail: "Create a user profile, tweet to the platform, like, comment, and remove your tweets.  Optimized for best user experience.",
      url: "https://twitter-clone-rka575j3m-wesman687s-projects.vercel.app/",
      git: "https://github.com/Wesman687/twitter-clone/tree/master"
    },
    {
      client: "Music Player",
      year: "2022",
      img: work8,
      title: "Full Stack Music Player",
      detail: "A full stack music player, using vite, tailwindcss, mongoose, express, nodemon.  Play music, sort them by albums, add/remove music and albums from the admin page, running from a backend server.",
      url: "https://spotify-clone-ruddy-rho.vercel.app/",
      git: "https://github.com/Wesman687/mile-high"
    },
    {
      client: "Ecommerce Sight",
      year: "2022",
      img: work2,
      title: "Full Stack Ecommerce Sight, Admin Tools for Product Management",
      detail: "A fully functional Ecommerce sight, with Stripe Payment processing, Admin page for product Management, and Order history.  User authentication, with User Database to store purchases, and Contact information.",
      url: "https://mile-high.vercel.app/",
      git: "https://github.com/Wesman687/spotify-clone"
    },
    {
      client: "Gemini",
      year: "2023",
      img: work4,
      title: "Ai Gemini Clone",
      detail: "Fully functional AI Sight, using Gemini API.",
      url: "https://gemini-clone-lgfjtnz00-wesman687s-projects.vercel.app/",
      git: "https://github.com/Wesman687/Gemini-Clone"
    },
    {
      client: "Game Search",
      year: "2023",
      img: work5,
      title: "Gaming Search Platform",
      detail: "Gamer Search, with popular news, using MMOBomb.com Api. Searches games by text, date, mmo, shooter, rpg, etc.  Date.  Fully functional with best user experience possible.",
      url: "https://game-search-e1a575dcab7b.herokuapp.com/",
      git: "https://github.com/Wesman687/Game-Search"
    },
    {
      client: "AI Image Generator",
      year: "2023",
      img: work7,
      title: "AI Image Generator",
      detail: "Ai image generator that displays custom images depending on user input, along with extra options.",
      url: "https://ai-image-generator-qohm8mde9-wesman687s-projects.vercel.app/",
      git: "https://github.com/Wesman687/Ai-Image-Generator"
    },
    {
      client: "Ecommerce Sight",
      year: "2023",
      img: work6,
      title: "Online E-Book Sight",
      detail: "Search popular books, sort by price, and rating.  Contains a custom checkout.",
      url: "https://ecommerce-site-e249eed6484a.herokuapp.com/",
      git: "https://github.com/Wesman687/Ecommerce-Site"
    },
    {
      client: "NetFlix Clone",
      year: "2023",
      img: work3,
      title: "Netflix Movie Search",
      detail: "Search movies over youtube, with full user authentication using Firebase",
      url: "https://netflix-clone-6cnmwi081-wesman687s-projects.vercel.app/",
      git: "https://github.com/Wesman687/Netflix-Clone"
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
