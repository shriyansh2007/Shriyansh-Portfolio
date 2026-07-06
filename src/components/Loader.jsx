import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// A brief "powering on" sequence styled like an oscilloscope boot —
// sets the tone before the hero even renders.
export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 600)
    }, 1400)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <svg width="180" height="60" viewBox="0 0 180 60">
            <motion.path
              d="M0 30 L30 30 L40 8 L55 52 L70 30 L90 30 L100 15 L115 45 L130 30 L180 30"
              fill="none"
              stroke="var(--signal)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </svg>
          <motion.p
            className="mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            establishing signal...
          </motion.p>

          <style>{`
            .loader {
              position: fixed;
              inset: 0;
              z-index: 999;
              background: var(--bg);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 1.25rem;
            }
            .loader p {
              color: var(--text-faint);
              font-size: 0.8rem;
              letter-spacing: 0.15em;
              text-transform: uppercase;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
