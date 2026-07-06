import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import SignalTrace from './components/SignalTrace'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  return (
    <>
      <Loader onDone={() => setLoading(false)} />

      {!loading && (
        <>
          <motion.div className="scroll-progress" style={{ scaleX }} />
          <SignalTrace />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}

      <style>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--signal);
          transform-origin: 0%;
          z-index: 200;
          box-shadow: 0 0 8px var(--signal);
        }
      `}</style>
    </>
  )
}
