import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';

const Speech = () => {
  return (
    <motion.div animate={{opacity:[0,1]}} transition={{duration:1}} className='bubbleContainer'>
      <div className="buble">
      <TypeAnimation
          sequence={[
            1000,
            "Hey there! I'm a beginner web developer 🌱",
            2000,
            "Learning step by step, one line of code at a time 💻",
            2000,
            "Dreaming big: Fullstack Developer in the making 🚀",
            2000,
            "Mistakes? Just part of the journey 💪",
            2000,
            "Every bug I fix, I'm one step closer 🔧✨",
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
        </div>
      <img src="/anime4.png" alt="" />
    </motion.div>
  )
}

export default Speech