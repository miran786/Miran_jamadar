import { useEffect, useState } from 'react'
import { nav, profile } from '../content'
import { useScrollState } from '../hooks'
import { CloseIcon, MenuIcon } from './icons'

export function Nav() {
  const { scrolled, progress, active } = useScrollState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // The sheet sits outside <header>: the header's backdrop-filter would otherwise
  // become the containing block for the fixed-position sheet and collapse it.
  return (
    <>
      <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
        <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
        <div className="container nav__inner">
          <a href="#top" className="nav__logo" aria-label={`${profile.name}, back to top`}>
            <span className="nav__mark">MJ</span>
            <span className="nav__name">{profile.name}</span>
          </a>
          <nav aria-label="Primary">
            <ul className="nav__links">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={active === item.id ? 'is-active' : ''}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn--small btn--accent nav__cta" href={`mailto:${profile.email}`}>
            Say hello
          </a>
          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={`sheet ${open ? 'sheet--open' : ''}`} hidden={!open}>
        <ul>
          {nav.map((item, i) => (
            <li key={item.id} style={{ transitionDelay: `${60 + i * 40}ms` }}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                <span className="mono">0{i + 1}</span> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
