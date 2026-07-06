import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, PROFILE } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const ids = NAV_LINKS.map((l) => l.id)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a
          href="#hero"
          className="navbar-logo mono"
          onClick={(e) => {
            e.preventDefault()
            handleNav('hero')
          }}
        >
          <span className="logo-bracket">&lt;</span>
          SG
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className="navbar-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar-link mono ${active === link.id ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNav(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="navbar-cta mono"
        >
          GitHub ↗
        </a>

        <button
          className="navbar-burger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={menuOpen ? 'bar bar-1 open' : 'bar bar-1'} />
          <span className={menuOpen ? 'bar bar-2 open' : 'bar bar-2'} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mono ${active === link.id ? 'is-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.id)
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .navbar.is-scrolled {
          background: rgba(10, 14, 19, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.1rem;
          padding-bottom: 1.1rem;
        }
        .navbar-logo {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .logo-bracket { color: var(--signal); }
        .navbar-links {
          display: none;
          gap: 2.25rem;
        }
        @media (min-width: 860px) {
          .navbar-links { display: flex; }
        }
        .navbar-link {
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-dim);
          position: relative;
          padding-bottom: 4px;
          transition: color 0.25s ease;
        }
        .navbar-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 1px;
          width: 0;
          background: var(--signal);
          transition: width 0.25s ease;
        }
        .navbar-link:hover { color: var(--text); }
        .navbar-link.is-active { color: var(--signal); }
        .navbar-link.is-active::after { width: 100%; }

        .navbar-cta {
          display: none;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          border: 1px solid var(--line);
          padding: 0.5rem 0.9rem;
          border-radius: var(--radius);
          color: var(--text);
          transition: all 0.25s ease;
        }
        @media (min-width: 860px) {
          .navbar-cta { display: inline-block; }
        }
        .navbar-cta:hover {
          border-color: var(--signal);
          color: var(--signal);
          box-shadow: 0 0 14px rgba(94,234,212,0.25);
        }

        .navbar-burger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 0.5rem;
        }
        @media (min-width: 860px) {
          .navbar-burger { display: none; }
        }
        .bar {
          width: 22px;
          height: 2px;
          background: var(--text);
          transition: all 0.3s ease;
        }
        .bar-1.open { transform: translateY(3.5px) rotate(45deg); }
        .bar-2.open { transform: translateY(-3.5px) rotate(-45deg); }

        .mobile-menu {
          overflow: hidden;
          background: var(--bg-alt);
          border-bottom: 1px solid var(--line);
          display: flex;
          flex-direction: column;
        }
        .mobile-menu a {
          padding: 1rem var(--gutter);
          border-top: 1px solid var(--line);
          color: var(--text-dim);
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .mobile-menu a.is-active { color: var(--signal); }
      `}</style>
    </header>
  )
}
