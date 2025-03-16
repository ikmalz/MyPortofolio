import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Counter = ({ from, to, text }) => {
  const [count, setCount] = useState(from);
  const ref = useRef();
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 4, ease: "easeOut" },
      });

      let start = from;
      const interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= to) {
          clearInterval(interval);
        }
      }, (4000) / (to - from));
    }
  }, [isInView, from, to, controls]);

  return (
    <motion.div
      className='counter'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <h1>{count}+</h1>
      <p>{text}</p>
    </motion.div>
  );
};

export default Counter;