import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

const LiveIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)
const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
)
const InspectIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
)

function ProjectCard({ project, onInspect, delay }) {
  const isLive = project.status === 'Live'
  return (
    <article
      className={`project-card fade-up ${delay} bg-surface border border-border-col rounded-xl p-7 cursor-pointer flex flex-col gap-5 ${project.featured ? 'md:col-span-2' : ''}`}
      onClick={() => onInspect(project)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onInspect(project) } }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
    
     <div className="h-[180px] rounded-lg border border-border-col overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>

      {/* Meta row */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.7rem] text-muted tracking-[0.05em]">{project.number}</span>
        <span className={`text-[0.65rem] font-semibold tracking-[0.08em] uppercase px-[10px] py-[3px] rounded-full border ${
          isLive ? 'text-green-400 border-[#22c55e40] bg-[#22c55e10]' : 'text-amber-400 border-[#f59e0b40] bg-[#f59e0b10]'
        }`}>
          {project.status}
        </span>
      </div>

      {/* Body */}
      <div className="flex-1">
        <h3 className="font-heading font-bold text-[1.2rem] text-primary mb-2 tracking-[-0.01em]">{project.title}</h3>
        <p className="text-sm text-secondary leading-relaxed">{project.desc}</p>
      </div>


      <div className="flex flex-wrap gap-2" aria-label="Technologies used">
        {project.stack.map((t) => (
          <span
            key={t}
            className="font-mono text-[0.7rem] text-accent bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.25)] rounded px-2 py-[3px]"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap">
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 flex items-center justify-center gap-[6px] text-xs text-secondary bg-transparent border border-border-col rounded px-3 py-[6px] hover:text-primary hover:border-[rgba(59,130,246,0.4)] transition-colors no-underline"
        >
          <LiveIcon /> Live Demo
        </a>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 flex items-center justify-center gap-[6px] text-xs text-secondary bg-transparent border border-border-col rounded px-3 py-[6px] hover:text-primary hover:border-[rgba(59,130,246,0.4)] transition-colors no-underline"
        >
          <GithubIcon /> GitHub
        </a>
        <button
          onClick={(e) => { e.stopPropagation(); onInspect(project) }}
          className="flex-1 flex items-center justify-center gap-[6px] text-xs text-accent bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.25)] rounded px-3 py-[6px] hover:bg-accent hover:text-white transition-colors cursor-pointer"
        >
          <InspectIcon /> Inspect
        </button>
      </div>
    </article>
  )
}

const delays = ['', 'delay-1', 'delay-2', 'delay-3']

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="py-24" aria-labelledby="projects-heading">
      <div className="max-w-[1100px] mx-auto px-6">
        <header className="fade-up mb-14">
          <span className="font-mono text-[0.7rem] text-accent tracking-[0.15em] uppercase block mb-3">Featured work</span>
          <h2 id="projects-heading" className="font-heading font-bold text-primary mb-3" style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', letterSpacing: '-0.02em' }}>
            Projects Dashboard
          </h2>
          <p className="text-secondary leading-relaxed max-w-[480px]">
            Selected frontend builds, each treated as a deployable product, not just a coding exercise.
          </p>
        </header>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} onInspect={setActive} delay={delays[i % 4]} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
