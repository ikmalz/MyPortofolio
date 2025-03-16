// import Hero from "./components/hero/hero";
// import Services from "./components/services/Services";
// import Portofolio from "./components/portofolio/Portofolio";
// import Contact from "./components/contact/contact";

import { lazy, Suspense } from "react"
import LazyLoad from "react-lazyload"

const Hero = lazy(() => import("./components/hero/hero"))
const Services = lazy(() => import("./components/services/Services"))
const Portofolio = lazy(() => import("./components/portofolio/Portofolio"))
const Contact = lazy(() => import("./components/contact/contact"))


const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={"loading......"}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading......"}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#services">
            <Services />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading......"}>
        <LazyLoad height={"600vh"} offset={-100}>
          {/* <section id="#portofolio"> */}
          <Portofolio />
          {/* </section> */}
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading......"}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#contact">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  )
}

export default App