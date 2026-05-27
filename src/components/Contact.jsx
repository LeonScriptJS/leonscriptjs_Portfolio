export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <header className="fade-up mb-14 text-center">
          <span className="font-mono text-[0.7rem] text-accent tracking-[0.15em] uppercase block mb-3">
          Get in touch
          </span>
          <h2
            id="contact-heading"
            className="font-heading font-bold text-primary mb-3"
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Terminal Node
          </h2>
          <p className="text-secondary leading-relaxed max-w-[480px] mx-auto">
            Open to frontend internship &amp; entry-level opportunities and project
            collaborations. Let's connect.
          </p>
        </header>

        <div className="fade-up delay-1 max-w-[640px] mx-auto">
          {/* Terminal window */}
          <div
            className="bg-surface border border-border-col rounded-xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
            role="region"
            aria-label="Contact information terminal"
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-3 px-4 py-3 bg-raised border-b border-border-col"
              aria-hidden="true"
            >
              <div className="flex gap-[6px]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-muted mx-auto">
                leon@devworkspace — zsh
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-5 font-mono text-sm flex flex-col gap-4">
              {/* Command 1 */}
              <p className="flex items-center gap-2">
                <span className="text-accent">❯</span>
                <span className="text-green-400">connect --leon</span>
              </p>
              <div className="pl-4 border-l-2 border-border-col flex flex-col gap-1">
                <p className="text-[0.65rem] text-muted tracking-[0.1em] uppercase">
                  Email
                </p>
                <p>
                  <a
                    href="mailto:leonard.c.udegbulem@gmail.com"
                    className="text-primary border-b border-border-col hover:text-accent hover:border-accent transition-colors no-underline"
                  >
                    leonard.c.udegbulem@gmail.com
                  </a>
                </p>
              </div>

              {/* Command 2 */}
              <p className="flex items-center gap-2">
                <span className="text-accent">❯</span>
                <span className="text-green-400">show --links</span>
              </p>
              <div className="pl-4 border-l-2 border-border-col flex flex-col gap-3">
                <div>
                  <p className="text-[0.65rem] text-muted tracking-[0.1em] uppercase mb-1">
                    GitHub
                  </p>
                  <p>
                    <a
                      href="https://github.com/LeonScriptJS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary border-b border-border-col hover:text-accent hover:border-accent transition-colors no-underline"
                    >
                      github.com/LeonScriptJS
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] text-muted tracking-[0.1em] uppercase mb-1">
                    LinkedIn
                  </p>
                  <p>
                    <a
                      href="https://linkedin.com/in/leonard-c-udegbulem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary border-b border-border-col hover:text-accent hover:border-accent transition-colors no-underline"
                    >
                      linkedin.com/in/leonard-c-udegbulem
                    </a>
                  </p>
                </div>
              </div>

              {/* Command 3 */}
              <p className="flex items-center gap-2">
                <span className="text-accent">❯</span>
                <span className="text-green-400">status --availability</span>
              </p>
              <div className="pl-4 border-l-2 border-border-col">
                <p className="text-[0.65rem] text-muted tracking-[0.1em] uppercase mb-1">
                  Status
                </p>
                <p className="text-green-400">
                  ✓ Open to frontend internship &amp; entry-level opportunities
                </p>
              </div>

              {/* Cursor */}
              <p className="flex items-center gap-2 mt-1">
                <span className="text-accent">❯</span>
                <span
                  className="terminal-cursor anim-blink"
                  aria-hidden="true"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
