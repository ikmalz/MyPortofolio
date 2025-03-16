import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';

const Speech = () => {
  return (
    <motion.div animate={{opacity:[0,1]}} transition={{duration:1}} className='bubbleContainer'>
      <div className="buble">
      <TypeAnimation
          sequence={[
            1000,
            "Same substring at the start will only be typed out once, initially",
            1000,
            "Lorem ipsum dolor sit amet lerinat consectetur adipisicing. ",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
        </div>
      <img src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech