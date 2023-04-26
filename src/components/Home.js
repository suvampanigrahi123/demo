import React from 'react'
import { motion,animate } from "framer-motion"
import TypeWriter from "typewriter-effect"
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from "../assets/logo.png"
import { useRef } from 'react'
const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);
  const animationCount = (num,refs) => {
    animate(0, num, {
      duration: 1,
      onUpdate: (v) => (refs.current.textContent = v.toFixed())
    })
  }
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity:0,
      },
      whileInView: {
        x: 0,
        opacity:1
      }
    },
    button: {
      initial: {
        y: "-100%",
        opacity:0,
      },
      whileInView: {
        y: 0,
        opacity:1
      }
   }
  }
  return (
      <div id='home'>
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hii, Suvam Here!
          </motion.h1>
          <TypeWriter options={{
            strings: ["A Devloper", "A Designer", "A Enthusiastic Coder"],
            autoStart: true,
            loop: true,
           cursor:"",
          wrapperClassName:"typeWriterPara"
          }} />
          <div>
          <a href="mailto:suvampanigrahi143@gmail.com">Hire Me</a>
          <a href="#work">Projects <BsArrowUpRight /> </a>
          
          </div>
          <article>
            <p>+
            <motion.span ref={clientCount} whileInView={()=>animationCount(100,clientCount)}></motion.span>
            </p>
            <span>Clients WorldWide</span>
          </article>
          <aside>
          <article>
            <p>+
            <motion.span ref={projectCount} whileInView={()=>animationCount(500,projectCount)}></motion.span>
            </p>
            <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>suvampanigrahi143@gmail.com</span>
            </article>
          </aside>
        </div>
          </section>
      <section>
        
        <img src={me} alt="Suvam's pic" />
      </section>
      <BsChevronDown />
    </div>
  )
}

export default Home