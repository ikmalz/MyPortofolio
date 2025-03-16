import { } from "./contact.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import ContactSvg from "./ContactSvg";

const listVariants = {
  initial: {
    x: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
}


const Contact = () => {
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSucces(true);
          setError(false);
        },
        (error) => {
          console.log(error)
          setError(true);
          setSucces(false);
        },
      );
  };

  const isInView = useInView(ref, { margin: "-200px" })

  return (
    <div className='contact'>
      <div className="cSection">
        <motion.form variants={listVariants} animate={isInView ? "animate" : "initial"} ref={ref} onSubmit={sendEmail}>
          <motion.h1 variants={listVariants}  className="cTitle">Let's keep in touch</motion.h1>
          <motion.div variants={listVariants}  className="formItem">
            <label>Name</label>
            <input type="text" name="user_username" placeholder="ikmal aja" />
          </motion.div>
          <motion.div variants={listVariants}  className="formItem">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Ikmal@gmail.com" />
          </motion.div>
          <motion.div variants={listVariants}  className="formItem">
            <label>Message</label>
            <textarea rows={10} name="user_message" placeholder="Write your message......." ></textarea>
          </motion.div>
          <motion.button variants={listVariants}  className="formButton">Send</motion.button >
          {succes && <span>Your message has been sent!</span>}
          {error && <span>Something when wrong</span>}
        </motion.form>
      </div>
      <div className="cSection"><ContactSvg /></div>
    </div>
  )
}

export default Contact