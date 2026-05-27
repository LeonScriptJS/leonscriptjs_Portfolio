const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const Download = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

const stats = [
  { number: "5+", label: "Projects Built" },
  { number: "1yr", label: "Learning Depth" },
  { number: "8+", label: "Technologies" },
  { number: "Open", label: "For Hire" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-[60px]"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6 relative z-10 text-center">
        {/* Eyebrow */}
        <div
          className="fade-up inline-flex items-center gap-2 font-mono text-xs text-accent tracking-[0.15em] uppercase mb-5 border border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.08)] rounded-full px-4 py-2"
          aria-hidden="true"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-accent anim-pulse" />
          Frontend Developer
        </div>

        {/* Name */}
        <h1
          id="hero-heading"
          className="fade-up delay-1 font-heading font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Leonard C.
          <br />
          <span className="text-accent">Udegbulem</span>
        </h1>

        {/* Role tagline */}
        <p className="fade-up delay-2 text-secondary text-lg leading-relaxed max-w-[520px] mb-10 mx-auto">
          Building responsive UI systems with React, turning design into clean,
          deployable frontend products.
        </p>
        <div className="fade-up delay-3 flex flex-wrap gap-4 mb-16 justify-center">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold text-sm rounded-md border border-accent transition-all duration-200 hover:-translate-y-[2px] hover:bg-blue-600 hover:shadow-[0_8px_24px_rgba(59,130,246,0.4)] no-underline"
          >
            <ArrowRight /> View Projects
          </a>
          <a
            href="/Leonard_Udegbulem_Frontend_Developer_CV.pdf"
            download="Leonard_Udegbulem_Frontend_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-transparent text-primary font-semibold text-sm rounded-md border border-border-col transition-all duration-200 hover:-translate-y-[2px] hover:border-accent hover:text-accent hover:bg-[rgba(59,130,246,0.08)] no-underline"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="fade-up delay-4 flex justify-center gap-10 mb-12 flex-wrap">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-10">
              <div className="text-center">
                <div className="font-heading font-bold text-[1.75rem] text-primary leading-none">
                  {s.number}
                </div>
                <div className="text-xs text-muted mt-1 tracking-[0.05em]">
                  {s.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div
                  className="w-px bg-border-col self-stretch hidden sm:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="fade-up delay-5 flex flex-col items-center gap-2 text-muted font-mono text-[0.7rem] tracking-[0.1em]"
          aria-hidden="true"
        >
          <span>SCROLL</span>
          <div
            className="w-5 h-5 border-r-2 border-b-2 border-muted anim-bounce"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>
      </div>
    </section>
  );
}
