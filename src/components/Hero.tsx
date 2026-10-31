import { useEffect, useRef, useState } from 'react'
import { profile } from '../content'
import { usePrefersReducedMotion } from '../hooks'
import { mountParticlePortrait } from '../three/particlePortrait'
import { ArrowDown, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

const ACCENT = '#3de6ff'

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [count, setCount] = useState<number | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    return mountParticlePortrait(stage, {
      src: '/headshot.webp',
      accent: ACCENT,
      reducedMotion,
      onReady: setCount,
      onError: () => setFailed(true),
    })
  }, [reducedMotion])

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="pill" data-reveal>
            <span className="pill__dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 className="hero__name" data-reveal>
            Miran
            <br />
            <span className="hero__name-last">Jamadar</span>
          </h1>
          <p className="hero__role" data-reveal>
            <span className="accent">{profile.role}</span>
            <span className="hero__sep" aria-hidden="true">/</span>
            {profile.subtitle}
          </p>
          <p className="hero__tagline" data-reveal>
            {profile.tagline}
          </p>
          <ul className="stats" data-reveal>
            {profile.stats.map((s) => (
              <li key={s.label} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </li>
            ))}
          </ul>
          <div className="hero__actions" data-reveal>
            <a className="btn btn--accent" href="#projects">
              View my work
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
            <div className="hero__socials">
              <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="portrait" ref={stageRef}>
            <div className="portrait__halo" aria-hidden="true" />
            {failed && <img className="portrait__fallback" src="/headshot.webp" alt={`Portrait of ${profile.name}`} />}
            <span className="portrait__corner portrait__corner--tl" aria-hidden="true" />
            <span className="portrait__corner portrait__corner--br" aria-hidden="true" />
          </div>
          <p className="portrait__hud mono" aria-hidden="true">
            <span>// neural render</span>
            <span>{count ? `${count.toLocaleString('en-IN')} particles` : 'assembling…'}</span>
            <span className="portrait__hint">move your cursor</span>
          </p>
          <span className="sr-only">Portrait of {profile.name}, drawn with animated particles.</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About">
        <ArrowDown />
      </a>
    </section>
  )
}
