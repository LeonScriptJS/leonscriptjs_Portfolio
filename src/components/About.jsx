const GithubIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);
const LinkedinIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const TwitterIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const panels = [
  {
    label: "🎯 Focus",
    value: "Frontend Engineering",
    sub: ". React, component systems, responsive UI",
  },
  {
    label: "⚙️ Primary Stack",
    value: "React · Vite · JavaScript",
    sub: "· Tailwind · Git",
  },
  {
    label: "🧠 Strength",
    value: "UI systems & component thinking",
    sub: ". breaking interfaces into logical, reusable pieces",
  },
  {
    label: "🚧 Currently",
    value: "Building production-level portfolio projects",
    sub: "· actively seeking frontend roles",
  },
  { label: "📍 Location", value: "Lagos, Nigeria", sub: "· Open to remote" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/LeonScriptJS",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/leonard-c-udegbulem",
    Icon: LinkedinIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/LeonScriptJS",
    Icon: TwitterIcon,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <header className="fade-up mb-14">
          <span className="font-mono text-[0.7rem] text-accent tracking-[0.15em] uppercase block mb-3">
            Developer profile
          </span>
          <h2
            id="about-heading"
            className="font-heading font-bold text-primary"
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            About the System
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="fade-up">
            <div
  className="w-[120px] h-[120px] rounded overflow-hidden border-2 border-[rgba(59,130,246,0.25)] mb-5"
  aria-hidden="true"
>
  <img
    src="/leon.jpg"
    alt="Leon"
    className="w-full h-full object-cover"
  />
</div>
            <h3 className="font-heading font-bold text-xl text-primary mb-1">
              Leonard C. Udegbulem
            </h3>
            <p className="font-mono text-sm text-accent mb-4">
              Frontend Developer | LeonScriptJS
            </p>
            <p className="text-sm text-secondary leading-relaxed mb-6">
              Based in Lagos, Nigeria, building frontend systems with a
              product-first mindset. I focus on writing clean, component-based
              React code that's readable and maintainable. Currently growing
              through real projects and open to frontend opportunities.
            </p>

            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-secondary font-mono bg-raised border border-border-col rounded px-3 py-[7px] hover:text-accent hover:border-[rgba(59,130,246,0.4)] hover:bg-[rgba(59,130,246,0.08)] transition-colors no-underline"
                >
                  <Icon /> {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="fade-up delay-2 flex flex-col gap-3">
            {panels.map(({ label, value, sub }) => (
              <div
                key={label}
                className="bg-raised border border-border-col rounded-xl p-4 hover:border-[rgba(59,130,246,0.3)] transition-colors"
              >
                <span className="font-mono text-[0.65rem] text-accent tracking-[0.08em] uppercase block mb-2">
                  {label}
                </span>
                <p className="text-sm text-primary font-medium">
                  {value}{" "}
                  <span className="text-secondary font-normal">{sub}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
