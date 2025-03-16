import { Suspense } from 'react'
import './hero.css/'
import Speech from './Speech'
import { animate, motion, stagger } from 'framer-motion'
import Shape from './shape'
import { Canvas } from '@react-three/fiber'

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
}
const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hsection left">
        {/* Title */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle">
          Hallo This Is,<br />
          <span>My Portofolio</span>
        </motion.h1>
        {/* awards */}
        <motion.div variants={awardVariants} initial="initial" animate="animate" className="awards">
          <motion.h2 variants={awardVariants}>Top Designer lokal</motion.h2>
          <motion.p variants={awardVariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </motion.p>
          <motion.div variants={awardVariants} className="awardlist">
            <motion.img variants={awardVariants} src="/award1.png" alt="" />
            <motion.img variants={awardVariants} src="/award2.png" alt="" />
            <motion.img variants={awardVariants} src="/award3.png" alt="" />
          </motion.div>
        </motion.div>
        {/* scrool svg */}
        <motion.a
          animate={{
            y: [0, 5],
            opacity: [0, 1, 0]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          href="#services" className='scroll'>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hsection right">
        {/* follow */}
        <motion.div variants={followVariants} initial="initial" animate="animate" className="follow">
          <motion.a variants={followVariants} href="https://www.instagram.com/ikmlfrz?igsh=MXN1MTI5NG05dTN0Yg==">
            <img src="instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="https://www.youtube.com/@ikmalfairuz4841">
            <img src="youtube.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="https://www.facebook.com/share/18VnhnEw2H/">
            <img src="facebook.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* Certifikat */}
        <motion.div animate={{opacity:[0,1]}} transition={{duration:1}} className="certificate">
          <img src="/logo_starbhak.jpeg" alt="" />
          Smk 
          <br />
          Taruna
          <br />
          Bhakti
        </motion.div>
        {/* contact button */}
        <motion.a href="/contact" className='contactLink' animate={{x:[200,0], opacity:[0,1]}} transition={{duration:2}}>
          <motion.div className="contactButton" animate={{rotate:[0, 360]}} transition={{duration: 10, repeat:Infinity, ease:'linear'}}>
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className='circleText'>
                <textPath href='#innerCirclePath'>Hire Now .</textPath>
              </text>
              <text className='circleText'>
                <textPath href='#innerCirclePath' startOffset="44%">Contact Me .</textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading....">
          <Shape/>
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/anime2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero