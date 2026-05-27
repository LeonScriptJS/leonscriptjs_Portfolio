import { skillGroups } from "../data/skills";

function SkillDots({ level }) {
  return (
    <div className="flex gap-1" aria-label={`Proficiency: ${level} out of 4`}>
      {[...Array(4)].map((_, i) => (
        <div key={i} className={`level-dot ${i < level ? "filled" : ""}`} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24" aria-labelledby="skills-heading">
      <div className="max-w-[1100px] mx-auto px-6">
        <header className="fade-up mb-14">
          <span className="font-mono text-[0.7rem] text-accent tracking-[0.15em] uppercase block mb-3">
            Capabilities
          </span>
          <h2
            id="skills-heading"
            className="font-heading font-bold text-primary mb-3"
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Tool Rack
          </h2>
          <p className="text-secondary leading-relaxed max-w-[480px]">
            Technologies I build with, grouped by where they fit in the frontend
            development process.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`fade-up ${group.delay} bg-surface border border-border-col rounded-xl p-6 hover:border-[rgba(59,130,246,0.3)] transition-colors`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 flex items-center justify-center bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.25)] rounded-lg text-lg"
                  aria-hidden="true"
                >
                  {group.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-primary">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-col gap-3" role="list">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between"
                    role="listitem"
                  >
                    <span className="skill-name text-sm text-secondary">
                      {skill.name}
                    </span>
                    <SkillDots level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
