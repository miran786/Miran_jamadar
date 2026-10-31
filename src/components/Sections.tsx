import { useState, type ReactNode } from 'react'
import {
  about,
  awards,
  certifications,
  experience,
  moreBuilds,
  openSource,
  otherPublications,
  papers,
  patent,
  profile,
  projects,
  skills,
  underReview,
} from '../content'
import { spotlight } from '../hooks'
import {
  ArrowUpRight,
  CheckIcon,
  CopyIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ProjectGlyph,
} from './icons'

function SectionHead({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <header className="section-head" data-reveal>
      <p className="eyebrow mono">
        <span className="accent">{index}</span> / {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function ExtLink({ href, children, className = 'link' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight width={15} height={15} />
    </a>
  )
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead index="01" eyebrow="About" title={<>From a family computer shop <span className="muted">to AI research.</span></>} />
        <div className="about">
          <figure className="about__photo" data-reveal>
            <img src="/headshot.webp" alt={`${profile.name}, headshot`} width={739} height={1088} loading="lazy" />
            <span className="frame frame--tl" aria-hidden="true" />
            <span className="frame frame--br" aria-hidden="true" />
          </figure>
          <div className="about__body">
            {about.paragraphs.map((p, i) => (
              <p key={i} data-reveal>
                {p}
              </p>
            ))}
            <dl className="facts" data-reveal>
              {about.facts.map((f) => (
                <div key={f.k}>
                  <dt className="mono">{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
            <div className="edu" data-reveal>
              {about.education.map((e) => (
                <article key={e.school} className="edu__item">
                  <p className="edu__period mono">{e.period}</p>
                  <h3>{e.school}</h3>
                  <p>{e.degree}</p>
                  <p className="accent edu__note">{e.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead index="02" eyebrow="Experience" title={<>Where I've <span className="muted">shipped.</span></>} />
        <ol className="timeline">
          {experience.map((role) => (
            <li key={role.org} className="timeline__item" data-reveal>
              <div className="timeline__meta">
                <p className="mono timeline__period">{role.period}</p>
                <p className="timeline__place">{role.place}</p>
              </div>
              <article className="card card--glow" onPointerMove={spotlight}>
                <h3 className="role__title">{role.title}</h3>
                <p className="role__org">
                  {role.org}
                  {role.orgNote && <span className="muted"> · {role.orgNote}</span>}
                </p>
                <ul className="bullets">
                  {role.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {role.stack && <Tags items={role.stack} />}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function CopyDoi({ doi }: { doi: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className="link link--button"
      onClick={() => {
        navigator.clipboard?.writeText(doi).then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 1600)
        })
      }}
      aria-label={`Copy DOI ${doi}`}
    >
      {copied ? <CheckIcon width={15} height={15} /> : <CopyIcon width={15} height={15} />}
      <span className="mono">DOI {doi}</span>
    </button>
  )
}

export function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHead
          index="03"
          eyebrow="Research & Patent"
          title={<>Ideas that went <span className="muted">on the record.</span></>}
        />
        <article className="card card--glow patent" data-reveal onPointerMove={spotlight}>
          <div className="patent__badge mono">
            <span className="pill__dot" aria-hidden="true" /> Patent · Published
          </div>
          <h3 className="patent__title">{patent.title}</h3>
          <p className="patent__meta mono">{patent.meta}</p>
          <p className="patent__summary">{patent.summary}</p>
          <div className="patent__number" aria-hidden="true">
            {patent.number}
          </div>
        </article>

        <div className="papers">
          {papers.map((p) => (
            <article key={p.doi} className="card card--glow paper" data-reveal onPointerMove={spotlight}>
              <p className="paper__venue mono">
                <span className="badge">{p.venue}</span>
              </p>
              <h3 className="paper__title">{p.title}</h3>
              <p className="paper__authors">
                {p.authors.split('M. Jamadar').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <strong className="accent">M. Jamadar</strong>}
                  </span>
                ))}
              </p>
              <p className="paper__summary">{p.summary}</p>
              <div className="paper__links">
                <ExtLink href={p.url}>IEEE Xplore</ExtLink>
                <CopyDoi doi={p.doi} />
              </div>
            </article>
          ))}
        </div>

        <div className="research-extra">
          <article className="card review" data-reveal>
            <p className="mono review__label">
              <span className="dot-pulse" aria-hidden="true" /> Under review · {underReview.venue}
            </p>
            <h3>{underReview.title}</h3>
            <p>{underReview.summary}</p>
          </article>
          <div className="other-pubs" data-reveal>
            <p className="mono eyebrow">Other publications</p>
            {otherPublications.map((o) => (
              <p key={o.title}>
                <ExtLink href={o.url}>{o.title}</ExtLink>
                <span className="muted"> · {o.venue}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          index="04"
          eyebrow="Projects"
          title={<>Things I've <span className="muted">built.</span></>}
          intro="Machine learning, full stack, security and mobile: the projects I'd most like to talk about."
        />
        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.name} className="card card--glow project" data-reveal onPointerMove={spotlight}>
              <div className="project__top">
                <span className="project__glyph">
                  <ProjectGlyph kind={p.glyph} />
                </span>
                <span className="mono project__index">0{i + 1}</span>
              </div>
              <p className="mono project__domain">{p.domain}</p>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__kicker">{p.kicker}</p>
              <p className="project__desc">{p.description}</p>
              <Tags items={p.stack} />
              {p.links.length > 0 && (
                <div className="project__links">
                  {p.links.map((l) => (
                    <ExtLink key={l.url} href={l.url}>
                      {l.label === 'GitHub' && <GitHubIcon width={15} height={15} />}
                      {l.label}
                    </ExtLink>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <h3 className="subhead" data-reveal>
          More builds
        </h3>
        <ul className="more">
          {moreBuilds.map((b) => (
            <li key={b.name} className="more__item" data-reveal>
              <p className="mono more__context">{b.context}</p>
              <h4>
                {b.url ? (
                  <ExtLink href={b.url} className="link link--plain">
                    {b.name}
                  </ExtLink>
                ) : (
                  b.name
                )}
              </h4>
              <p>{b.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Recognition() {
  return (
    <section id="recognition" className="section">
      <div className="container">
        <SectionHead index="05" eyebrow="Recognition" title={<>Awards, certifications <span className="muted">& open source.</span></>} />
        <div className="recog">
          <div className="recog__col" data-reveal>
            <p className="mono eyebrow">Awards</p>
            <ul className="list">
              {awards.map((a) => (
                <li key={a.title + a.detail}>
                  <strong>{a.title}</strong>
                  <span>{a.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="recog__col" data-reveal>
            <p className="mono eyebrow">Certifications & training</p>
            <ul className="list">
              {certifications.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}</strong>
                  <span>{c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="recog__col" data-reveal>
            <p className="mono eyebrow">Open source</p>
            <article className="card card--glow oss" onPointerMove={spotlight}>
              <GitHubIcon width={28} height={28} />
              <h3>{openSource.title}</h3>
              <p>{openSource.detail}</p>
              <ExtLink href={openSource.url}>See my pull requests</ExtLink>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section section--tight">
      <div className="container">
        <SectionHead index="06" eyebrow="Toolkit" title={<>What I <span className="muted">work with.</span></>} />
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skills__group" data-reveal>
              <p className="mono skills__label">{s.group}</p>
              <Tags items={s.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__inner" data-reveal>
          <p className="eyebrow mono">
            <span className="accent">07</span> / Contact
          </p>
          <h2 className="contact__title">
            Let's build something
            <br />
            <span className="accent-gradient">that works.</span>
          </h2>
          <p className="section-intro">{profile.availability} The fastest way to reach me is email.</p>
          <div className="contact__actions">
            <a className="btn btn--accent btn--large" href={`mailto:${profile.email}`}>
              <MailIcon /> {profile.email}
            </a>
            <button
              className="btn btn--ghost btn--large"
              onClick={() => {
                navigator.clipboard?.writeText(profile.email).then(() => {
                  setCopied(true)
                  setTimeout(() => setCopied(false), 1600)
                })
              }}
            >
              {copied ? <CheckIcon /> : <CopyIcon />} {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
          <ul className="contact__list">
            <li>
              <a href={profile.phoneHref}>
                <PhoneIcon /> {profile.phone}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon /> linkedin.com/in/miran-jamadar
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> github.com/miran786
              </a>
            </li>
            <li>
              <span>
                <PinIcon /> {profile.location}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <p className="mono muted">Built with React & Three.js · Hosted on Vercel</p>
        <a href="#top" className="link">
          Back to top
        </a>
      </div>
    </footer>
  )
}
