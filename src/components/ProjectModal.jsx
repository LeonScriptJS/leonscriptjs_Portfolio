import { useEffect, useRef, useCallback } from "react";


const BadgeLive = () => (
  <span className="text-[0.65rem] font-semibold tracking-[0.08em] uppercase px-[10px] py-[3px] rounded-full border text-green-400 border-[#22c55e40] bg-[#22c55e10]">
    Live
  </span>
);
const BadgeWip = () => (
  <span className="text-[0.65rem] font-semibold tracking-[0.08em] uppercase px-[10px] py-[3px] rounded-full border text-amber-400 border-[#f59e0b40] bg-[#f59e0b10]">
    In Progress
  </span>
);

export default function ProjectModal({ project, onClose }) {
  const isOpen = !!project;

  const closeBtnRef = useRef(null);


  const stableOnClose = useCallback(onClose, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") stableOnClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = isOpen ? "hidden" : "";


    if (isOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, stableOnClose]);

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) stableOnClose();
      }}
    >
      <div className={`modal-panel ${isOpen ? "active" : ""}`}>
        {project && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border-col sticky top-0 bg-surface z-10">
              <h2
                id="modal-title"
                className="font-heading font-bold text-lg text-primary"
              >
                {project.title}
              </h2>
              <button
                ref={closeBtnRef}
                onClick={stableOnClose}
                className="w-8 h-8 flex items-center justify-center text-secondary hover:text-primary bg-raised hover:bg-[#2d333b] rounded-md border border-border-col transition-colors text-sm hover:border-accent"
                aria-label="Close project details"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-6 flex-1">
              {/* Meta */}
              <div className="flex gap-3 flex-wrap">
                {project.status === "Live" ? <BadgeLive /> : <BadgeWip />}
                <span className="font-mono text-[0.65rem] text-muted self-center">
                  {project.role}
                </span>
              </div>

              {/* Problem */}
              <div>
                <p className="font-mono text-[0.65rem] text-accent tracking-[0.1em] uppercase mb-2 pb-2 border-b border-border-col">
                  Problem Statement
                </p>
                <p className="text-sm text-secondary leading-relaxed mt-3">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <p className="font-mono text-[0.65rem] text-accent tracking-[0.1em] uppercase mb-2 pb-2 border-b border-border-col">
                  Solution
                </p>
                <p className="text-sm text-secondary leading-relaxed mt-3">
                  {project.solution}
                </p>
              </div>

              {/* Challenges */}
              <div>
                <p className="font-mono text-[0.65rem] text-accent tracking-[0.1em] uppercase mb-3 pb-2 border-b border-border-col">
                  Technical Challenges
                </p>
                <div className="flex flex-col gap-3 mt-3">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-[6px] h-[6px] rounded-full bg-accent mt-[6px] flex-shrink-0" />
                      <p className="text-sm text-secondary leading-relaxed">
                        {c}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack breakdown */}
              <div>
                <p className="font-mono text-[0.65rem] text-accent tracking-[0.1em] uppercase mb-3 pb-2 border-b border-border-col">
                  Stack Breakdown
                </p>
                {Object.entries(project.stackBreakdown).map(([cat, techs]) => (
                  <div key={cat} className="mb-3 mt-3">
                    <p className="font-mono text-[0.65rem] text-muted tracking-[0.1em] uppercase mb-2">
                      {cat}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-accent bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.25)] rounded px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-[10px] bg-accent text-white text-xs font-semibold rounded-md border border-accent hover:bg-blue-600 transition-colors no-underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-[10px] bg-transparent text-primary text-xs font-semibold rounded-md border border-border-col hover:border-accent hover:text-accent hover:bg-[rgba(59,130,246,0.08)] transition-colors no-underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
